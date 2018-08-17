
import * as common from './action-type';

export const toggleSubmen = value => {
    return {
        type: common.OPEN_SUBMEN,
        value
    }
}