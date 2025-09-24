"use client"
import React from 'react'
import InterviewHeader from './_components/InterviewHeader'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { useState } from 'react'

function InterviewLayout({ children }) {
  const [InterviewInfo, setInterviewInfo] = useState();
  return (
    <InterviewDataContext.Provider value={{InterviewInfo, setInterviewInfo}}>
    <div className="bg-gray-100">
        <InterviewHeader />
        {children}
    </div> 
    </InterviewDataContext.Provider>
  )
}

export default InterviewLayout