import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const About: NextPage = () => {
  return (
<div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-700">

<Head>
  <title>Simple-Chat | About</title>
  <link rel="icon" href="/favicon.ico" />
</Head>

<main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

  <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="text-3xl font-bold text-gray-900 dark:text-white">
          Simple-Chat
        </a>
      </div>
      <div className="flex items-center text-2xl">
        <a href="/" className="text-gray-600 dark:text-gray-400">
          Home
        </a>
        <a href="/about" className="text-gray-600 dark:text-gray-400 ml-4">
          About
        </a>
        <a href="https://github.com/DeveloperJosh/Simple-Chat/blob/master/src/server-side/Readme.md" className="text-gray-600 dark:text-gray-400 ml-4">
          Setup
        </a>
      </div>
    </div>
  </nav>
  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
    This page is under construction.
  </h1>
</main>

<footer className="flex h-24 w-full items-center justify-center text-white">
  <a className="flex items-center justify-center gap-2" href="https://simple-chat.xyz/" target="_blank"
    rel="noopener noreferrer">
    Powered by Simple-Chat
  </a>
</footer>
</div>
  )
}

export default About