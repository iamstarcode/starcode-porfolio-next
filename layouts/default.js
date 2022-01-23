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
        <div className="flex flex-col text-black bg-white dark:text-gray-200 dark:bg-base">
             <Navbar/>
             <main className="p-4 lg:p-8 flex container mx-auto">{children}</main>
        </div>
    </>
  )
}

export default DefaultLayout
