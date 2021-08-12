/**
* @swagger
*  /user:
*    post:
*      summary: Criação de um carrinho
*      requestBody:
*        required: true
*        content:
*         application/json:
*          schema:
*            $ref: '#/components/schemas/Cart'
*      parameters:
*        - in: body
*          name: quantity
*          required: true
*          description: quantidade de produtos contido no carrinho.(STRING)
*          schema:
*      tags: [Cart]
*      description: Validação para criar um carrinho através das informações passadas pelo formulário.
*      responses:
*        '200':
*          description: Cart created
*        content:
*          application/json:
*            example:
*               user_id: GQ7677laMUevudWACvFRHK1Y88B3
*               product_id: GQ7677laMUevudWACvFRHK1Y88B3
*               quantity: 10
*        '400':
*          description: No valid session provided
*        '500':
*          description: Internal server error while trying to create cart
*/
