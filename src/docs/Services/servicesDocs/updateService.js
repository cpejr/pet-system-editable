/**
* @swagger
*  /services/{services_id}:
*    put:
*      summary: Atualizar as informações de um serviço
*      parameters:
*       - in: query_params
*         name: service_id
*         schema:
*           type: string
*         required: true
*         description: Id do serviço a ser alterado.
*       - in: Multipart form
*         name: Body
*         schema:
*         required: true
*         description: Campos a serem alterados.(OBJECT)
*      tags: [Services]
*      description: Validação para atualização de um determinado serviço
*      responses:
*       '200':
*        description: Service updated
*        content:
*          application/json:
*            example:
*             service_id: acab081c-04fe-491d-b289-24fafe1fb190
*             price: 150.00
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal Server Error
*
*/
