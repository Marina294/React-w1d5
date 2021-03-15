import {combineReducers} from 'redux'

import snacksReducer from './snacksReducer'

const rootReducer = combineReducers({
    snacks: snacksReducer,
    // meat: meatReducer
})

export default rootReducer