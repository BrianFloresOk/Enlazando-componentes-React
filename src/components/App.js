import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound';
import Chart from './Chart';
import GenresInDb from './GenresInDb'
import LastMovieInDb from './LastMovieInDb';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Routes>
            <Route exact path={"/"} element={<ContentWrapper />} />
            <Route exact path={"/table"} element={<Chart />}/>
            <Route exact path={"/genres"} element={<GenresInDb />}/>
            <Route exact path={"/last-movie"} element={<LastMovieInDb />}/> 
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </div>
    </React.Fragment>
  );
}

export default App;
