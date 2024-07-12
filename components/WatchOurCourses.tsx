'use client'

import React, { useState, FormEvent, ChangeEvent } from "react"

function WatchOurCourses() {
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError('')  
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!email) {
      setError('Email cannot be empty')
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
    } else {

      console.log('Subscribed with email:', email)
      setEmail('')  
      setError('')  
    }
  }

  return (
    <div className="bg-secondary w-full py-40 px-4 ">
      <div className="flex flex-col text-center justify-center items-center">
        <p className="text-primary text-[14px] pb-8 font-bold">Newsletter</p>
        <h1 className="text-[24px] text-neutral font-bold mb-4">Watch Our Courses</h1>
        <p className="text-[#737373] lg:max-w-[500px]">Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics </p>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-20 items-center">
          <div className="flex flex-col lg:flex-row gap-y-8">
            <input
              placeholder="Your Email"
              className="w-[380px] rounded-md  lg:w-[688px] h-[58px] px-4"
              type="email"
              value={email}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn bg-primary px-[40px] h-[58px] rounded-md text-white flex items-center justify-center">Subscribe</button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default WatchOurCourses