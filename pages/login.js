// import React from 'react';
import { useRouter } from 'next/router';

const user = [];// usuario(objeto) a ser recebido do firebase

export default function handler(req, res) {
  const router = useRouter();
  if (req.method === 'POST') { // método post que será criar um novo usuário
    router.POST('/login', () => {
      const newUser = req.body;
      user.push(newUser);
      res.status(200).json({ message: 'Usuário criado com sucesso' });
    });
  } else if (req.method === 'GET') { // método get que será puxar as informções de um usuário existente
    router.GET('/login', () => {
      res.status(200).json(user);// dentro do json passar a constante do usuario, para o get retornar os campos do usuário
    });
  } else {
    router.DELETE('/login', () => { // método delete que será deletar um usuário existente
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    });
  }
}
