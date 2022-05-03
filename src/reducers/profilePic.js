import defaultPic from '../components/Assets/defaultprofile.svg';

//FIXME: should use existing profile pic in db if exists, else use the defaultPic.
const profilePicReducer = (state = defaultPic, action) => {
    switch (action.type) {
        case 'CHANGE_PROFILE':
            return action.payload;
        default:
            return state;
    }
};

export default profilePicReducer;