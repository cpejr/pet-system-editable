export default function AddProducts(horaAbertura, horaFechamento) {
  const hoje = new Date();
  const data = `${hoje.getHours()}:${hoje.getMinutes()}`;
  return horaAbertura < data && horaFechamento > data;
}
