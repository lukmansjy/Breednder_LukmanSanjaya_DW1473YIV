import { combineReducers, createStore, applyMiddleware } from "redux";

import {logger, promise} from './middleware'

import users from '../_reducers/usersR'
import pets from '../_reducers/petsR'
import payment from '../_reducers/paymentR'
import species from '../_reducers/speciesR'

const reducer = combineReducers({
    users,
    pets,
    payment,
    species
})

const store = createStore(reducer, applyMiddleware(logger, promise))

export default store