// https://nodejs.org/api/url.html

// 'http://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'

/*
href:
    protocol: http: or https:
    auth: // user:pass
    @
    host: { hostname: host.com, port: 8080 }
    path: { pathname: /p/a/t/h, search: { ?, query: query=string }}
    hash: #hash
*/

// interminal node then url
/*
{ Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL: [Function: URL],
  URLSearchParams: [Function: URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode] }
*/

/*
 url.parse('https://www.google.com/search?q=maloos', true) // true to parse query string from 'q=maloos' to {q: 'maloos'}
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.google.com',
  port: null,
  hostname: 'www.google.com',
  hash: null,
  search: '?q=maloos',
  query: {q: 'maloos'},
  pathname: '/search',
  path: '/search?q=maloos',
  href: 'https://www.google.com/search?q=maloos' }
*/

/*
url.format({
    protocol: 'https',
    host: 'www.google.com',
    search: '?q=maloos',
    pathname: '/search',
})

'https://www.google.com/search?q=maloos'
*/

// querystring module
/*
querystring
{ unescapeBuffer: [Function: unescapeBuffer],
  unescape: [Function: qsUnescape],
  escape: [Function: qsEscape],
  stringify: [Function: stringify],
  encode: [Function: stringify],
  parse: [Function: parse],
  decode: [Function: parse] }
*/

/*
querystring.stringify({
    name: 'Maloos Toto',
    website: 'Maloos.com/Toto'
})

'name=Maloos%20toto&website=Maloos.com%20Toto'

______________________________________________________________________
querystring.parse('name=Maloos%20toto&website=Maloos.com%20Toto')

{ name: 'Maloos Toto', website: 'Maloos.com/Toto' }

*/