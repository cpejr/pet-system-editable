/**
 * @swagger
 *  /cart/{user_id}:
 *    delete:
 *      summary: Deletar uma determinada carrinho
 *      parameters:
 *       - in: query_params
 *         name: user_id
 *         required: true
 *         description: Id do usuário responsável pelo carrinho a ser apagada.(STRING)
 *         schema:
 *      tags: [Cart]
 *      description: Validação para deletar um determinado carrinho através do user id no banco de dados.
 *      responses:
 *        '200':
 *          description: Success
 *        content:
 *          application/json:
 *            example:
 *             user_id: d5x3pjYJPeT8Z6GBMtSHqRKqT1C2
 *        '403':
 *          description: Unauthorized
 *        '404':
 *          description: Not Found
 *        '500':
 *          description: Internal Server Error
 */
