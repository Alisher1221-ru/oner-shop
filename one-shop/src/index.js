import React from 'react';
import ReactDOM from 'react-dom/client';
import Headers from './components/headers/headers';
import Footers from './components/footers/futers';
import {ChakraProvider} from "@chakra-ui/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Footers />
      <Headers />
    </ChakraProvider>
  </React.StrictMode>
);
