import * as actionTypes from '../utils/actionTypes';
import {createActions} from 'redux-actions';

export default createActions({
  [actionTypes.SUBMIT]: text => ({
    text: text,
  }),

  [actionTypes.CHANGE]: value => ({
    value: value,
  }),
});

// export const onSubmitClick = text => ({
//   type: actionTypes.SUBMIT,
//   text,
// });

// export const handleChange = value => ({
//   type: actionTypes.CHANGE,
//   value,
// });
