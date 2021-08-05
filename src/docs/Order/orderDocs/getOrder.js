/**
* @swagger
*  /order/{order_id}:
*    get:
*      summary: Localizar uma ordem
*      parameters:
*       - in: query_params
*         name: order_id
*         required: true
*         description: Id da ordem a ser buscada.(STRING)
*         schema:
*      tags: [Order]
*      description: Validação para localizar uma ordem de acordo com seu Id e retornar as suas informações.
*      responses:
*       '200':
*        description: Order
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
*               created_at: 20210414111030
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to find order
*/
