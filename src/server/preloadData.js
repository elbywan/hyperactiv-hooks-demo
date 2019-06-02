import ReactDOMServer from 'react-dom/server'

export async function preloadData(jsx, promises) {
    let firstLoop = true
    while(firstLoop || promises.length > 0) {
        promises.length = 0
        ReactDOMServer.renderToStaticMarkup(jsx)
        await Promise.all(promises)
        firstLoop = false
    }
}
