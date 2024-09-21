import React from 'react'

export default function Icons({icon, iconstyle}) {
  return (
    <div className={iconstyle}>
        <iconify-icon icon={icon}></iconify-icon>
    </div>
  )
}
