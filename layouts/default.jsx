import SideBar from './partials/sidebar'
import Footer from './partials/footer'
import Navbar from './partials/navbar'
import Head from 'next/head'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="antialiased flex flex-col bg-base text-foreground">
             <Navbar/>
             <main className="p-4 lg:p-8 flex container mx-auto mt-0">
               {children}
               </main>
             <Footer/>
        </div>
    </>
  )
}

export default DefaultLayout
