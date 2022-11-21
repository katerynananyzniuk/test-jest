import axios from "axios"

const swapiGetter = (id) => 
  axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.data.name)
    .catch((err) => console.log(err))


export default swapiGetter