/**
* @swagger
*  /cart/{user_id}:
*    put:
*      summary: Atualizar um carrinho
*      parameters:
*       - in: body
*         name: query_params
*         schema:
*         required: true
*         description: cart id.(STRING)
*       - in: body
*         name: Body
*         schema:
*         required: true
*         description: Campos a serem alterados referentes a um determinado carrinho.(OBJECT)
*      tags: [Cart]
*      description: Validação para atualização do carrinho
*      responses:
*       '200':
*        description: Sucesso
*        content:
*          application/json:
*            example:
*             user_id: XfK97RMVODWL4ltv9SHobxyDxCT2
*             quantity: 50
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal server error while trying to update cart
*/
