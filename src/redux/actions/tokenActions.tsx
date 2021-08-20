import { SET_TOKEN } from "../actionTypes"

export const setToken = () => {
    return {
        type: SET_TOKEN,
        payload: 'test_token',
    }
}