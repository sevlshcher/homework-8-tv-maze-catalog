import { createAction } from 'redux-actions'

export const searchSoapRequest = createAction('SEARCH_REQUEST')
export const searchSoapSuccess = createAction('SEARCH_SUCCESS')
export const searchSoapFailure = createAction('SEARCH_FAILURE')

export const showSoapRequest = createAction('SHOW_REQUEST')
export const showSoapSuccess = createAction('SHOW_SUCCESS')
export const showSoapFailure = createAction('SHOW_FAILURE')