import * as Img from 'assets/image/plant-detail';
import type { PlantDetail } from "entities/plant";
import { getSeedInfo } from 'utils';

const plantLeveImage = [
  Img.seedGround,
  Img.sprout,
  Img.mainImage
] as const;

export function getPlantDetailImage({ plantName, wateringCount }: PlantDetail) {

  if (!wateringCount) {
    return plantLeveImage[0];
  }

  const seed = getSeedInfo(plantName);

  if (!seed) {
    return plantLeveImage[0];
  }

  const level = Math.floor(seed.growingPeriod / 2);

  if (wateringCount < level) {
    return plantLeveImage[1];
  } else if (wateringCount < seed.growingPeriod) {
    return plantLeveImage[2];
  }

  return seed.imgUrl;
}