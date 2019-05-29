import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import '../styles/TextInput.css';
import SendButtons from './SendButton';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions';

class TextInput extends Component {
  render() {
    const {actions} = this.props;

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
