import axios from 'axios';

const initialState = {
    whatever: [],
    whatever2: []

}

const ITS_WHATEVER = 'ITS_WHATEVER';
const ITS_WHATEVER2 = 'ITS_WHATEVER2';

export function itsWhatever(){
    const data = axios.get('https://practiceapi.devmountain.com/api/trivia/questions') //SIM5 44C, 
    .then(response => {//SIM1 44D
        console.log('response', response)
        return response.data
    })
    console.log('data', data)
    return {
        type: ITS_WHATEVER,
        payload: data
    }
}
export function itsWhatever2(){
    const data = axios.get('/api/stuff?model='+'habit') //SIM1 76E
    .then(response => {
        console.log('response', response)
        return response.data
    })
    console.log('data', data)
    return {
        type: ITS_WHATEVER2,
        payload: data
    }
}

export default function reducer(state = initialState, action){
    console.log(action);
    switch (action.type) {
        case ITS_WHATEVER + '_FULFILLED'://SIM2 43E
            return Object.assign({}, state, {whatever: action.payload});
        case ITS_WHATEVER2 + '_FULFILLED':
            return Object.assign({}, state, {whatever2: action.payload});
        default:
            return state;
    }
}