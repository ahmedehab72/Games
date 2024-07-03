import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
     <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Game Reviews</h2>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <Link  className="text-gray-400 hover:text-white">Home</Link>
          <Link  className="text-gray-400 hover:text-white">About</Link>
          <Link  className="text-gray-400 hover:text-white">Contact</Link>
          <Link  className="text-gray-400 hover:text-white">Privacy Policy</Link>
        </div>
        <div className="text-gray-400">
          <p>&copy; 2024 Game Reviews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>
}
  