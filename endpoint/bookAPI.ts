import endpoint from "./Utils"

const  BookAPI = {
    "allEndpoint": endpoint + "/api/v1/books?sort=name",
    "oneBookEndpoint": endpoint + "/api/v1/books/",
}

export default BookAPI;