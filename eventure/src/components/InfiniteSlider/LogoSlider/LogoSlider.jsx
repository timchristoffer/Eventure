import React from 'react'
import './LogoSlider.css'

import Event1 from '../../../assets/logos/event_1.svg'
import Event2 from '../../../assets/logos/event_2.svg'
import Event3 from '../../../assets/logos/event_3.svg'
import Event4 from '../../../assets/logos/event_4.svg'
import Event5 from '../../../assets/logos/event_5.svg'
import Event6 from '../../../assets/logos/event_6.svg'
import Event7 from '../../../assets/logos/event_7.svg'

const LogoSlider = () => {
  return (
    <div className="logoSlider" style={{ '--width': '100px', '--height': '50px', '--quantity': '7' }}>    
        <div className='logoList'>
            <div className="logoItem" style={{ '--position': 1 }}><img src={Event1} alt=''></img></div>
            <div className="logoItem" style={{ '--position': 2 }}><img src={Event2} alt=''></img></div>
            <div className="logoItem" style={{ '--position': 3 }}><img src={Event3} alt=''></img></div>
            <div className="logoItem" style={{ '--position': 4 }}><img src={Event4} alt=''></img></div>
            <div className="logoItem" style={{ '--position': 5 }}><img src={Event5} alt=''></img></div>
            <div className="logoItem" style={{ '--position': 6 }}><img src={Event6} alt=''></img></div>
            <div className="logoItem" style={{ '--position': 7 }}><img src={Event7} alt=''></img></div>
        </div>
    </div>
  )
}

export default LogoSlider
