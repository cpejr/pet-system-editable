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
*       - in: body
*         name: product_name
*         required: true
*         description: Nome do produto.(STRING)
*         schema:
*       - in: body
*         name: price
*         required: true
*         description: Preço do produto.(FLOAT)
*         schema:
*       - in: body
*         name: discount
*         required: true
*         description: Desconto do produto.(FLOAT)
*         schema:
*       - in: body
*         name: description
*         required: true
*         description: Descrição do produto.(STRING)
*         schema:
*       - in: body
*         name: img
*         required: true
*         description: Diretório de onde a imagem será salva.(FILE)
*         schema:
*      tags: [Product]
*      description: Validação para criar um produto através das informações passadas pelo formulário.
*      responses:
*       '200':
*        description: Product created
*        content:
*          application/json:
*            example:
*               product_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               store_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               product_name: Saco Ração Pedrigee
*               price: 25,00
*               discount: 10,00
*               description: Saco de Ração laranja de 2.5 Kg.
*               img: 'produtos/rações/'
*               created_at: 24052021
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal server error while trying to create product
*
*/
