import * as Img from 'assets/image';
import { SeedTable } from "data/seedTable";
import type { Plant } from "entities/plant";

const plantLeveImage = [
  Img.sprout,
  Img.main_image
] as const;

export function getPlantImage({ plantName, wateringCount }: Plant) {

  if (!wateringCount) {
    return "";
  }

  const seed = SeedTable[plantName];

  if (!seed) {
    return "";
  }

  const level = Math.floor(seed.growingPeriod / 2);

  if (wateringCount < level) {
    return plantLeveImage[0];
  } else if (wateringCount < seed.growingPeriod) {
    return plantLeveImage[1];
  }

  return seed.imgUrl;
}