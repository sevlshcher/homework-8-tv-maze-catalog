import {
    showSoapRequest,
    showSoapSuccess
} from '../actions'
import { show } from '../api'

const showMiddleware = store => next => action => {
    if (action.type === showSoapRequest.toString()) {
        const showId = action.payload
        show(showId)
            .then(soap => {
                store.dispatch(showSoapSuccess(soap))
            })
            .catch(error => {
                store.dispatch(showSoapSuccess(error))
            })
    }
    next(action)
}

export default showMiddleware

// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
