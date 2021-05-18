/**
* @swagger
* tags:
*   name: Store
*   description: Lojas do sistema
*/

/**
* @swagger
* components:
*  schemas:
*    Store:
*      type: object
*      required:
*        - company_name
*        - email
*        - telephone
*        - cellphone
*        - cnpj
*        - cep
*        - ie
*        - ie_state
*        - cover_img
*        - logo_img
*      properties:
*        store_id:
*           type: string
*           description: Campo autogerado.
*        user_id:
*           type: string
*           description: Campo autogerado.
*        company_name:
*            type: string
*            description: Nome da loja.
*        email:
*            type: string
*            description: Email da loja.
*        telephone:
*            type: integer
*            description: Telefone da loja.
*        cellphone:
*            type: integer
*            description: Celular da loja.
*        cnpj:
*            type: integer
*            description: Cnpj da loja.
*        cep:
*            type: integer
*            description: Cep da loja.
*        ie:
*            type: integer
*            description: Ie da loja.
*        ie_state:
*            type: string
*            description: Estado da loja.
*        cover_img:
*            type: string
*            description: Imagem da loja.
*        logo_img:
*            type: string
*            description: Logo da loja.
*        created_at:
*            type: timestamp
*            description: Data de criação da loja.
*        evaluation:
*            type: float
*            description: Telefone da loja.
*        status:
*            type: string
*            description: Status da loja.
*/
