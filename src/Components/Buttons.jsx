import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons({butstyle, buttx, butlink, triplink}) {
  return (
    <button className={butstyle}> <Link to={triplink} className={butlink}>{buttx}</Link></button>
  )
}

