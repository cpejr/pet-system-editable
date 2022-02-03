import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const years = [
  '2030',
  '2029',
  '2028',
  '2027',
  '2026',
  '2025',
  '2024',
  '2023',
  '2022',
  '2021',
];

function getStyles(year, personYear, theme) {
  return {
    fontWeight:
      personYear.indexOf(year) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({ setDateYear }) {
  const classes = useStyles();
  const theme = useTheme();
  const [personYear, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
    setDateYear(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-year-label">Ano</InputLabel>
        <Select
          labelId="demo-mutiple-year-label"
          id="demo-mutiple-year"
          multiple
          value={personYear}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year} style={getStyles(year, personYear, theme)}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
