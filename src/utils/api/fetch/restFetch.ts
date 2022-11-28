import { Rest } from "../api";
import { createAllRestFetch } from "../createFetch";

const hostname = "http://demo-1.eba-iqwydbrb.ap-northeast-2.elasticbeanstalk.com";

export const restFetch = new Rest(hostname);

export const createAllRestFetchByApi = createAllRestFetch(restFetch);