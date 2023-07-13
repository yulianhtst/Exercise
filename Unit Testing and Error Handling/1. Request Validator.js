function urlParser(http) {
    const pattern = /^[\w\d\/.*-]+$/;
    const regex = /^[^<>\\&'"]*$/;
    const [protocol, version] = http.version.split('/')
    let methods = {
        GET: 'GET',
        POST: 'POST',
        DELETE: 'DELETE',
        CONNECT: 'CONNECT',
    }
    let versions = {
        '0.9': true,
        '1.0': true,
        '1.1': true,
        '2.0': true,
    }


    if (http.method !== methods[http.method] || http.method === '') {
        throw new Error(`Invalid request header: Invalid Method`)
    }
    if (!pattern.test(http.uri) || !http.hasOwnProperty('uri')) {
        throw new Error(`Invalid request header: Invalid URI`)
    }
    if (protocol !== 'HTTP' || !versions[version] || http.version === '') {
        throw new Error(`Invalid request header: Invalid Version`)
    }
    if (!regex.test(http.message)) {
        throw new Error(`Invalid request header: Invalid Message`)
    }


    return http;
}
urlParser({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})