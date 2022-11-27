import * as PlantImage from 'assets/image/plants';

interface ImageTable {
  [key: string]: string;
}

const plantImageTable = {
  사과: PlantImage.appleImage,
  바나나: PlantImage.bananaImage,
  당근: PlantImage.carrotImage,
  산삼: PlantImage.ginsengImage,
  메론: PlantImage.melonImage,
  감자: PlantImage.potatoImage,
  장미: PlantImage.roseImage,
  해바라기: PlantImage.sunflowerImage,
  고구마: PlantImage.sweetPotatoImage,
  토마토: PlantImage.tomatoImage,
};

const createGetImage = (imageTable: ImageTable) => (key: string) => imageTable[key] ?? 'default';

export const getPlantImage = createGetImage(plantImageTable);
