import * as ActionType from '../type';
// import axios from '../../config/config';
import "toasted-notes/src/styles.css";

// const BASE_URL = process.env.REACT_APP_URL;
// const config = {
//     headers: {
//         "Content-Type": "application/json",

//     }
// }

export const addToCart = (payload) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload
    }
}

