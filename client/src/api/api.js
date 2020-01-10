export const apiCall = (link) => {
  return fetch(link).then(res => res.json())
}