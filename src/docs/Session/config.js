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
 *        user_id:
 *          type: string
 *          description: Firebase Id do usuário da sessão.
 *        email:
 *          type: string
 *          description: Email do usuário da sessão.
 *        password:
 *          type: string
 *          description: Senha do usuário da sessão.
 */
