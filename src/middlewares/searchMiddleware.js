import {
    searchSoapRequest,
    searchSoapSuccess,
    searchSoapFailure
} from '../actions'
import { search } from '../api'

const searchMiddleware = store => next => action => {
    if (action.type === searchSoapRequest.toString()) {
        const query = action.payload
        search(query)
            .then(soap => {
                store.dispatch(searchSoapSuccess(soap))
            })
            .catch(error => {
                store.dispatch(searchSoapFailure(error))
            })
    }
    next(action)
}

export default searchMiddleware

// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
