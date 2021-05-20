/**
* @swagger
*  /user:
*    put:
*      summary: Atualizar usuário
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: email
*         required: false
*         description: Email do usuário a ser alterado.
*       - in: body
*         name: cpf
*         required: false
*         description: CPF do usuário a ser alterado.
*       - in: body
*         name: birth_date
*         required: false
*         description: Data de nascimento do usuário a ser alterado.
*       - in: body
*         name: first_name
*         required: false
*         description: Nome do usuário a ser alterado.
*       - in: body
*         name: last_name
*         required: false
*         description: Sobrenome do usuário a ser alterado.
*       - in: body
*         name: type
*         required: false
*         description: Tipo de usuário a ser alterado.
*       - in: body
*         name: telephone
*         required: false
*         description: Telefone do usuário a ser alterado.
*       - in: body
*         name: firebase_id
*         required: true
*         description: Id do usuário a ser atualizado.
*      tags: [User]
*      description: Atualizando usuário
*      responses:
*       '200':
*        description: Sucesso
*       '500':
*        description: Internal server error while trying to delete user
*/
