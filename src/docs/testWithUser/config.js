/**
* @swagger
* tags:
*   name: User
*   description: Usuários da aplicação
*/

/**
* @swagger
* components:
*  schemas:
*    User:
*      type: object
*      required:
*        - name
*        - email
*        - password
*      properties:
*        user_id:
*           type: uuid
*           description: Campo autogerado.
*        name:
*            type: string
*            description: Nome do usuário.
*        firebase_id:
*            type: string
*            description: Id do firebase
*        email:
*            type: string
*            description: Email do usuário. Validação do campo (tipo email).
*/
