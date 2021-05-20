/**
* @swagger
*  /admin:
*    get:
*      summary: Localizar a comissão
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Admin'
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: share
*         required: true
*         description: Comissão do administrador a ser localizado.
*      tags: [Admin]
*      description: Localizar a comissão
*      responses:
*       '200':
*        description: Share
*       '500':
*        description: Internal server error while trying to find share
*
*/
