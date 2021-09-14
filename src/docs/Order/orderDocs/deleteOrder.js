/**
 * @swagger
 *  /order/{order_id}:
 *    delete:
 *      summary: Deletar uma determinada ordem
 *      parameters:
 *       - in: query_params
 *         name: order_id
 *         required: true
 *         description: Id da ordem a ser apagada.(STRING)
 *         schema:
 *      tags: [Order]
 *      description: Validação para deletar uma determinadoa ordem através de seu order id no banco de dados.
 *      responses:
 *        '200':
 *          description: Success
 *        content:
 *          application/json:
 *            example:
 *             order_id: d5x3pjYJPeT8Z6GBMtSHqRKqT1C2
 *        '403':
 *          description: Unauthorized
 *        '404':
 *          description: Not Found
 *        '500':
 *          description: Internal Server Error
 */
