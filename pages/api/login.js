// import React from 'react';

const user = [ // usuario(objeto) a ser recebido do firebase
  {
    id: 1,
    name: 'Matheus',
  },
];

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'POST') {
      res.status(200).json(user);// local onde iremos chamar a função do controller de fazer o login
    } else {
      res.status(500).json({ message: 'Método incorreto' });
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}

// } else if (req.method === 'GET') { // método get que será puxar as informções de um usuário existente
//   router.GET('/login', () => {
//     res.status(200).json(user);// dentro do json passar a constante do usuario, para o get retornar os campos do usuário
//   });
// } else {
//   router.DELETE('/login', () => { // método delete que será deletar um usuário existente
//     res.status(200).json({ message: 'Usuário deletado com sucesso' });
//   });
