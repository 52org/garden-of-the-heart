import Letter from 'components/letter';
import React from 'react';

import LetterForm from './components/LetterForm';

const MessageForm: React.FC = () => {
  // redux 스토어 저장 로직 -> onSubmit prop 넘겨주기

  return (
    <div>
      <Letter receiver='준'>
        <LetterForm onSubmit={() => {}} />
      </Letter>
    </div>
  );
};

export default MessageForm;
