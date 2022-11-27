
export interface Letter {
  letterId: number;
  plantName: string;
  author: string;
  createDate: Date;
}

export interface LetterDetail {
  plantName: string;
  author: string;
  createDate: Date;
  message: string;
}