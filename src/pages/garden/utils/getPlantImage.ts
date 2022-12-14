import * as Img from 'assets/image/plant-detail';
import { SeedTable } from 'data/seedTable';
import type { Plant } from 'entities/plant';

const plantLeveImage = [Img.seedGround, Img.seed, Img.sprout, Img.mainImage] as const;

export function getPlantImage({ plantName, wateringCount }: Plant) {
  if (!wateringCount) {
    return plantLeveImage[1];
  }

  const seed = SeedTable[plantName];

  if (!seed) {
    return plantLeveImage[0];
  }

  const level = Math.floor(seed.growingPeriod / 2);

  if (wateringCount < level) {
    return plantLeveImage[2];
  } else if (wateringCount < seed.growingPeriod) {
    return plantLeveImage[3];
  }

  return seed.imgUrl;
}
