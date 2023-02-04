import type { Letter, LetterDetail } from 'entities/letter';
import type { Owner } from 'entities/owner';
import type { PlantDetail } from 'entities/plant';
import type { LetterData } from 'entities/request';
import type { Garden } from 'entities/response';
import type { AllRestFetch } from 'utils/api/createFetch';
import { createAllRestFetchByApi } from 'utils/api/fetch/restFetch';

const restAllFetch = createAllRestFetchByApi('api');

export default class ApiService {
  private validate<T>(data: any) {
    // if (
    //   !data ||
    //   !data.message ||
    //   data.message !== 'success' ||
    //   data.data === undefined ||
    //   data.data === null
    // ) {
    //   throw new Error(data.message || 'error');
    // }

    return data as T;
    // return data.data as T;
  }

  constructor(private fetch: AllRestFetch = restAllFetch) {}

  public async postGarden(owner: Owner) {
    // const data = await this.fetch.postFetch("garden", owner);
    const data = {
      uuid: '123',
      gardenName: 'cashew',
    };

    return this.validate<string>(data);
  }

  public async getGarden(uuid: string) {
    // const data = await this.fetch.getFetch(`garden/${uuid}`);

    const data = {
      name: 'cashew',
      plantList: [
        { letterId: '123', plantName: '토마토', wateringCount: 4, isWatered: false },
        { letterId: '456', plantName: '해바라기', wateringCount: 4, isWatered: true },
      ],
    };

    return this.validate<Garden>(data);
  }

  public async getGardenPlantDetail(letterId: string) {
    // const data = await this.fetch.getFetch(`garden/detail/${letterId}`);

    const data = {
      plantName: '토마토',
      wateringCount: 3,
      keywords: ['안녕', '나는', '멋쟁이', '토마토'],
    };
    return this.validate<PlantDetail>(data);
  }

  public async putGardenWater(letterId: string) {
    console.error(
      '현재 물주기 부분은 구현하지 않아 apiService.ts 55번째 줄 wateringCount를 직접 조정해야 합니다',
    );
    const data = await this.fetch.putFetch(`garden/water/${letterId}`);

    return this.validate<string>(data);
  }

  public async postLetter(letterData: LetterData) {
    // const data = await this.fetch.postFetch(`letter/send`, letterData);

    const data = {
      plantName: '바나나',
      author: '꿀고',
      uuid: '123',
      message: '안녕 나는 꿀고~~ 의 탈을쓴캐슈~',
      keyWords: ['냠냠바나나'],
    };
    return this.validate<string>(data);
  }

  public async getLetterList(uuid: string) {
    // const data = await this.fetch.getFetch(`letter/list/${uuid}`);

    const data = [
      {
        letterId: 'letter1',
        plantName: '바나나',
        author: '꿀고',
        createDate: new Date(),
      },
    ];

    return this.validate<Letter[]>(data);
  }

  public async getLetterDetail(letterId: string) {
    // const data = await this.fetch.getFetch(`letter/detail/${letterId}`);

    const data = {
      plantName: '바나나',
      author: '꿀고',
      createDate: new Date(),
      message: '안녕 나는 꿀고~~ 의 탈을쓴캐슈~',
    };

    return this.validate<LetterDetail>(data);
  }
}
