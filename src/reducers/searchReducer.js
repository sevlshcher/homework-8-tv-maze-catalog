import {
    searchSoapRequest,
    searchSoapSuccess,
    searchSoapFailure
} from '../actions'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const soap = handleActions({
    [searchSoapRequest]: () => [],
    [searchSoapSuccess]: (_state, action) => action.payload
}, [])

const isLoading = handleActions({
    [searchSoapRequest]: () => true,
    [searchSoapSuccess]: () => false,
    [searchSoapFailure]: () => false
}, false)

const error = handleActions({
    [searchSoapRequest]: () => null,
    [searchSoapFailure]: (_state, action) => action.payload
}, null)

export default combineReducers({
    soap,
    isLoading,
    error
})

export const getSoap = state => state.soap
export const getIsLoading = state => state.isLoading
export const getError = state => state.error