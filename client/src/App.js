import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import ProductForm from './components/ProductForm'
import Update from './components/Update';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/edit/:id' element={<Update/>}/>
        </Routes>
    </div>
  );
}
export default App;