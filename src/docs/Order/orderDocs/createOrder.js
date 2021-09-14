/**
* @swagger
*  /user:
*    post:
*      summary: Criação de uma ordem
*      requestBody:
*        required: true
*        content:
*         application/json:
*          schema:
*            $ref: '#/components/schemas/Order'
*      parameters:
*        - in: body
*          name: product_name
*          required: true
*          description: Nome do produto contido na ordem.(STRING)
*          schema:
*        - in: body
*          name: total_price
*          required: true
*          description: Preço total de uma ordem.(FLOAT)
*          schema:
*        - in: body
*          name: payment_type
*          required: true
*          description: Tipo de pagamento escolhido.(STRING)
*          schema:
*        - in: body
*          name: status
*          required: true
*          description: Status da ordem/pedido.(STRING)
*          schema:
*        - in: body
*          name: payment_installments
*          required: true
*          description: Número de parcelas do pagamento.(INT)
*          schema:
*        - in: body
*          name: delivery_method
*          required: true
*          description: Forma de envio escolhida.(STRING)
*          schema:
*      tags: [Order]
*      description: Validação para criar uma ordem através das informações passadas pelo formulário.
*      responses:
*        '200':
*          description: Order created
*        content:
*          application/json:
*            example:
*               order_id: GQ7677laMUevudWACvFRHK1Y88B3
*               store_id: GQ7677laMUevudWACvFRHK1Y88B3
*               user_id: GQ7677laMUevudWACvFRHK1Y88B3
*               address_id: GQ7677laMUevudWACvFRHK1Y88B3
*               product_name: ração
*               total_price: 123.56
*               payment_type: cartão
*               status: enviado
*               payment_installments: 5
*               delivery_method: Correio
*        '400':
*          description: No valid session provided
*        '500':
*          description: Internal Server Error
*/
