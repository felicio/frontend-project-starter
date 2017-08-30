import 'whatwg-fetch'

function parse(response) {
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error: Error = new Error(response.statusText)
  throw error
}

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parse)
}
