// import React from 'react';
import { useRouter } from 'next/router';

const user = [];// usuario a ser recebido

export default function handler(req, res) {
  const router = useRouter();
  if (req.method === 'POST') {
    router.POST('/login', () => {
      const newUser = req.body;
      user.push(newUser);
      res.status(200).json({ message: 'Usuário criado com sucesso' });
    });
  } else if (req.method === 'GET') {
    router.GET('/login', () => {
      res.status(200).json(user);// dentro do json passar a constante do usuario, para o get retornar os campos do usuário
    });
  } else {
    router.DELETE('/login', () => {
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    });
  }
}
