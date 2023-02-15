

/**
 * XMLHttpRequest (GET) + Promises
 * 
 */


const request = obj => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true )
    xhr.send(null)


    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    })
}