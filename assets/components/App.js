import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import SheetList from '../pages/sheet/SheetList';

function App() {
  return (
    <div className="flex h-full pt-5">
      <div className="w-2/12">
        <Navbar />
      </div>
      <div className="w-10/12">
        <Route path="/" exact />
        <Route path="/sheet" component={SheetList} />
        <Redirect to="/sheet" />
      </div>
    </div>
  );
}

export default App;
