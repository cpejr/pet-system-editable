/**
* @swagger
*  /product:
*    post:
*      summary: Criação de um produto
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Product'
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: product_name
*         required: true
*         description: Nome do produto.
*         schema:
*           type: string
*           example:
*              product_name: Saco Ração Pedrigee
*       - in: body
*         name: price
*         required: true
*         description: Preço do produto.
*         schema:
*           type: float
*           example:
*              price: 25,00
*       - in: body
*         name: discount
*         required: true
*         description: Desconto do produto.
*         schema:
*           type: float
*           example:
*              discount: 10,00
*       - in: body
*         name: description
*         required: true
*         description: Descrição do produto.
*         schema:
*           type: string
*           example:
*              description: Saco de Ração laranja de 2.5 Kg.
*       - in: body
*         name: img
*         required: true
*         description: Diretório de onde a imagem será salva.
*         schema:
*           type: string
*           example:
*              img: 'imagens/produtos/rações'
*      tags: [Product]
*      description: Cria um produto através das informações passadas pelo formulário.
*      responses:
*       '200':
*        description: Product created
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to create product
*
*/
