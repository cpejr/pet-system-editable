/**
* @swagger
*  /group/{group_id}:
*    get:
*      summary: Retorna um determinado grupo
*      parameters:
*       - in: query_params
*         name: group_id
*         required: true
*         description: Id do grupo a ser localizado.(STRING)
*         schema:
*      tags: [Group]
*      description: Validação para localizar um determinado grupo, passando o seu ID e retornando suas informações.
*      responses:
*       '200':
*        description: Group
*        content:
*          application/json:
*            example:
*               group_id: acab081c-04fe-491d-b289-24fafe1fb190
*               store_id: 65bd2c00-b1fc-4117-94da-5c78d60c2adc
*               name: Brinquedos
*               created_at: 2021-06-28 13:25:46
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error
*
*/
