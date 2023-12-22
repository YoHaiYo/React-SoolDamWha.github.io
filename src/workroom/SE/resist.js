import React from 'react'
import signcont from '../../data/MainSwiper.json'

function Resist() {
    return (
        <div>
            <ul id="login" className='d-flex resistabs'>
                {
                    signcont.resistko.map((el, idx) => {
                        return (
                            <li key={idx} className='me-5'><a href={el.href}>{el.cont}</a></li>
                        )
                    })
                }





            </ul>
        </div>
    )
}

export default Resist





