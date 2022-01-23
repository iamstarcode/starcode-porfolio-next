import { Button } from '@vechaiui/button'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useToggle from '../hooks/useToggle'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import programmer from '../public/lottie/programmer.json'
export default function Home() {
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-12">
        <div className=" p-4">
          <h2 className="text-left text-md font-bold mt-5">Hi there!</h2>
          <h2 className="text-left text-6xl font-bold mt-5">
            <span className="text-left text-sm ">I'm Bakare Abiola alias! </span>Starcode
          </h2>
          <h2 className="text-left text-xl font-bold leading-8 mt-5">
            I am experienced in developing websites and web applications,
            passionate about both the frontend and the backend of things. When
            am not learning new stuffs you can find me working with Batman and
            friends at night.
          </h2>
          <Button variant="solid" size="lg" color="primary" className="mt-2 px-12 text-bold hover:bg-black">Hire me</Button>
        </div>
        <div className="">
          <Player
            autoplay
            loop
            src={programmer}
            style={{ height: '400px', width: '400px' }}
          >
            <Controls
              visible={false}
              buttons={['play', 'repeat', 'frame', 'debug']}
            />
          </Player>
        </div>
      </div>
    </>
  )
}
