import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {FormControl, InputLabel, Select } from '@material-ui/core';

const initialstate = [
  {
    value: 'placeholder',
        
  },
  {
    value: 'low',
    label: '€20-30',
  },
  {
    value: 'middle',
    label: '€30-50',
  },
  {
    value: 'high',
    label: '€50-100',
  },
  {
    value: 'ultra',
    label: '€100 or more',
  },
];

const content = initialstate.map(c =>((c.value === 'placeholder') ?
<option aria-label="None" value="" /> :  <option value={c.value} >{c.label}</option> ) );


       
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MenDropdown() {
  const classes = useStyles();

  return (
   
      <div>
         <FormControl className={classes.formControl}>
        <InputLabel htmlFor="native-simple">price</InputLabel>
     <Select
    native
   
        >
        
         {content}
         
        </Select>
        </FormControl>
      </div>
    
   
   
  );
}