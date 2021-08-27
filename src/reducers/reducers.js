const initialstate = {
    profile: JSON.parse(localStorage.getItem('user')) || {},
    registererror: '',
    isloading: false,
    isAuthenticated: localStorage.getItem('user') || false,
    who: 'user'

}

const Reducers = (state = initialstate, action) => {



    switch (action.type) {


        case 'Register':

            return { ...state, registererror: null, isAuthenticated: action.payload.isAuthenticate, msg: action.payload.msg, profile: action.payload }

        case 'Login':
            localStorage.setItem('user', JSON.stringify(action.payload))


            return { ...state, registererror: null, isAuthenticated: action.payload.isAuthenticate, who: action.payload.who, profile: action.payload }
        case 'error': localStorage.setItem('user', JSON.stringify({ ...action.payload, profile: '' }))
            return { ...state, registererror: action.payload, profile: '' }

        case 'Sentpoint': localStorage.setItem('user', JSON.stringify(action.payload))


            return { ...state, registererror: null, isAuthenticated: action.payload.isAuthenticate, who: action.payload.who, profile: action.payload, msg: action.payload.msg }




        default:
            return state

    }
}

export default Reducers