/**
* @swagger
*  /user/password/{firebase_id}:
*    put:
*      summary: Alterar a senha do usuário
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: firebase_id
*         schema:
*           type: string
*           example:
*             firebase_id: XfK97RMVODWL4ltv9SHobxyDxCT2
*         required: true
*         description: Firebase id do usuário.
*       - in: body
*         name: password
*         schema:
*           type: string
*           example:
*             password: 123456
*         required: true
*         description: Nova senha definida pelo usuário.
*      tags: [User]
*      description: Atualizando a senha do usuário no Firebase.
*      responses:
*       '200':
*        description: User password updated
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to update user password
*/
