/**
* @swagger
*  /product:
*    put:
*      summary: Atualizar produto
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
*         required: false
*         description: Nome do produto a ser alterado.
*       - in: body
*         name: price
*         required: false
*         description: Preço do produto a ser alterado.
*       - in: body
*         name: discount
*         required: false
*         description: Desconto do produto a ser alterado.
*       - in: body
*         name: description
*         required: false
*         description: Descrição do produto a ser alterado.
*       - in: body
*         name: img
*         required: false
*         description: Imagem do produto a ser alterado.
*       - in: body
*         name: product_id
*         required: true
*         description: Id do produto a ser atualizado.
*      tags: [Product]
*      description: Atualizando loja
*      responses:
*       '200':
*        description: Product updated
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to update product
*
*/
