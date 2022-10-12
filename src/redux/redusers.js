import { auth, loading, groups, students, nbIDs, nbIDsDEL, setArr, delArr, getInfo } from './actionType';


const initialState = {
    token: '',
    isLoaded: false,
    groups: [{"course": "course", "id": 0, "title": "group"}],
    students: [],
    nbID: [],
    arr: [],
    info: ''
}


export const mainReducer = (state = initialState, action) => {

  

    switch(action.type) {
        case auth: 
            return {
                ...state,
               token: action.payload
            }
            case loading: 
            return {
                ...state,
               isLoaded: action.payload
            }
            case groups: 
            return {
                ...state,
               groups: action.payload
            }
            case students: 
            return {
                ...state,
                students: action.payload
            }
            case nbIDs: 
          state.nbID.push(action.payload)
            return {
                ...state,
                ...state.nbID 
            }
            case nbIDsDEL: 
            return {
                ...state,
                nbID: state.nbID.filter((n) => {return n != action.payload}),
            }
            case setArr: 
            return {
                ...state,
                arr: action.payload
            }

            case delArr: 
            return {
                ...state,
                arr: action.payload,
                nbID: action.payload
            }
            case getInfo: 
            return {
                ...state,
                info: action.payload,
            }
                

        default: 
            return state;
    }
}
