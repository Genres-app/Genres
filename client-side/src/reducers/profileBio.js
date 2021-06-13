
//FIXME: should use existing bio in db if exists, else set as empty string.
const profileBioReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_BIO':
            return action.payload;
        default:
            return state;
    }
};

export default profileBioReducer;