import { WEB } from '../constants'

export function redirect(to) {
    if(!WEB)
        return
    window.location = to
}