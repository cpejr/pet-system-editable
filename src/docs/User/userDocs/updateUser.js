/**
* @swagger
*  /user/{firebase_id}:
*    put:
*      summary: Atualizar usuário
*      parameters:
*       - in: body
*         name: query_params
*         schema:
*         required: true
*         description: Firebase id do usuário.(STRING)
*       - in: body
*         name: Body
*         schema:
*         required: true
*         description: Campos a serem alterados referentes a um determinado usuário.(OBJECT)
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
