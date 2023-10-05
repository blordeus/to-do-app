import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const theme = extendTheme({
  fonts: {
    body: "'Josefin Sans', sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider the>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
