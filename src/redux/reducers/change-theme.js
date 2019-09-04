import { THEME } from '../actions/action-types'
import ThemeLight from '../../theme/light'
import ThemeDark from '../../theme/dark'
const initialState = {
    ...ThemeLight
}

export const changeTheme = (state = initialState, action) => {
    switch (action.type) {
        case THEME:
            return {
                ...state,
                ...(action.value === 'dark' ? ThemeDark : ThemeLight)
            }
        default:
            return state
    }
}
