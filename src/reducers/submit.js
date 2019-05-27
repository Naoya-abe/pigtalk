import * as actions from '../actions';

const initialAppState = {
  text: '',
  image:
    'https://secretldn.com/wp-content/uploads/2017/07/micropig-feature2.jpg',
  imageChange: false,
};

const submit = (state = initialAppState, action) => {
  switch (action.type) {
    case actions.SUBMIT:
      if (state.imageChange === false) {
        return {
          text: action.text,
          imageChange: true,
          image:
            'https://secretldn.com/wp-content/uploads/2017/07/micropig-feature2.jpg',
        };
      } else {
        return {
          text: action.text,
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
