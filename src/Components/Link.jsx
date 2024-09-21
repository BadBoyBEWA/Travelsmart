import React from 'react'
import Icons from './Icons'

export default function Link({icon, step1, steps, step2, step3, step4, item1, item2, item3, item4, lists, icon2, icon3, icon4, item5, item6, item7}) {
  return (
    <ul className={lists}>
        <div className='iconlist'>
            <div className='plane'>
                <Icons icon={icon}/>
            </div>
        <li><span className={steps}>{step1}</span>{item1}</li>
        </div>
        <div className='iconlist'>
            <div className='plane'>
                <Icons icon={icon2}/>
            </div>
            <li><span className={steps}>{step2}</span>{item2}</li>
        </div>
        <div className='iconlist'>
            <div className='plane'>
                <Icons icon={icon3}/>
            </div>
            <li><span className={steps}>{step3}</span>{item3}</li>
        </div>
        <div className='iconlist'>
            <div className='plane'>
                <Icons icon={icon4}/>
            </div>
            <li><span className={steps}>{step4}</span>{item4}</li>
        </div>
        <div className='iconlist'>
            <li>{item5}</li>
        </div>
        <div className='iconlist'>
            <li>{item6}</li>
        </div>
        <div className='iconlist'>
            <li>{item7}</li>
        </div>
    </ul>
  )
}
