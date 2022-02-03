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

const months = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

function getStyles(month, personMonth, theme) {
  return {
    fontWeight:
      personMonth.indexOf(month) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({ setDateMonth }) {
  const classes = useStyles();
  const theme = useTheme();
  const [personMonth, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
    setDateMonth(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-month-label">Mês</InputLabel>
        <Select
          labelId="demo-mutiple-month-label"
          id="demo-mutiple-month"
          multiple
          value={personMonth}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {months.map((month) => (
            <MenuItem key={month} value={month} style={getStyles(month, personMonth, theme)}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
