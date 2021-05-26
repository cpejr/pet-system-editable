/**
 * @swagger
 *  /user/{firebase_id}:
 *    delete:
 *      summary: Deletar um determinado usuário
 *      parameters:
 *       - in: query_params
 *         name: firebase_id
 *         required: true
 *         description: Id do usuário a ser apagado.
 *         schema:
 *           type: string
 *      tags: [User]
 *      description: Validação para deletar um determinado usuário através de seu firebase id, tanto no banco de dados, quanto no próprio Firebase.
 *      responses:
 *        '200':
 *          description: Success
 *        content:
 *          application/json:
 *            example:
 *             firebase_id: d5x3pjYJPeT8Z6GBMtSHqRKqT1C2
 *        '403':
 *          description: Unauthorized
 *        '404':
 *          description: Not Found
 *        '500':
 *          description: Internal server error while trying to delete user
 */
