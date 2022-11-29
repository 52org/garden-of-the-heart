import { Rest } from "../api";
import { createAllRestFetch } from "../createFetch";

export const apiUrl = "http://demo-1.eba-iqwydbrb.ap-northeast-2.elasticbeanstalk.com";

export const restFetch = new Rest(apiUrl);

export const createAllRestFetchByApi = createAllRestFetch(restFetch);