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

export default function MySearchDateYear() {
  const classes = useStyles();

  const [year, setYear] = useState({
    years: '',
    name: 'hai',
  });

  const handleYearChange = (event) => {
    const { name } = event.target;
    setYear({
      ...year,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <Container>
        <FormControl
          variant="outlined"
          className={classes.formControl}

        >
          <InputLabel style={{ color: '#609694' }} htmlFor="outlined-age-native-simple">Ano</InputLabel>
          <Select
            native
            value={year.years}
            onChange={handleYearChange}
            label="Ano"
            inputProps={{
              name: 'years',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
          </Select>
        </FormControl>
      </Container>
    </div>
  );
}
