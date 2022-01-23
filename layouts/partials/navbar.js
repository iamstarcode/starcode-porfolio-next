import Link from 'next/link';
import { useRouter } from 'next/router';
import useToggle from '../../hooks/useToggle';
import { Button } from '@vechaiui/button';
import { Switch } from '@vechaiui/switch';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai'
import * as atoms from '../../stores/store'
import ClientOnly from '../../utils/clientonly'




const NavBar = () => {

    const [menu, toggleMenu] = useToggle(false);
    const [darkMode, setDarkMode] = useAtom(atoms.darkModeAtom) 

    //when ever the 
    useEffect(()=>{
        darkMode?
        document.documentElement.classList.add('dark')
        :document.documentElement.classList.remove('dark')
    },[darkMode])

    const router  = useRouter();
    const activeLink = 'text-[#f59e0b] border-[#f59e0b] border-b-4 '
    const link = 'text-gray-500 border-b-0 hover:border-b-4 hover:border-gray-500'
    const linkStyle = 'inline-block py-4 px-4 mr-1 text-sm font-medium text-center rounded-t-lg hover:border-b-4 dark:text-blue-500 dark:border-blue-500'

    return ( <>
     <div className="antialiased dark-mode:bg-gray-900">
            <div className="w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800">
              <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                  <div className="hidden md:flex">XS</div>
                <svg aria-hidden="true" className="w-6 h-6 md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>                 
                 <button onClick={toggleMenu} className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                      {!menu && <path   fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>}
                      {menu && <path  fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>}
                    </svg>
                  </button>
                </div>
                {/*toggle between flex and flex and hidden*/}
                <nav className={`${menu ? "flex":"hidden"} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
               
                {/*  <Button color="primary" variant="solid" size="lg">xdede</Button> */}
                  <Link href="/">
                  <a  data-color="primary" className={`${linkStyle} ${router.asPath==='/' ? activeLink : link}`} >home</a>
                  </Link>

                  <Link href="/blog">
                  <a className={` ${linkStyle} ${router.asPath==='/blog' ? activeLink : link}`} >portfolio</a>
                  </Link>
                    <ClientOnly>
                    {<Switch color="primary"  checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>}
                    </ClientOnly>
                 
                </nav>
              </div>
            </div>
          </div>
    </> );
}
 
export default NavBar;