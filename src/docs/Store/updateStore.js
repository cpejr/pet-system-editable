/**
* @swagger
*  /store:
*    put:
*      summary: Atualizar loja
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Store'
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: company_name
*         required: false
*         description: Nome da loja a ser alterado.
*       - in: body
*         name: email
*         required: false
*         description: Email da loja a ser alterado.
*       - in: body
*         name: telephone
*         required: false
*         description: Telefone da loja a ser alterado.
*       - in: body
*         name: cellphone
*         required: false
*         description: Celular da loja a ser alterado.
*       - in: body
*         name: cnpj
*         required: false
*         description: Cnpj da loja a ser alterado.
*       - in: body
*         name: cep
*         required: false
*         description: Cep da loja a ser alterado.
*       - in: body
*         name: ie
*         required: false
*         description: Ie da loja a ser alterado.
*       - in: body
*         name: ie_state
*         required: false
*         description: Estado da loja a ser alterado.
*       - in: body
*         name: cover_img
*         required: false
*         description: Imagem da loja a ser alterado.
*       - in: body
*         name: logo_img
*         required: false
*         description: Logo da loja a ser alterado.
*       - in: body
*         name: store_id
*         required: true
*         description: Id da Loja a ser atualizada.
*      tags: [Store]
*      description: Atualizando loja
*      responses:
*       '200':
*        description: Store updated
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to update store
*
*/
