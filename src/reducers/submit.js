import {handleActions} from 'redux-actions';
import actions from '../actions';
import {firebaseDb} from '../firebase';

// import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  value: '',
  text: '',
  image:
    'https://secretldn.com/wp-content/uploads/2017/07/micropig-feature2.jpg',
  imageChange: false,
  messages: [],
};

const messagesRef = firebaseDb.ref('messages');

const submit = handleActions(
  {
    [actions.submit]: (state, action) => {
      if (action.text === '') {
        alert('メッセージを入力してください');
        return state;
      }

      messagesRef.push({
        image: state.image,
        text: action.text,
      });

      if (state.imageChange === false) {
        return {
          value: '',
          text: action.text,
          imageChange: true,
          image:
            'https://hellogiggles.com/wp-content/uploads/2015/03/11/micro-pig-LondonPignic.jpg',
          messages: state.messages,
        };
      } else {
        return {
          value: '',
          text: action.text,
          imageChange: false,
          image:
            'https://secretldn.com/wp-content/uploads/2017/07/micropig-feature2.jpg',
          messages: state.messages,
        };
      }
    },
    [actions.change]: (state, action) => ({
      ...state,
      value: action.value,
    }),
  },
  initialAppState
);

// const submit = (state = initialAppState, action) => {
//   switch (action.type) {
//     case actionTypes.SUBMIT:
//       if (action.text === '') {
//         alert('メッセージを入力してください');
//         return state;
//       }

//       messagesRef.push({
//         image: state.image,
//         text: action.text,
//       });

//       if (state.imageChange === false) {
//         return {
//           value: '',
//           text: action.text,
//           imageChange: true,
//           image:
//             'https://hellogiggles.com/wp-content/uploads/2015/03/11/micro-pig-LondonPignic.jpg',
//           messages: state.messages,
//         };
//       } else {
//         return {
//           value: '',
//           text: action.text,
//           imageChange: false,
//           image:
//             'https://secretldn.com/wp-content/uploads/2017/07/micropig-feature2.jpg',
//           messages: state.messages,
//         };
//       }
//     case actionTypes.CHANGE:
//       return {
//         ...state,
//         value: action.value,
//       };
//     default:
//       return state;
//   }
// };

export default submit;
