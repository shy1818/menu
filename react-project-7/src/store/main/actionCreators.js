
import * as types from './actionTypes'
import axios from 'axios'
export default {
    getListAsync () {
        return {
            type: types.GET_LIST_ASYNC,
            payload: axios.get('/mock/cookbook-list.json')
        }
    },
    getCategoriesAsync () {
        console.log(1)
        return {
            type: types.GET_CATEGORIES_ASYNC,
            payload: axios.get('/mock/cookbook-category.json')
        }
    }
}