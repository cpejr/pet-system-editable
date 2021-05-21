/**
* @swagger
*  /user:
*    post:
*      summary: Criação de um usuário
*      requestBody:
*        required: true
*        content:
*         application/json:
*          schema:
*            $ref: '#/components/schemas/User'
*      parameters:
*        - in: header
*          name: Authorization
*          schema:
*            type: string
*          required: true
*          description: Autorização básica.
*        - in: body
*          name: email
*          required: true
*          description: Email do usuário a ser criado.
*          schema:
*            type: string
*            example:
*              email: jose@gmail.com
*        - in: body
*          name: password
*          required: true
*          description: Senha do usuário a ser criado.
*          schema:
*            type: string
*            example:
*              password: 123456
*        - in: body
*          name: cpf
*          required: true
*          description: Cpf do usuário a ser criado. Somente números serão guardados.
*          schema:
*            type: string
*            example:
*              cpf: 12345678912
*        - in: body
*          name: birth_date
*          required: true
*          description: Data de nascimento do usuário a ser criado. Somente números serão guardados.
*          schema:
*            type: date
*            example:
*              birth_date: 26121980
*        - in: body
*          name: first_name
*          required: true
*          description: Nome do usuário a ser criado.
*          schema:
*            type: string
*            example:
*              first_name: Giovanni
*        - in: body
*          name: last_name
*          required: true
*          description: Sobrenomes do usuário a ser criado.
*          schema:
*            type: string
*            example:
*              last_name: Martins de Sá Júnior
*        - in: body
*          name: telephone
*          required: true
*          description: telefone do usuário a ser criado.
*          schema:
*            type: integer
*            example:
*              telephone: 31999999999
*      tags: [User]
*      description: Criar usuário através das informações passadas pelo formulário.
*      responses:
*        '200':
*          description: User created
*        '400':
*          description: err.message
*        '500':
*          description: Internal server error while trying to register user
*/
