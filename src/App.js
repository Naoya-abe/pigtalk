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

class App extends Component {
  render() {
    const {submit} = this.props;
    console.log(this.props);

    return (
      <React.Fragment>
        <ButtonAppBar />
        <div className="App">
          <AlignItemsList img={submit.image} text={submit.text} />
          <TextInput text={submit.text} />
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
