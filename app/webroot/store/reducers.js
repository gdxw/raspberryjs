/**
 * create by daixingwang811 2018/06/08 
 * redux 
 */

import { combineReducers } from 'redux';
import * as common from './common/reducer';

const rootReducer = combineReducers({
  ...common
});

export default rootReducer;