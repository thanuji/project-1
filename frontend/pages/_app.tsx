import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react/dist/types/chakra-provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}
export default MyApp
