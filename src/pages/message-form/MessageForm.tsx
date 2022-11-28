import Letter from 'components/letter';
import React from 'react';

import LetterForm from './components/LetterForm';

const MessageForm: React.FC = () => {
  return (
    <div>
      <Letter receiver='준'>
        <LetterForm />
      </Letter>
    </div>
  );
};

export default MessageForm;
