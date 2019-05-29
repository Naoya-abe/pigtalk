import React, {Component} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../styles/ChatBox.css';

import SendButtons from './SendButton';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
//   dense: {
//     marginTop: 19,
//   },
// }));

class TextInput extends Component {
  render() {
    // const classes = useStyles();
    const {actions} = this.props;
    // console.log(props);

    //React Hooks
    // const [values, setValue] = React.useState({
    //   text: '',
    // });

    // const handleChange = text => event => {
    //   setValue({[text]: event.target.value});
    // };

    // const pushMessages = (props, values) => {
    //   messagesRef.push({
    //     image: props.img,
    //     text: values.text,
    //   });
    // };

    return (
      <React.Fragment>
        <form className="wrap" noValidate autoComplete="off">
          <TextField
            id="standard-text"
            label="メッセージを入力"
            className="text"
            margin="normal"
            onChange={e => actions.handleChange(e.target.value)}
            value={this.props.value}
          />
          <SendButtons
            onClick={() => {
              actions.onSubmitClick(this.props.value);
            }}
          />
        </form>
      </React.Fragment>
    );
  }
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
