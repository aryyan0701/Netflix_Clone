import React from 'react'

export default function footer() {
  return (
    <div>
      <footer className="bg-zinc-800  text-white p-8">
        <p className="text-center mb-4">&copy; 2023 Netflix Clone</p>
        <div className="flex justify-center mb-4">
          <a href="/" className="mr-4 hover:underline">
            Terms of Use
          </a>
          <a href="/" className="mr-4 hover:underline">
            Privacy Policy
          </a>
          <a href="/" className="hover:underline">
            Cookie Preferences
          </a>
        </div>
        <div className="flex justify-center">
          <a href="/" className="mr-4 hover:underline">
            Help Center
          </a>
          <a href="/" className="mr-4 hover:underline">
            Gift Cards
          </a>
          <a href="/" className="mr-4 hover:underline">
            Jobs
          </a>
          <a href="/" className="hover:underline">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  )
}
