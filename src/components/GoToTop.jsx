import React, { useState, useEffect } from 'react'
import './GoToTop.css'
import { FaArrowUp } from 'react-icons/fa6'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="go-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="go-to-top-button">
          <FaArrowUp
            size={24}
            style={{ color: 'white' }}
            aria-label="Go to top"
          />
        </button>
      )}
    </div>
  )
}

export default GoToTop
