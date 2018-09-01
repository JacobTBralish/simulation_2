const initialState ={
    name:'',
    address:'',
    city: '',
    state:'',
    zip:'',
    img: '',
    morgage: '',
    rent: '',
    houses: []
}

const ADD_NEW_HOUSE = 'ADD_NEW_HOUSE';
const GET_HOUSES = 'GET_HOUSES';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORGAGE = 'UPDATE_MORGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const ADD_COST = 'ADD_COST';
const ADD_NEW_IMG = 'ADD_NEW_IMG';


export default function reducer( state = initialState, action){
    switch(action.type) {

        case ADD_NEW_HOUSE:
            return {houses: [...state.houses, action.payload]}
        case GET_HOUSES:
            return {...state, houses: action.payload}
       case UPDATE_NAME:
            return {...state, name: action.payload}
       case UPDATE_ADDRESS:
            return {...state, address: action.payload}
       case UPDATE_CITY:
            return {...state, city: action.payload}
        case UPDATE_STATE:
            return {...state, state: action.payload}
        case UPDATE_ZIP:
            return {...state, zip: action.payload}
        case UPDATE_IMG:
            return {...state, img: action.payload}
        case UPDATE_MORGAGE:
            return {...state, morgage: action.payload}
        case UPDATE_RENT:
            return {...state, rent: action.payload}
        case ADD_COST:
            return {...state, houses: [...state.houses, action.payload]}
        case ADD_NEW_IMG:
            return {...state, houses: [...state.houses, action.payload]}


    
        default:
            return state
    }
}

export function updateName( name ){
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddress( address ){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity( city ){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState( state ){
    return {
        type: UPDATE_STATE,
        payload: state
    }
}
export function updateZip( zip ){
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function getHouses( houses ){
    return{
        type: GET_HOUSES,
        payload: houses
    }
}

export function addNewHouse( name, address, city, state, zip){
    const newHouse ={
        name,
        address,
        city,
        state,
        zip
    }
    return{
        type: ADD_NEW_HOUSE,
        payload: newHouse
    }
}



export function addNewImg( img ){
    const newImg ={
        img
    }
    return{
        type: ADD_NEW_IMG,
        payload: newImg
    }
}

export function updateImg( img ){
    return{
        type: UPDATE_IMG,
        payload: img
    }
}




export function displayMorgage( morgage ){
    return{
        type: UPDATE_MORGAGE,
        payload: morgage
    }
}
export function displayRent( rent ){
    return{
        type: UPDATE_RENT,
        payload: rent
    }
}

export function addCost( morgage, rent ){
    const newCost ={
        morgage,
        rent
    }
    return{
        type: ADD_COST,
        payload: newCost
    }
}