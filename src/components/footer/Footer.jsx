import React from 'react'
import './footer.css'

const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <div className='footer'>Made with ❤️ in India [🇮🇳] | {year}</div>
  )
}

export default Footer