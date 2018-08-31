const initialState ={
    inventory: [],
    img: '',
    price: '',
    name:'',
    address:'',
    city: '',
    state:'',
    zip:'',

}

const ADD_NEW_HOUSE = 'ADD_NEW_HOUSE';
const GET_INVENTORY = 'GET_INVENTORY';
const UPDATE_PRODUCT_TYPE = 'UPDATE_PRODUCT_TYPE';
const UPDATE_PRODUCT_TYPE = 'UPDATE_PRODUCT_TYPE';

export default function reducer( state = initialState, action){
    switch(action.type) {

        case ADD_NEW_HOUSE:
            return {...state, inventory: [...state.inventory, action.payload]}
        case GET_INVENTORY:
            return {...state, inventory: action.payload}

    
        default:
            return state
    }
}

export function getInventory( inventory ){
    return{
        type: GET_INVENTORY,
        payload: inventory
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