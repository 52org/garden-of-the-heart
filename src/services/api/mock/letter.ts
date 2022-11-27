import type { Letter, LetterDetail } from "../entities/letter";

export const letterList: Letter[] = [
  {
    letterId: 1,
    plantName: "토마토",
    author: "바보",
    createDate: new Date()
  }
]

export const letterDetail: LetterDetail = {
  plantName: "토마토",
  author: "바보",
  createDate: new Date(),
  message: "ㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ"
}