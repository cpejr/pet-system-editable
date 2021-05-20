/**
 * @swagger
 * tags:
 *   name: User
 *   description: Usuários da aplicação
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - cpf
 *         - birth_date
 *         - first_name
 *         - last_name
 *         - telephone
 *       properties:
 *         firebase_id:
 *           type: string
 *           description: Campo autogerado.
 *         email:
 *           type: string
 *           description: Email do usuário.
 *         cpf:
 *           type: integer
 *           description: CPF do usuário.
 *         birth_date:
 *           type: datetime
 *           description: Data de nascimento do usuário.
 *         first_name:
 *           type: string
 *           description: Nome do usuário.
 *         last_name:
 *           type: string
 *           description: Sobrenome do usuário.
 *         type:
 *           type: string
 *           description: Tipo de usuário.
 *         telephone:
 *           type: integer
 *           description: Telefone do usuário.
 *         created_at:
 *           type: timestamp
 *           description: Data de criação do usuário.
 *
 */
