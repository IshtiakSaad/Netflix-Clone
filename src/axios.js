import axios from "axios";

// Base URL to make request to the movie database

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
});

instance.get()
// instance.get('/foo-bar')

export default instance;