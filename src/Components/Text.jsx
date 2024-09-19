import React from 'react'

export default function Text({texts, textstyle,travel,travelstyle}) {
  return (
    <p className={textstyle}>{texts} <span className={travelstyle}>{travel}</span></p>
  )
}
