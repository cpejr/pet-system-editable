/**
* @swagger
* tags:
*   name: Session
*   description: Sessão do usuário.
*/

/**
* @swagger
* components:
*  schemas:
*    Session:
*      type: object
*      required:
*        - email
*        - password
*      properties:
*        accessToken:
*          type: string
*          description: Token da sessão do usuário.
*        email:
*          type: string
*          description: Email do usuário da sessão.
*        password:
*          type: string
*          description: Senha do usuário da sessão.
*/
