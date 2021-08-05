/**
* @swagger
*  /cart/{user_id}:
*    get:
*      summary: Retorna o carrinho (items selecionados) de um usuário
*      parameters:
*       - in: query_params
*         name: user_id
*         required: true
*         description: Id da loja para localizar seu carrinho.(STRING)
*         schema:
*      tags: [Cart]
*      description: Validação para localizar o carrinho do usuário no banco de dados, retornando também suas respectivas informações.
*      responses:
*       '200':
*        description: Cart
*        content:
*          application/json:
*            example:
*               user_id: acab081c-04fe-491d-b289-24fafe1fb190
*               product_id: 65bd2c00-b1fc-4117-94da-5c78d60c2adc
*               quantity: 10
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error
*
*/
