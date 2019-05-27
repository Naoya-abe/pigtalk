import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../styles/ChatBox.css';

import SendButtons from './SendButton';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions';

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

function TextInput(props) {
  const classes = useStyles();
  console.log(props);

  //React Hooks
  const [values, setValue] = React.useState({
    text: '',
  });

  console.log(values);

  const handleChange = text => event => {
    setValue({[text]: event.target.value});
  };

  console.log(values.text);

  return (
    <React.Fragment>
      <form className="wrap" noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="メッセージを入力"
          className="text"
          margin="normal"
          onChange={handleChange('text')}
          value={values.text}
        />
        <SendButtons
          onClick={() => {
            props.actions.onSubmitClick(values.text);
            setValue({text: ''});
          }}
        />
      </form>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TextInput);

// export default TextInput;

// import React from 'react';
// import {Field, reduxForm} from 'redux-form';

// const SimpleForm = props => {
//   const {handleSubmit, pristine, reset, submitting} = props;
//   console.log(props);

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Notes</label>
//         <div>
//           <Field name="notes" component="textarea" />
//         </div>
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>
//           Submit
//         </button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   );
// };

// export default reduxForm({
//   form: 'simple', // a unique identifier for this form
// })(SimpleForm);
