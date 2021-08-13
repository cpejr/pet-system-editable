/**
 * @swagger
 *  /services/{service_id}:
 *    delete:
 *      summary: Deletar um determinado serviço
 *      parameters:
 *       - in: query_params
 *         name: service_id
 *         required: true
 *         description: Id do serviço a ser apagado.(STRING)
 *         schema:
 *      tags: [Services]
 *      description: Validação para deletar um determinado serviço através de seu service id no banco de dados.
 *      responses:
 *        '200':
 *          description: Success
 *        content:
 *          application/json:
 *            example:
 *             service_id: d5x3pjYJPeT8Z6GBMtSHqRKqT1C2
 *        '403':
 *          description: Unauthorized
 *        '404':
 *          description: Not Found
 *        '500':
 *          description: Internal Server Error
 */
