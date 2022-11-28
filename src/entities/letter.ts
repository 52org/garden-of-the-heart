
export interface Letter {
  letterId: string;
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