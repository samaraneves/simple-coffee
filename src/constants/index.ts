import axios from "axios"

export const ENDPOINT = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

export const API = axios.create({
    baseURL: ENDPOINT,
})