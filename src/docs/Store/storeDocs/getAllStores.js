/**
* @swagger
*  /store:
*    get:
*      summary: Retorna todas as lojas cadastradas
*      parameters:
*      tags: [Store]
*      description: Validação para localizar todas as lojas do banco de dados, retornando também suas respectivas informações.
*      responses:
*       '200':
*        description: Stores
*        content:
*          application/json:
*            example:
*               "store_id": "6"
*               "user_id": "KAT46QZJGyahArCGhCHf7mhZ9Eu1"
*               "company_name": "Loja do Tobias"
*               "email": "fernanda@cpejr.com"
*               "telephone": 3324430554
*               "cellphone": 3231545669
*               "cnpj": 1234567
*               "cep": 456789
*               "ie": 555
*               "ie_state": "Minas Gerais"
*               "cover_img": "dasdkasdjalj"
*               "logo_img": "httapsdapo"
*               "created_at": 20210414111030
*               "evaluation": 5
*               "status": "Aprovado"
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to find stores
*
*/
