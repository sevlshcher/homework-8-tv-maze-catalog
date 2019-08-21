import {
    showSoapRequest,
    showSoapSuccess,
    showSoapFailure
} from '../actions'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const soap = handleActions({
    [showSoapRequest]: () => [],
    [showSoapSuccess]: (_state, action) => {
        const data = action.payload
        return {
            name: data.name,
            image: data.image,
            summary: data.summary,
            cast: data._embedded.cast.map(item => {
                return {
                    id: item.person.id,
                    name: item.person.name,
                    image: item.person.image
                }
            })
        }
    }
}, [])

const isLoading = handleActions({
    [showSoapRequest]: () => true,
    [showSoapSuccess]: () => false,
    [showSoapFailure]: () => false
}, false)

export default combineReducers({
    soap,
    isLoading
})

export const getSoap = state => state.showReducer.soap
export const getIsLoading = state => state.showReducer.isLoading