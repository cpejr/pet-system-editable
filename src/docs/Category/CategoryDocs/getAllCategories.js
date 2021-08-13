/**
* @swagger
*  /category/:
*    get:
*      summary: Retorna todas as categorias e suas subcategorias
*      tags: [Categories]
*      description: Validação para localizar uma determinado categoria e suas subcategorias, passando o seu ID e retornando suas informações.
*      responses:
*       '200':
*        description: Categories and subcategories
*        content:
*          application/json:
*            example:
*              [{
*                 name: Rações,
*                 id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d,
*                 subcategories:
*                    [{id: 8dsa8292j-4kn4-4bad-9bdd-2b0d7b3dcb6d, name: Ração Premium}]
*               },
*               {
*                 name: Petiscos,
*                 id: 428fdkj12-354k-3sdd-9l3m-32lnls3dcb6d,
*                 subcategories:
*                    [{id: 4324243kfd-4kn4-4bad-9bdd-2b0d7b3dcb6d, name: Petiscos para gatos}]
*               }]
*       '404':
*        description: Not Found
*       '500':
*        description: Internal Server Error
*
*/
