import React from 'react';
import {
  Switch, FormGroup, FormControlLabel, Typography,
} from '@material-ui/core';

export default function OpenStore({ filterOpen, setFilterOpen }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={filterOpen} onChange={() => setFilterOpen((pastValue) => !pastValue)} />}
        label={
          <Typography>Filtrar por Lojas Abertas</Typography>
        }
      />
    </FormGroup>
  );
}
