/**
* @swagger
* tags:
*   name: Order
*   description: Pedidos de um usuário
*/

/**
* @swagger
* components:
*  schemas:
*    Order:
*      type: object
*      required:
*        - product name
*        - total price
*        - payment type
*        - status
*        - payment installments
*        - delivery method
*      properties:
*        product name:
*            type: string
*            description: Nome do produto.
*        total price:
*            type: float
*            description: Preço total.
*        payment type:
*            type: string
*            description: Tipo de pagamento.
*        status:
*            type: string
*            description: Status do pedido.
*        payment installments:
*            type: int
*            description: Número de parcelas.
*        delivery_method:
*            type: string
*            description: Método de envio.
*/
