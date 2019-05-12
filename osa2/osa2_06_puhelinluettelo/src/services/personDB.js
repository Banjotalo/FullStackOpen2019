import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

//Haetaan kaikki henkilöt
const selectAll = () => {
    return axios.get(baseUrl)
}

//Lisätään uusi henkilö
const insertPerson = newObject => {
  return axios.post(baseUrl, newObject)
}

//poistetaan henkilö
const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

//päivitetään henkilö
const updatePerson = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { selectAll, insertPerson, deletePerson, updatePerson }