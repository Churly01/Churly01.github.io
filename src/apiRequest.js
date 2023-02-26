
// {
//   method,
//   body,
// }

function apiRequest(url, method, options) {

  const request = {
    method,
    ...options
  }
  console.log(request);

  return fetch(url, request);
}

export default apiRequest
