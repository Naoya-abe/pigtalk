import * as actions from '../actions';
import {firebaseDb} from '../firebase';

const initialAppState = {
  value: '',
  text: '',
  image:
    'https://secretldn.com/wp-content/uploads/2017/07/micropig-feature2.jpg',
  imageChange: false,
  messages: [],
};

const messagesRef = firebaseDb.ref('messages');

const submit = (state = initialAppState, action) => {
  switch (action.type) {
    case actions.SUBMIT:
      if (action.text == '') {
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
    case actions.CHANGE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export default submit;
