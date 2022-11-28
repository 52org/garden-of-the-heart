import React from 'react';

interface PageTemplateProps {
  children: React.ReactElement;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => (
  <div className='max-w-[450px] h-screen'>{children}</div>
);

export default PageTemplate;
