const nodemailer = require('nodemailer');
require('dotenv').config();

export default function (req, res) {
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
    to: 'juliacastro@cpejr.com.br',
    subject: 'Bem vindo ao Pet System!',
    text: `Olá ${req.body.name},
    Seu pedido de cadastro no nosso sistema foi aceito. Seja bem vindo e boas vendas!`,
    html: `<div>Olá ${req.body.name},
    Seu pedido para se tornar um lojista no nosso sistema foi aceito. Seja bem vindo e boas vendas!</div>
    <p>_________________________</p>
    <p>Equipe do Pet System</p>`,
  }).then((response) => { res.send(response); })
    .catch((error) => { res.send(error); });
  res.status(200);
}
