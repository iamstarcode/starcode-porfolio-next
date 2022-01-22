import { Button } from '@vechaiui/button'
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import useToggle from '../hooks/useToggle'

export default function Home() {

  return (
    <>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2">
      <div className="leading-7">
        <h2 className="text-left text-md font-bold">Hi there!</h2>
        <h2 className="text-left text-6xl font-bold">I am Starcode</h2>
        <h2 className="text-left text-2xl font-bold">I am a developer and I love people who wear capes</h2>
        </div>
      <div className="">mdbh</div>
    </div>
    </>
  )
}
