import React from 'react'

export default function Airplane({airimg,airalt,airstyle}) {
  return (
    <div className={airstyle}><img src={airimg} alt={airalt} /></div>
  )
}
