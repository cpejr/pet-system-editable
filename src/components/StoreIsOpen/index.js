export default function AddProducts(horaAbertura, horaFechamento) {
  const date = new Date();
  const time = date.toLocaleTimeString().slice(0, 5);
  return horaAbertura < time && horaFechamento > time;
}
