import {combineReducers} from 'redux';

import auth from './auth';
import profilePic from './profilePic';
import bannerPic from './bannerPic';
import profileBio from './profileBio';

export const reducers = combineReducers({auth, profilePic, bannerPic, profileBio});