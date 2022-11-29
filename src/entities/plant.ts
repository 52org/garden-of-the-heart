export interface Plant {
  letterId: string;
  plantName: string;
  wateringCount: number;
  isWatered: boolean;
}

export interface PlantDetail {
  plantName: string;
  wateringCount: number;
  keywords: string[];
}
