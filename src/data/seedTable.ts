import * as PlantImage from 'assets/image/plants';

interface seedDescriptionObject {
  skill: string;
  description: string;
}

interface SeedTableObject {
  [key: string]: {
    imgUrl: string;
    plantName: string;
    growingPeriod: number;
    description: seedDescriptionObject;
  };
}

type SeedTableType = SeedTableObject;

export const SeedTable: SeedTableType = {
  해바라기: {
    imgUrl: PlantImage.sunflower,
    plantName: '해바라기',
    growingPeriod: 4,
    description: {
      skill: '나만 바라보게 된다!',
      description: '사랑해바라기!'
    },
  },
  산삼: {
    imgUrl: PlantImage.ginseng,
    plantName: '산삼',
    growingPeriod: 5,
    description: {
      skill: '들숨에 건강과 날숨에 재력을 얻는다!',
      description: '옥체보존 건강이 재.산삼!',
    },
  },
  호박고구마: {
    imgUrl: PlantImage.sweetPotato,
    plantName: '호박고구마',
    growingPeriod: 10,
    description: {
      skill: '사이다랑 함께 ~!',
      description: '고구마호박이 아니라 호박고구마예요, 어머니.',
    },
  },
  장미: {
    imgUrl: PlantImage.rose,
    plantName: '장미',
    growingPeriod: 5,
    description: {
      skill: '유혹의 장미',
      description: '가시에 찔리지 않고서는 장미를 모을 수 없다.',
    },
  },
  바나나: {
    imgUrl: PlantImage.banana,
    plantName: '바나나',
    growingPeriod: 1,
    description: {
      skill: '길 가다가 미끄러졌는데 눈떠보니 내 옆자리 ~',
      description: '바나나를 먹으면 나한테 반ㅎ아니.',
    },
  },
  메론: {
    imgUrl: PlantImage.melon,
    plantName: '메론',
    growingPeriod: 1,
    description: {
      skill: '메론 스킬은 뭘 해야할까요.',
      description: '올 때 메로나.'
    },
  },
  사과: {
    imgUrl: PlantImage.apple,
    plantName: '사과',
    growingPeriod: 3,
    description: {
      skill: '내 사과를 받아준다.',
      description: '웁스. 쏘리~ 사과할게.'
    },
  },
};
