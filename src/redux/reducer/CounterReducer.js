import { useState } from "react";
import { ADD, CLEAR, SUB, SWEET } from "../contanst";

const intialState = {
    count: 0,
};
// const [increment,seticrement]=useState('1')
const counterData = (state = intialState, action) => {
    console.warn('Action',action);
    switch (action.type) {
        case ADD: {
            return {
                count: state.count + action.payload
            };
        }
        case SUB: {
            return {
                count: state.count - action.payload
            };
        }
        case SWEET: {
            return {
                count: state.count
            }   
        }
        case CLEAR: {
            return {
                count:0
             }
        }
        // Swal.fire("Are you sure clear counter value...?","",
        // icon:"danger")
        // 
        default:
            return state;
    }
}

export default counterData