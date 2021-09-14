/**
* @swagger
*  /admin:
*    get:
*      summary:  Localizar a comissão do administrador
*      parameters:
*      tags: [Admin]
*      description: Validação para localizar a comissão do administrador.
*      responses:
*       '200':
*        description: Share
*        content:
*          application/json:
*            example:
*              share: 25,00
*       '404':
*        description: Not Found
*       '500':
*        description: Internal Server Error
*
*/
