import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import { Main } from './components/Main';

function App() {
  return (
    <ChakraProvider>
 
      <Main />

      </ChakraProvider>
  );
}

export default App;