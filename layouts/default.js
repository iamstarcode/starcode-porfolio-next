import SideBar from '../layouts/partials/sidebar'
import Navbar from '../layouts/partials/navbar'
import Head from 'next/head'
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen">
      <SideBar/>
        <div className="flex flex-col flex-1">
             <Navbar/>
             <main className="p-4 lg:p-8 flex container mx-auto">{children}</main>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
