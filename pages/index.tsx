import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
<div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-700">

<Head>
  <title>Simple-Chat | Home</title>
  <link rel="icon" href="/favicon.ico" />
  <meta name="theme-color" content="#01a0e9" />
    <meta
      name="description"
      content="Simple-Chat is a simple chat application built with Node.js and Socket.io."
    />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  <h1 className="text-6xl font-bold text-white">
    Welcome to{' '}
    <a href="https://github.com/DeveloperJosh/Simple-Chat">
      Simple-Chat
    </a>
  </h1>

  <p className="mt-3 text-2xl text-white">
    A simple chat app built with Nodejs and Socket.io
  </p>
  <div className="flex flex-col items-center justify-center mt-10">
    <a href="https://github.com/DeveloperJosh/Simple-Chat/blob/master/src/server-side/Readme.md" className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">
      Get Started
    </a>
  </div>

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

export default Home