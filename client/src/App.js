
//component 
import Header from './components/headers/Headers';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import DetailView from './components/details/DetailView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
