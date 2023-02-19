import { FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, FILE_UPLOAD_FAIL, FILE_LIST_REQUEST, FILE_LIST_SUCCESS, FILE_LIST_FAIL } from '../constants/fileConstant'
import axios from 'axios'

export const fileUpload = (batchCode, tags, files, folderName) => async (dispatch) => {
    try {
        dispatch({
            type: FILE_UPLOAD_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://206.189.141.77/api/files/uploadFolder', { batchCode, tags, files, folderName }, config)

        dispatch({
            type: FILE_UPLOAD_SUCCESS,
            payload: data
        })

        document.location.href = '/'

    } catch (error) {
        dispatch({
            type: FILE_UPLOAD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const fileList = (batchCode) => async (dispatch) => {
    try {
        dispatch({
            type: FILE_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://206.189.141.77/api/files', { batchCode }, config)

        dispatch({
            type: FILE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FILE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}