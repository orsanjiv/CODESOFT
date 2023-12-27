import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { DataProvider } from './context/dataContext';

function App() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1 mx-auto "><b>Quiz Platform</b></span>
      </nav>
    <DataProvider>
      {/* Welcome Page */}
      <Start/>

      {/* Quiz Page */}
      <Quiz/>

      {/* Result Page */}
      <Result/>

    </DataProvider>
    </>
  );
}

export default App;
