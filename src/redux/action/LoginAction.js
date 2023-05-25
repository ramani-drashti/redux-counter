// import userEvent from "@testing-library/user-event"

import { remove_user, users } from "../contanst"

export const LoginAction = (data) => {
    return {
        type: users,
        data
    }
}
export const clearStore = (data) => {
    return{
        type:remove_user,
        data
         // localStorage.removeItem('store');
    }
}