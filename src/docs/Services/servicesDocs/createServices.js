/**
* @swagger
*  /user:
*    post:
*      summary: Criação de um serviço
*      requestBody:
*        required: true
*        content:
*         application/json:
*          schema:
*            $ref: '#/components/schemas/Services'
*      parameters:
*        - in: body
*          name: name
*          required: true
*          description: Nome do serviço.(STRING)
*          schema:
*        - in: body
*          name: description
*          required: true
*          description: descrição do serviço.(STRING)
*          schema:
*        - in: body
*          name: price
*          required: true
*          description: Preço do serviço.(FLOAT)
*          schema:
*      tags: [Services]
*      description: Validação para criar um serviço através das informações passadas pelo formulário.
*      responses:
*        '200':
*          description: Service created
*        content:
*          application/json:
*            example:
*               service_id: GQ7677laMUevudWACvFRHK1Y88B3
*               store_id: GQ7677laMUevudWACvFRHK1Y88B3
*               name: banho
*               description: banho e tosa completos
*               price: 80.00
*        '400':
*          description: No valid session provided
*        '500':
*          description: Internal Server Error
*/
