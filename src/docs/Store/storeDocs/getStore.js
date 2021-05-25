/**
* @swagger
*  /store/{store_id}:
*    get:
*      summary: Localizar uma loja
*      parameters:
*       - in: query_params
*         name: store_id
*         required: true
*         description: Id da loja a ser procurada.
*         schema:
*           type: string
*           example:
*              store_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*      tags: [Store]
*      description: Validação para localizar uma loja de acordo com seu Id, e retornar as suas informações
*      responses:
*       '200':
*        description: Store
*        content:
*          application/json:
*            example:
*               store_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               user_id: "24N1CmcySXNFtJ6YQwQSlrznQLB3"
*               company_name: Loja do Giovanni
*               email: giovanni10@cpejr.com
*               telephone: 33244305548
*               cellphone: 32315456696
*               cnpj: 12345678912345
*               cep: 12345678
*               ie: 12345678
*               ie_state: MG
*               cover_img: 'banners/BannersImagem'
*               logo_img: 'logos/LogoLoja'
*               created_at: 20210414111030,
*               evaluation: 10,
*               status: Aprovado
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to find store
*
*/
