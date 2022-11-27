import React from "react";

interface Letter {
  plantName: string;
  author: string;
  message: string;
  createDate: string;
}

const letterData: Letter = {
  plantName: "토마토",
  author: "haru",
  message: "안녕! 안녕! 안녕! 안녕! \n 안녕! 안녕! 안녕! 안녕! 안녕! \n 안녕! 안녕! 안녕! 안녕! 안녕! 안녕! 안녕! 안녕! 안녕! 안녕! 안녕! 안녕! 안녕! 안녕! 안녕!",
  createDate: "2022-11-27"
}

const Message: React.FC = () => {
  
  return (
    <div className="border-2 rounded w-full h-full relative p-8">
      <p className="whitespace-pre-line">{letterData.message}</p>
      <div className="absolute right-5 bottom-5 text-right">
        <p className="mb-2">{letterData.createDate}</p>
        <p>{letterData.author}</p>
      </div>
    </div>
  );
}

export default Message;