export const apiCall = (link) => {
  return fetch(link, {mode: "no-cors"}).then(res => res.json())
}