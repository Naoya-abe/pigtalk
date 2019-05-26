import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from './actions';
import ButtonAppBar from './components/ButtonAppBar.js';
import './styles/App.css';
import SimpleForm from './components/SimpleForm.js';
import AlignItemsList from './components/AlignItemsList';

class App extends Component {
  render() {
    const {submit, actions} = this.props;
    console.log(submit);
    console.log(actions);

    return (
      <React.Fragment>
        <ButtonAppBar />
        <div className="App">
          <AlignItemsList img={submit.image} text={submit.text} />
          <SimpleForm />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  submit: state.submit,
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
