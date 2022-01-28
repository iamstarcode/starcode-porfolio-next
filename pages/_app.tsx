import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../layouts/default'
import { extendTheme, VechaiProvider } from '@vechaiui/theme'
import { iDark, iLight } from '../themes/theme';
import * as atoms from '../stores/store'
import { useAtom } from 'jotai'


const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    iDark,
    iLight
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  
  const [selectedTheme,change] = useAtom(atoms.darkModeAtom);
  
  return <DefaultLayout>
    <VechaiProvider theme={theme} colorScheme={selectedTheme?'iDark':'iLight'}>
      <Component {...pageProps} />
    </VechaiProvider>
  </DefaultLayout>

}

export default MyApp
