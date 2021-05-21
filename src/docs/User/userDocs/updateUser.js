/**
* @swagger
*  /user/{firebase_id}:
*    put:
*      summary: Atualizar usuário
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
*         name: Body
*         schema:
*          type: object
*          example:
*           email: giovanni@gmail.com
*           password: 123456
*           cpf: 87654321399
*         required: true
*         description: Campos a serem alterados referentes a um determinado usuário.
*      tags: [User]
*      description: Atualizando usuário
*      responses:
*       '200':
*        description: Sucesso
*       '500':
*        description: Internal server error while trying to delete user
*/
