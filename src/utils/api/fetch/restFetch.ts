import { Rest } from "../api";
import { createAllRestFetch, createGetRestFetch, createRestFetch } from "../createFetch";

const hostname = window.location.hostname;

export const restFetch = new Rest("any");

export const createRestFetchByPatent = createRestFetch(restFetch);
export const createGetRestFetchByPatent = createGetRestFetch(restFetch);
export const createAllRestFetchByPatent = createAllRestFetch(restFetch);