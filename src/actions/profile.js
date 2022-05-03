export const changeProfilePic = (profilePic) => {
    return {
        type: 'CHANGE_PROFILE',
        payload: profilePic
    }
};

export const changeBannerPic = (bannerPic) => {
    return {
        type: 'CHANGE_BANNER',
        payload: bannerPic
    }
};

export const changeBio = (text) => {
    return {
        type: 'CHANGE_BIO',
        payload: text
    }
};
