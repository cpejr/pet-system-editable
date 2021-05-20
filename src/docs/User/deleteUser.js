/**
 * @swagger
 *  /user:
 *    delete:
 *      summary: Deletar usuário
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/User'
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
 *      tags: [User]
 *      description: Deletando usuário
 *      responses:
 *        '200':
 *          description: Sucess
 *        '500':
 *          description: Internal server error while trying to delete user
 */
