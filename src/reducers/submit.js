import {SUBMIT} from '../actions';

const initialAppState = {
  text: 'お腹すいた',
  image:
    'https://secretldn.com/wp-content/uploads/2017/07/micropig-feature2.jpg',
  imageChange: false,
};

const submit = (state = initialAppState, action) => {
  switch (action.type) {
    case SUBMIT:
      if (state.imageChange === false) {
        return {
          ...state,
          imageChange: true,
          image:
            'https://secretldn.com/wp-content/uploads/2017/07/micropig-feature2.jpg',
        };
      } else {
        return {
          ...state,
          imageChange: false,
          image:
            'https://hellogiggles.com/wp-content/uploads/2015/03/11/micro-pig-LondonPignic.jpg',
        };
      }
    default:
      return state;
  }
};

export default submit;
