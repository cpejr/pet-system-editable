/**
 * @swagger
 *  /user/{firebase_id}:
 *    delete:
 *      summary: Deletar um determinado usuário
 *      parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *          type: string
 *         required: true
 *         description: Autorização básica.
 *       - in: body
 *         name: firebase_id
 *         required: true
 *         description: Id do usuário a ser apagado.
 *         schema:
 *           type: string
 *           example:
 *              firebase_id: d5x3pjYJPeT8Z6GBMtSHqRKqT1C2
 *      tags: [User]
 *      description: Apaga um determinado usuário através de seu firebase id, tanto no banco de dados, quanto no próprio Firebase.
 *      responses:
 *        '200':
 *          description: Success
 *        '500':
 *          description: Internal server error while trying to delete user
 */
