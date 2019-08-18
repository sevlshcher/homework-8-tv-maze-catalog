import {
    showSoapRequest,
    showSoapSuccess,
    showSoapFailure
} from '../actions'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const soap = handleActions({
    [showSoapRequest]: () => [],
    [showSoapSuccess]: (_state, action) => action.payload
}, [])

const isLoading = handleActions({
    [showSoapRequest]: () => true,
    [showSoapSuccess]: () => false,
    [showSoapFailure]: () => false
}, false)

const error = handleActions({
    [showSoapRequest]: () => null,
    [showSoapSuccess]: (_state, action) => action.payload
}, null)

export default combineReducers({
    soap,
    isLoading,
    error
})