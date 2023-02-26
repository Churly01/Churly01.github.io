
// {
//   method,
//   body,
// }

function apiRequest(url, method, options) {

  const request = {
    method,
    ...options
  }

  return fetch(url, request);
}

export default apiRequest
