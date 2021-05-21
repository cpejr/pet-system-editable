/**
* @swagger
*  /admin:
*    get:
*      summary: Localizar a comissão do administrador
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
*         schema:
*           type: float
*           example:
*              share: 25,00
*      tags: [Admin]
*      description: Localizar a comissão do administrador.
*      responses:
*       '200':
*        description: Share
*       '500':
*        description: Internal server error while trying to find share
*
*/
