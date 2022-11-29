import { Rest } from "../api";
import { createAllRestFetch } from "../createFetch";

export const apiUrl = "https://bluewow.link";

export const restFetch = new Rest(apiUrl);

export const createAllRestFetchByApi = createAllRestFetch(restFetch);