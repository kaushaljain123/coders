import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducers, userRegisterReducers, userDetailsReducers, userUpdateProfileReducers, userListReducers, userDeleteReducers, userUpdateReducers, sendEmailReducers, updatePasswordReducers, orderPendingDeleteReducers } from './reducers/userReducers'
import { filesListReducers } from './reducers/fileReducers'


const cartItemfromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfofromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressfromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const reducer = combineReducers({
    userLogin: userLoginReducers,
    sendEmail: sendEmailReducers,
    updatePassword: updatePasswordReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducers,
    userUpdateProfile: userUpdateProfileReducers,
    userList: userListReducers,
    userDelete: userDeleteReducers,
    userUpdate: userUpdateReducers,
    fileLists: filesListReducers
})

const initialState = {
    cart: { cartItems: cartItemfromStorage, shippingAddress: shippingAddressfromStorage }, userLogin: { userInfo: userInfofromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store