/**
* @swagger
*  /services/{services_id}:
*    get:
*      summary: Retorna um determinado serviço
*      parameters:
*       - in: query_params
*         name: service_id
*         required: true
*         description: Id do serviço a ser localizado.(STRING)
*         schema:
*      tags: [Services]
*      description: Validação para localizar um determinado serviço, passando o seu ID e retornando suas informações.
*      responses:
*       '200':
*        description: Service
*        content:
*          application/json:
*            example:
*               service_id: acab081c-04fe-491d-b289-24fafe1fb190
*               store_id: 65bd2c00-b1fc-4117-94da-5c78d60c2adc
*               name: banho e tosa completo
*               description: banho e tosa
*               price: 100.00
*               created_at: 2020-12-06
*       '404':
*        description: Not Found
*       '500':
*        description: Internal Server Error
*
*/
