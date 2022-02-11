const moneyMask = (value) => {
  if (value === '') return 'R$ 0.00';
  value = value.replace('.', '').replace(',', '').replace(/\D/g, '');

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat('en-US', options).format(
    parseFloat(value) / 100,
  );

  return `R$ ${result}`;
};

export default moneyMask;
