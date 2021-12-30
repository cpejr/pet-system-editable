const nodemailer = require('nodemailer');
require('dotenv').config();

export default function (req, res) {
  const body = JSON.parse(req.body);
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
    to: body.email,
    subject: `${body.aproved === true ? 'Bem vindo ao Pet System!' : 'Equipe do Pet System'}`,
    text: `Olá ${body.name},
    Seu pedido de cadastro no nosso sistema foi ${body.aproved === true ? 'aceito. Seja bem vindo e boas vendas!' : 'recusado.'}`,
    html: `<div>Olá ${body.name},
    Seu pedido para se tornar um lojista no nosso sistema foi ${body.aproved ? 'aceito. Seja bem vindo e boas vendas!' : 'recusado.'}</div>
    <p>____________________</p>
    <p>Equipe do Pet System</p>`,
  }).then((response) => { res.send(response); })
    .catch((error) => { res.send(error); });
  return res.status(200);
}
