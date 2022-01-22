import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../layouts/default'
import { extendTheme, VechaiProvider } from '@vechaiui/theme'
import { bee } from '../themes/theme';
import * as atoms from '../stores/store'
import { useAtom } from 'jotai'

const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    bee,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  // console.log(useAtom(atoms.theme))

  return <DefaultLayout>
    <VechaiProvider theme={theme} colorScheme="bee">
      <Component {...pageProps} />
    </VechaiProvider>
  </DefaultLayout>

}

export default MyApp
