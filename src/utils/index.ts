import * as PlantDetailImage from 'assets/image/plant-detail';
import { SeedTable } from 'data/seedTable';

export const getSeedInfo = (plantName: string) => SeedTable[plantName];

export const getPlantImage = (plantName: string) => getSeedInfo(plantName)?.imgUrl;

export const getGrowingPeriod = (plantName: string) => getSeedInfo(plantName)?.growingPeriod;

export const getPlantDetailImage = (wateringCount: number, plantName: string) => {
  if (wateringCount === getGrowingPeriod(plantName)) return getPlantImage(plantName);
  if (wateringCount === 0) return PlantDetailImage.seedGround;

  return PlantDetailImage.sprout;
};
