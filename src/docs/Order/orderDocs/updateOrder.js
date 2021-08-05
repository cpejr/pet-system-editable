/**
* @swagger
*  /order/{order_id}:
*    put:
*      summary: Atualizar uma ordem
*      parameters:
*       - in: body
*         name: query_params
*         schema:
*         required: true
*         description: order id.(STRING)
*       - in: body
*         name: Body
*         schema:
*         required: true
*         description: Campos a serem alterados referentes a uma determinada ordem.(OBJECT)
*      tags: [Order]
*      description: Validação para atualização do pedido
*      responses:
*       '200':
*        description: Sucesso
*        content:
*          application/json:
*            example:
*             order_id: XfK97RMVODWL4ltv9SHobxyDxCT2
*             total_price: 500.00
*             status: entregue
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal server error while trying to update order
*/
