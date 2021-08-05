/**
* @swagger
*  /services:
*    get:
*      summary: Retorna todos os serviços disponíveis para um determinado usuário
*      parameters:
*      tags: [Services]
*      description: Validação para localizar os serviços disponíveis no banco de dados, retornando também suas respectivas informações.
*      responses:
*       '200':
*        description: Services
*        content:
*          application/json:
*            example:
*               service_id: acab081c-04fe-491d-b289-24fafe1fb190
*               store_id: 65bd2c00-b1fc-4117-94da-5c78d60c2adc
*               name: banho e tosa completo
*               description: banho e tosa
*               price: 100.00
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error
*
*/
