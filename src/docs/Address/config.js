/**
 * @swagger
 * tags:
 *   name: Address
 *   description: Endereços da aplicação
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       required:
 *         - street
 *         - number
 *         - neighborhood
 *         - city
 *         - cep
 *         - state
 *       properties:
 *         street:
 *           type: string
 *           description: Rua.
 *         number:
 *           type: integer
 *           description: Número do endereço.
 *         neighborhood:
 *           type: datetime
 *           description: Bairro do endereço.
 *         city:
 *           type: string
 *           description: Cidade do endereço.
 *         cep:
 *           type: string
 *           description: CEP do endereço.
 *         state:
 *           type: string
 *           description: Estado do endereço.
 */
