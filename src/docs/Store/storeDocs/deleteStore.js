/**
* @swagger
*  /store/{user_id}:
*    delete:
*      summary: Deletar uma determinada loja e seu respectivo usuário administrador
*      parameters:
*      tags: [Store]
*      description: Validação para deletar uma determinada loja e seu respectivo administrador atráves do firebase id do administrador.
*      responses:
*       '200':
*        description: User and store were deleted
*        content:
*          application/json:
*            example:
*              user_id: d5x3pjYJPeT8Z6GBMtSHqRKqT1C2
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to delete store
*
*/
