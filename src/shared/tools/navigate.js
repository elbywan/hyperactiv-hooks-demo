import { WEB } from '../constants'

export function navigate(location, replaceState = false) {
    if(!WEB)
        return
    window.history[
        replaceState ?
            'replaceState' :
        'pushState'
    ](null, '', location)
    window.dispatchEvent(new Event('popstate'))
}
