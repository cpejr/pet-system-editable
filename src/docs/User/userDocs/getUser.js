/**
* @swagger
*  /user/{firebase_id}:
*    get:
*      summary: Localizar usuário
*      parameters:
*       - in: query_params
*         name: firebase_id
*         required: true
*         description: Id do usuário a ser buscado.(STRING)
*         schema:
*      tags: [User]
*      description: Validação para localizar um usuário de acordo com seu Id, e retornar as suas informações.
*      responses:
*       '200':
*        description: User
*        content:
*          application/json:
*            example:
*              firebase_id: XfK97RMVODWL4ltv9SHobxyDxCT2
*              email: giovanni@cpejr.com
*              cpf: 87654321399
*              birth_date: 20111209
*              first_name: Giovanni
*              last_name: Martins de Sá Júnior
*              type: user
*              created_at: 20210414111030
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to find user
*/
