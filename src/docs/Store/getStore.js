/**
* @swagger
*  /store:
*    get:
*      summary: Localizar uma loja
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
*         name: store_id
*         required: true
*         description: Id da loja a ser localizada.
*      tags: [Store]
*      description: Localizar uma loja
*      responses:
*       '200':
*        description: Store
*       '500':
*        description: Internal server error while trying to find store
*
*/
