import { changeTheme } from './change-theme'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
    theme: changeTheme
})
