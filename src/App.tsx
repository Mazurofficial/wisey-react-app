import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { loadCourses } from './features/courses/coursesSlice';
import { Pip } from './features/pip/Pip';
import { CoursePage } from './pages/CoursePage';
import { Main } from './pages/Main';

function App() {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(loadCourses());
   }, [dispatch]);

   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/course/:id" element={<CoursePage />} />
         </Routes>
         <Pip />
      </div>
   );
}

export default App;
