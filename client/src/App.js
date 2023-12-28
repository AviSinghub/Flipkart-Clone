
//component 
import Header from './components/headers/Headers';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import DetailView from './components/details/DetailView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';

import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop: 54}} >
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/product/:id' element={<DetailView/>} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
