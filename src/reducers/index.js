import {combineReducers} from 'redux';
import submit from './submit';
import {reducer as reduxFormReducer} from 'redux-form';

const reducer = combineReducers({submit}, {form: reduxFormReducer});

export default reducer;
