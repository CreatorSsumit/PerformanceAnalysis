import axios from "axios";
var url = 'http://localhost:4000'

export const registeruser = (state) => dispatch => {

    const { username, password, panel } = state;



    if (username) {
        axios({
            method: "POST",
            data: {
                username,
                password,
                email: username
            },
            withCredentials: true,
            url: `${url}/register/${panel}`,
        }).then((res) => {




            if (res.data.error) {
                dispatch(failregister(res.data.error))
            } else {
                dispatch(successregister(res.data))
            }
        }).catch(err => dispatch(failregister(err.message ? err.message + "  ,  " + 'Authorization failed , Reload website or server' : err)))
    }




}

export const loginuser = (state) => dispatch => {

    const { username, password, panel } = state;

    if (username) {
        axios({
            method: "POST",
            data: {
                username,
                password
            },
            withCredentials: true,
            url: `${url}/login/${panel}`,
        }).then((res) => {




            if (res.data.error) {
                dispatch(failregister(res.data.error))
            } else {
                dispatch(successlogin(res.data))
            }
        }).catch(err => dispatch(failregister(err.message ? err.message + "  ,  " + 'Authorization failed , Reload website or server' : err)))
    }



}




export const sendpoint = (point, type) => dispatch => {


    axios({
        method: "POST",
        data: {
            point,
            type,

        },
        withCredentials: true,
        url: `${url}/sendpoint`,
    }).then((res) => {

        if (res.data.error) {
            dispatch(failregister(res.data.error))
        } else {
            dispatch(successsend(res.data))
        }
    }).catch(err => dispatch(failregister(err.message ? err.message + "  ,  " + '  Authorization failed , Reload website or server' : err)))



}


export const successsend = (res) => ({
    type: 'Sentpoint',
    payload: res
})


export const successregister = (res) => ({
    type: 'Register',
    payload: res
})

export const successlogin = (res) => ({
    type: 'Login',
    payload: res
})
export const failregister = (err) => ({
    type: 'error',
    payload: err
})

export const logoutuser = () => dispatch => {

    axios({
        method: "GET",

        withCredentials: true,
        url: `${url}/logout`,
    }).then((res) => {

        if (res.data.error) {
            dispatch(failregister(res.data.error))
        } else {
            console.log(res.data)
            dispatch(successsend(res.data))
        }
    }).catch(err => dispatch(failregister(err.message ? err.message + "  ,  " + '  Authorization failed , Reload website or server' : err)))



}







