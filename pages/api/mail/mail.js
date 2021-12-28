const nodemailer = require('nodemailer');
require('dotenv').config();

export default function (req, res) {
  const dados = req.body;
  console.log('🚀 ~ file: mail.js ~ line 5 ~', dados[email]);
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  transporter.sendMail({
    from: `${process.env.EMAIL_LOGIN}`,
    to: req.body.email,
    subject: 'Bem vindo ao Pet System!',
    text: `Olá ${req.body.name},
    Seu pedido de cadastro no nosso sistema foi aceito. Seja bem vindo e boas vendas!`,
    html: `<div>Olá ${req.body.name},
    Seu pedido para se tornar um lojista no nosso sistema foi aceito. Seja bem vindo e boas vendas!</div>
    <p>____________________</p>
    <p>Equipe do Pet System</p>`,
  }).then((response) => { res.send(response); })
    .catch((error) => { res.send(error); });
  res.status(200);
}
