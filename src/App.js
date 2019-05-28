import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from './actions';
import ButtonAppBar from './components/ButtonAppBar.js';
// import SendButtons from './components/SendButton';
import './styles/App.css';
import TextInput from './components/TextInput.js';
import AlignItemsList from './components/AlignItemsList';
import {dispatch} from 'rxjs/internal/observable/range';

import {firebaseDb} from './firebase';
const messagesRef = firebaseDb.ref('messages');

class App extends Component {
  render() {
    const {submit} = this.props;

    console.log(this.props);

    return (
      <React.Fragment>
        <ButtonAppBar />
        <div className="App">
          {submit.messages.map((m, i) => (
            <AlignItemsList key={i} message={m} />
          ))}
          <TextInput
            value={submit.value}
            // onChange={() => actions.handleChange()}
            // onClick={() => actions.onSubmitClick()}
          />
          {/* <SendButtons onClick={() => actions.onSubmitClick('さしすせそ')} /> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  submit: state.submit,
});

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(actions, dispatch),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default connect(mapStateToProps)(App);
