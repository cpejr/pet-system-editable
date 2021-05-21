/**
* @swagger
*  /store/{user_id}:
*    delete:
*      summary: Deleta uma determinada loja e seu respectivo usuário administrador
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: user_id
*         required: true
*         description: Id do usuário administrador referente à loja.
*         schema:
*           type: string
*           example:
*              user_id: d5x3pjYJPeT8Z6GBMtSHqRKqT1C2
*      tags: [Store]
*      description: Apaga uma determinada loja e seu respectivo administrador atráves do firebase id do administrador.
*      responses:
*       '200':
*        description: User and store were deleted
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to delete store
*
*/
