/**
* @swagger
*  /user/{firebase_id}:
*    put:
*      summary: Atualizar usuário
*      parameters:
*       - in: body
*         name: query_params
*         schema:
*           type: string
*         required: true
*         description: Firebase id do usuário.
*       - in: body
*         name: Body
*         schema:
*          type: object
*         required: true
*         description: Campos a serem alterados referentes a um determinado usuário.
*      tags: [User]
*      description: Validação para atualização do usuário
*      responses:
*       '200':
*        description: Sucesso
*        content:
*          application/json:
*            example:
*             firebase_id: XfK97RMVODWL4ltv9SHobxyDxCT2
*             email: giovanni@gmail.com
*             password: 123456
*             cpf: 87654321399
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal server error while trying to delete user
*/
