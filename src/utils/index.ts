import * as LetterBackground from 'assets/image/letter';
import * as PlantDetailImage from 'assets/image/plant-detail';
import { SeedTable } from 'data/seedTable';

interface ImageTable {
  [key: string]: string;
}

const letterBackgroundTable: ImageTable = {
  사과: LetterBackground.apple,
  바나나: LetterBackground.banana,
  당근: LetterBackground.carrot,
  산삼: LetterBackground.ginseng,
  메론: LetterBackground.melon,
  감자: LetterBackground.potato,
  장미: LetterBackground.rose,
  해바라기: LetterBackground.sunflower,
  호박고구마: LetterBackground.sweetPotato,
  토마토: LetterBackground.tomato,
};

export const getSeedInfo = (plantName: string) => SeedTable[plantName];

export const getPlantImage = (plantName: string) => getSeedInfo(plantName)?.imgUrl;

export const getGrowingPeriod = (plantName: string) => getSeedInfo(plantName)?.growingPeriod;

export const getPlantDetailImage = (wateringCount: number, plantName: string) => {
  if (wateringCount === getGrowingPeriod(plantName)) return getPlantImage(plantName);
  if (wateringCount === 0) return PlantDetailImage.seedGround;

  return PlantDetailImage.sprout;
};

export const getLetterBackground = (plantName: string) => letterBackgroundTable[plantName];
