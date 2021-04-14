import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

export default function MySearchDateMonth() {
  const classes = useStyles();
  const [month, setmonth] = useState({
    months: '',
    name: 'hai',
  });

  const handleMonthChange = (event) => {
    const { name } = event.target;
    setmonth({
      ...month,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <Container>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel style={{ color: '#609694' }} htmlFor="outlined-age-native-simple">Mês</InputLabel>
          <Select
            native
            value={month.months}
            onChange={handleMonthChange}
            label="Mês"
            inputProps={{
              name: 'months',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option>Janeiro</option>
            <option>Fevereiro</option>
            <option>Março</option>
            <option>Abril</option>
            <option>Maio</option>
            <option>Junho</option>
            <option>Julho</option>
            <option>Agosto</option>
            <option>Setembro</option>
            <option>Outubro</option>
            <option>Novembro</option>
            <option>Dezembro</option>
          </Select>
        </FormControl>

      </Container>
    </div>
  );
}
