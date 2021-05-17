# Pet System
### Estrutura de Diretórios

    -> pages
	    -> api
    -> src
	    -> components
	    -> controllers
	    -> database
		    -> migrations
		    -> seeds
	    -> models
	    -> screens
		-> utils

**-> pages**
* Pasta em que serão colocados os arquivos correspondentes a uma rota do frontend. Cada arquivo representará uma rota e, portanto, uma página. Caso existam subrotas ou rotas que recebem parâmetros, será necessário criar uma pasta para a rota principal, com arquivos para as subrotas.

	**-> api**
	* Pasta em que ficarão as rotas de backend da aplicação. Cada arquivo é um endpoint da API e deve encaminhar para o controller correspondente. Caso um endpoint precise ser capaz de receber requisições de diferentes métodos HTTP (por exemplo, um endpoint /api/user pode precisar de conseguir cadastrar um usuário ou buscar um usuário), deve-se tratar esses casos dentro desse arquivo do endpoint e chamar a função correspondente do controller (no exemplo citado, deve-se verificar qual o método e chamar uma função do tipo createUser no caso POST e uma função do tipo getUserById no caso GET). Os arquivos de endpoint aqui definidos devem APENAS definir qual a tarefa a ser feita, de acordo com o método HTTP, e encaminhar para que a função do Controller se encarregue do restante.

**-> src**
* Pasta onde ficará o restante do nosso código, sendo ele dividido da seguinte forma:
	**-> components**
	* Pasta em que ficarão os componentes reaproveitáveis da aplicação, que poderão aparecer nas diversas páginas. Para cada componente, criaremos uma pasta com o nome do componente e um arquivo index.js dentro dessa pasta. Caso sejam necessários mais arquivos, não tem problema, mas esse é o mínimo necessário.
	
	**-> controllers**
	* Pasta em que ficarão os controllers definidos para a aplicação. Cada entidade de dados definida deve ter um controller próprio, capaz de realizar a sua função. Apenas as entidades devem ter controllers, sendo que as tabelas relacionais não precisam de um. Um controller é responsável por organizar as informações recebidas da rota e se comunicar com os diferentes models necessários para realizar aquela ação (ex.: uma função de getOrder em um orderController precisa se comunicar com o orderModel, para pegar o pedido, mas pode precisar se comunicar com um productModel para pegar os produtos daquele pedido e com um userModel para pegar o usuário que fez aquele pedido), para então organizar a resposta a ser dada.
	* Cada controller consiste em um conjunto de funções a ser realizadas para aquela entidade.

	**-> database**
	* Pasta em que é configurado o banco de dados, com auxílio do Knex. Os arquivos knexfile.js e connection.js configuram a conexão com o banco de dados, o arquivo db.sqlite é o banco de dados de desenvolvimento propriamente dito e há ainda as pastas que se seguem:
	
		**-> migrations**
		* Pasta em que guardamos as migrations, isto é, as instruções para criar, editar e deletar as colunas de cada uma das tabelas (os campos que cada tabela tem). São importantes para conseguirmos desconstruir e reconstruir o noss banco de dados de acordo com a necessidade.
		* Para criar uma nova migration, usamos o comando `npx knex migrate:make nome_da_migration_aqui` e editamos o arquivo criado. É MUITO IMPORTANTE que a função "down" desfaça TUDO o que a função "up" fez. Se "up" adicionou colunas, "down" deve removê-las. Se criou uma tabela, "down" deve destruir essa tabela.
		* Para rodar as migrations e aplicar as suas alterações, deve-se rodar o comando `npx knex migrate:latest`.

		**-> seeds**
		* Pasta em que guardamos as seeds, isto é, os dados iniciais com os quais queremos preencher as linhas da tabela. São úteis para que tenhamos dados para teste de fácil acesso ainda que precisemos destruir parte do banco de dados.
		* Para criar uma nova seed, usamos o comando `npx knex seed:make nome_da_migration_aqui` e editamos o arquivo criado. 
		* Para rodar as seeds e aplicar os seus dados, deve-se rodar o comando `npx knex seed:run`.

	**-> models**
	* Pasta em que definiremos os models da aplicação. Os models são aqueles que interagem em mais baixo nível com as entidades de dados que temos na aplicação. São eles os responsáveis por buscar dados em uma tabela, inserir dados em uma tabela, etc. No caso, precisamos de um model para cada entidade do banco de dados (usuário, pedido, produto, ...) - não sendo necessário definir models para tabelas relacionais, como orders_products, e um para cada entidade de dados externa - como o Firebase.

	**-> screens**
	* Pasta em que definiremos as telas que podem aparecer em diferentes rotas ou ter diferentes formas de renderização. Os componentes definidos aqui devem corresponder a telas completas e devem receber as informações necessárias à sua renderização por *props*. Assim, a forma de buscar essas props e renderizar será externalizada para a rota que utilizar o componente. Para cada tela, criaremos uma pasta com o nome do componente e um arquivo index.js dentro dessa pasta. Caso sejam necessários mais arquivos, não tem problema, mas esse é o mínimo necessário.

	**-> utils**
	* Pasta em que colocaremos os arquivos auxiliares e que podem precisar ser acessados por diversos outros. Por exemplo, é onde armazenamos os middlewares de autenticação e a instância do Axios que dá acesso direto à API.
	
### Convenções gerais
#### Forma de renderização
No topo de cada arquivo de página (na pasta *pages*, deve-se ter um comentário estabelecendo a forma de renderização adotada para aquela página. Assim, adotaremos a seguinte convenção. A primeira linha do arquivo será um comentário com uma das siglas abaixo:
* **SSG** (*Static Site Generation*) - usado quando a geração da página for estática, isto é, não estiver sujeita a mudanças que podem ocorrer no banco de dados. Para páginas que serão SEMPRE IGUAIS. Quando não usarmos getServerSideProps.
	* Ex.: página institucional, descrevendo o Igor.
* **ISR** (*Incremental Static Regeneration*) - usado quando a renderização da página depender dos dados no banco de dados, mas for esperado que a página tenha muitos acessos em que os dados serão iguais e que não haja muito problema em ter um pequeno atraso na atualização. Também é necessário que o número de renderizações possíveis seja finito. Quando adotarmos essa forma de renderização, adotaremos revalidação temporizada para verificar se a página deve ser novamente renderizada. Comumente vem com getStaticProps e getStaticPaths, porém usando a opção "revalidate".
	* Ex.: página de um produto. Será acessada por diversas pessoas, apresentando as mesmas informações. Assim, ao usar o ISR poupamos o custo de processamento de renderizar essa página diversas vezes.
* **SSR** (*Server Side Rendering*) - usada quando cada renderização tende a ser única, não fazendo sentido reaproveitar renderizações anteriores. Usada também quando não podemos ter qualquer atraso na propagação de uma informação sensível do banco de dados e quando temos mudanças muito frequentes nos dados. Também usamos quando a renderização pode ser feita de infinitas formas diferentes. Nesse caso, usamos getServerSideProps
	* Ex.: uma página de busca pode vir com qualquer termo de busca associado, portanto faz sentido usar SSR.
*  **CSR** (*Client Side Rendering*) - usada em páginas extremamente dinâmicas e para as quais o SEO não importa, uma vez que os dados só chegam depois da renderização. Frequentemente utilizada em dashboards de administradores e afins. Nessa forma de renderização, tradicional do React, os dados são buscados após a renderização, com uso de um useEffect ou de funções desencadeadas por ações do usuário.
	* Ex.: Dashboard com gráficos que precisam estar atualizados, mas que não tem que ser encontradas pelo Google.
	
### Ferramentas utilizadas
* [NextJs](https://nextjs.org/docs/getting-started "NextJs") -> Escolha de framework usado tanto para o frontend quanto para o backend, integrando as duas partes
* [Firebase](https://firebase.google.com/docs/ "Firebase") -> Usado para a autenticação, apenas
* [Styled Components](https://styled-components.com/docs "Styled Components") -> Escolha de forma de estilização, que utiliza CSS in JS como abordagem
* [Knex](http://knexjs.org/ "Knex") -> SQL Query builder utilizado no projeto, tanto para criar o banco de dados com migrations quanto para rodar queries de adição, busca, etc.
* [Next-iron-session](https://www.npmjs.com/package/next-iron-session "Next-iron-session") -> Ferramenta de autenticação de sessão utilizada. Faz a autenticação por cookies e permite que as ferramentas do Next de SSR funcionem. Com ele foram criados os diversos middlewares de autenticação
* [Swagger](https://www.npmjs.com/package/swagger-jsdoc "Swagger") -> Ferramenta de documentação de api utilizada para registrar os parâmetros das rotas.
* [ESLint](https://eslint.org/docs/user-guide/getting-started "ESLint") -> Utilizado para padronização do código e do estilo aplicados.
