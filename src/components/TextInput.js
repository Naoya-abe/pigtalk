import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../styles/ChatBox.css';
import SendButtons from './SendButton';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 19,
  },
}));

function TextInput() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    age: '',
    multiline: 'Controlled',
  });

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };

  return (
    <React.Fragment>
      <form className="wrap" noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="text"
          className="text"
          margin="normal"
        />
        <SendButtons />
      </form>
    </React.Fragment>
  );
}

export default TextInput;
