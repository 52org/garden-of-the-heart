
export interface Plant {
  letterId: number;
  plantName: string;
  wateringCount: number;
  growingPeriod: number;
  isWatered: boolean;
}

export interface PlantDetail {
  plantName: string;
  discription: string;
  growingPeriod: number;
  wateringCount: number;
  keyWordList: string[];
}

