import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { loadCourses } from './features/courses/coursesSlice';
import { Main } from './pages/Main';

function App() {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(loadCourses());
   }, [dispatch]);

   return (
      <div className="App">
         <Main />
      </div>
   );
}

export default App;
