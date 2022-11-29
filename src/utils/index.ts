import * as PlantImage from 'assets/image/plants';
import { SeedTable } from 'data/seedTable';

interface ImageTable {
  [key: string]: string;
}

const plantImageTable = {
  사과: PlantImage.apple,
  바나나: PlantImage.banana,
  당근: PlantImage.carrot,
  산삼: PlantImage.ginseng,
  메론: PlantImage.melon,
  감자: PlantImage.potato,
  장미: PlantImage.rose,
  해바라기: PlantImage.sunflower,
  고구마: PlantImage.sweetPotato,
  토마토: PlantImage.tomato,
};

const createGetImage = (imageTable: ImageTable) => (key: string) => imageTable[key] ?? 'default';

export const getPlantImage = createGetImage(plantImageTable);

export const getSeedInfo = (plantName: string) => SeedTable[plantName];

export const getGrowingPeriod = (plantName: string) => getSeedInfo(plantName)?.growingPeriod;
