import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GlobalNav from './components/global-nav';
import { RootState } from './store';
import { addCount } from './store/modules/base';

function App() {

  const state = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const onAddCount = useCallback(() => {
    dispatch(addCount(2));
  }, [dispatch]);

  useEffect(() => {
    console.log(state);
  }, [state]);


  return (
    <div className="App max-w-[450px] h-screen">
      <header className="flex items-center justify-center w-full h-full App-header">
        <p className="text-[120px] text-violet-400">
          안녕하세요
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>

        </p>
        <button onClick={onAddCount}>+</button>
      </header>
    </div>
  );
}

export default App;
