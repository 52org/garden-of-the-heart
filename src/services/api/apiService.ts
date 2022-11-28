import type { Letter, LetterDetail } from "entities/letter";
import type { Owner } from "entities/owner";
import type { PlantDetail } from "entities/plant";
import type { LetterData } from "entities/request";
import type { Garden } from "entities/response";
import type { AllRestFetch } from "utils/api/createFetch";
import { createAllRestFetchByApi } from "utils/api/fetch/restFetch";

const restAllFetch = createAllRestFetchByApi("api");

export default class ApiService {

  private validate<T>(data: any) {

    if (
      !data
      || !data.message
      || data.message !== "success"
      || data.data === undefined
      || data.data === null
    ) {
      throw new Error(data.message || "error");
    }

    return data.data as T;
  }

  constructor(private fetch: AllRestFetch = restAllFetch) { }

  public async postGarden(owner: Owner) {

    const data = await this.fetch.postFetch("garden", owner);

    return this.validate<string>(data);
  }

  public async getGarden(uuid: string) {

    const data = await this.fetch.getFetch(`garden/${uuid}`);

    return this.validate<Garden>(data);
  }

  public async getGardenPlantDetail(letterId: string) {

    const data = await this.fetch.getFetch(`garden/detail/${letterId}`);

    return this.validate<PlantDetail>(data);
  }

  public async putGardenWater(letterId: string) {

    const data = await this.fetch.putFetch(`garden/water/${letterId}`);

    return this.validate<string>(data);
  }

  public async postLetter(letterData: LetterData) {

    const data = await this.fetch.postFetch(`letter/send`, letterData);

    return this.validate<string>(data);
  }

  public async getLetterList(uuid: string) {

    const data = await this.fetch.getFetch(`letter/list/${uuid}`);

    return this.validate<Letter[]>(data);
  }

  public async getLetterDetail(letterId: string) {

    const data = await this.fetch.getFetch(`letter/detail/${letterId}`);

    return this.validate<LetterDetail>(data);
  }

}