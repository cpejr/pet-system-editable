const percentageMask = (value) => {
  if (value === '') return '% 0.00';
  value = value.replace('.', '').replace(',', '').replace(/\D/g, '');
  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat('en-US', options).format(
    parseFloat(value) / 100,
  );

  console.log(parseFloat(result));
  if (parseFloat(result) > 100) return '% 100.00';

  return `% ${result}`;
};

export default percentageMask;
