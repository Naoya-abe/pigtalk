import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

function SendButtons() {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" className={classes.button}>
      {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
      <Icon>send</Icon>
    </Button>
  );
}

export default SendButtons;
