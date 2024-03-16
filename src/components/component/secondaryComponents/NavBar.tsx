import { Button } from '@/components/ui/button'
import { MessagesSquare, Settings } from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-semibold">Products</h1>
    <div className="flex gap-3">
      <div className="relative">
        <input
          className="appearance-none border-2  pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-xl  w-full py-2  text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search for..."
        />

        <div className="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <Button variant="outline">
        <MessagesSquare />
      </Button>
      <Button variant="outline">
        <Settings />
      </Button>
    </div>
  </div>
  )
}

export default NavBar