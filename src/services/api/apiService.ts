import type { AllRestFetch } from "utils/api/createFetch";
import { createAllRestFetchByApi } from "utils/api/fetch/restFetch";

import type { Letter, LetterDetail } from "./entities/letter";
import type { Plant, PlantDetail } from "./entities/plant";
import type { LetterData } from "./types/request";

const restAllFetch = createAllRestFetchByApi("api");

export default class ApiService {

  constructor(private fetch: AllRestFetch = restAllFetch) { }

  public async getPlantList(uuid: string) {

    const data: any = await this.fetch.getFetch(`garden/${uuid}`);

    return data.data as Plant[];
  }

  public async getDetailPlant(letterId: number) {

    const data: any = await this.fetch.getFetch(`garden/detail/${letterId}`);

    return data.data as PlantDetail;
  }

  public async getLetterList(uuid: string) {

    const data: any = await this.fetch.getFetch(`letter/list/${uuid}`);

    return data.data as Letter[];
  }

  public async getLetterDetail(letterId: number) {

    const data: any = await this.fetch.getFetch(`letter/detail/${letterId}`);

    return data.data as LetterDetail;
  }

  public async putWater(letterId: number) {

    const data: any = await this.fetch.putFetch(`garden/water/${letterId}`);

    return data.data;
  }

  public async postLetter(letterData: LetterData) {
    return;
  }

}