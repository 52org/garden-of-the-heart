import { Rest } from "../api";
import { createAllRestFetch } from "../createFetch";

const hostname = "any";

export const restFetch = new Rest(hostname);

export const createAllRestFetchByApi = createAllRestFetch(restFetch);