/**
* @swagger
*  /user/password/{firebase_id}:
*    put:
*      summary: Alterar a senha do usuário
*      parameters:
*       - in: body
*         name: query_params
*         schema:
*         required: true
*         description: Firebase id do usuário.(STRING)
*       - in: body
*         name: password
*         schema:
*         required: true
*         description: Nova senha definida pelo usuário.(STRING)
*      tags: [User]
*      description: Validação para atualização da senha do usuário no Firebase.
*      responses:
*       '200':
*        description: User password updated
*        content:
*          application/json:
*            example:
*             firebase_id: XfK97RMVODWL4ltv9SHobxyDxCT2
*             password: 123456
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal Server Error
*/
