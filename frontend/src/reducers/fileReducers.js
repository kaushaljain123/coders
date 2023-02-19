import { FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, FILE_UPLOAD_FAIL, FILE_LIST_REQUEST, FILE_LIST_SUCCESS, FILE_LIST_FAIL } from '../constants/fileConstant'

// USER REGISTER REDUCERS
export const filesUploadReducers = (state = {}, action) => {
    switch (action.type) {
        case FILE_UPLOAD_REQUEST:
            return { loading: true }
        case FILE_UPLOAD_SUCCESS:
            return { loading: false, files: action.payload }
        case FILE_UPLOAD_FAIL:
            return { loading: false, error: action.payload }
        case FILE_UPLOAD_FAIL:
            return {}
        default:
            return state
    }
}

export const filesListReducers = (state = {}, action) => {
    switch (action.type) {
        case FILE_LIST_REQUEST:
            return { loading: true }
        case FILE_LIST_SUCCESS:
            return { loading: false, files: action.payload }
        case FILE_LIST_FAIL:
            return { loading: false, error: action.payload }
        case FILE_LIST_FAIL:
            return {}
        default:
            return state
    }
}