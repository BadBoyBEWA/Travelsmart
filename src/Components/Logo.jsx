import React from 'react'

export default function Logo({logoimg, logotx, logosec}) {
  return (
    <div className={logosec}>
        <img src={logoimg} alt={logotx} />
    </div>
  )
}
