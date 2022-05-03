import defaultPic from '../components/Assets/defaultbanner.png';

//FIXME: should use existing banner pic in db if exists, else use the defaultPic.
const bannerPicReducer = (state = defaultPic, action) => {
    switch (action.type) {
        case 'CHANGE_BANNER':
            return action.payload;
        default:
            return state;
    }
};

export default bannerPicReducer;