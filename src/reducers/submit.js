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
  let msgs = state.messages;

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

      messagesRef.on('child_added', snapshot => {
        const m = snapshot.val();

        msgs.push({
          image: m.image,
          text: m.text,
        });
      });

      if (state.imageChange === false) {
        return {
          value: '',
          text: action.text,
          imageChange: true,
          image:
            'https://hellogiggles.com/wp-content/uploads/2015/03/11/micro-pig-LondonPignic.jpg',
          messages: msgs,
        };
      } else {
        return {
          value: '',
          text: action.text,
          imageChange: false,
          image:
            'https://secretldn.com/wp-content/uploads/2017/07/micropig-feature2.jpg',
          messages: msgs,
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
