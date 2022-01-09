import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { CSVLink } from 'react-csv';
import { CircularProgress } from '@material-ui/core';

const headers = [
  { label: 'Nome da Companhia', key: 'company_name' },
  { label: 'CNPJ', key: 'cnpj' },
  { label: 'Email', key: 'email' },
  { label: 'Telefone Celular', key: 'cellphone' },
  { label: 'Telefone', key: 'phone' },
  { label: 'Taxa de envio', key: 'shipping_tax' },
];

export default function JsonToCSV({ data, loading, setLoading }) {
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  useEffect(async () => {
    setMonth(moment().locale('pt-br').format('MMMM'));
    setYear(moment().year());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <CSVLink
      data={data}
      headers={headers}
      enclosingCharacter=""
      filename={`RegisteredStores_${month}${year}.csv`}
      target="_blank"
      style={{ color: 'inherit', fontFamily: 'Roboto' }}
    >
      {loading
        ? <CircularProgress size={16} color="#123abc" loading />
        : 'Lojas Cadastradas'}
    </CSVLink>
  );
}
