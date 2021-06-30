/**
* @swagger
*  /myGroups:
*    get:
*      summary: Retorna todos os grupos de uma loja por meio da sessão do lojista
*      parameters:
*      tags: [Group]
*      description: Validação para localizar todos os grupos de uma loja durante a sessão de lojista, retornando também suas respectivas informações.
*      responses:
*       '200':
*        description: Groups
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
