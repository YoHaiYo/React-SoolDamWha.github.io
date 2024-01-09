import React, { useState } from 'react'
// import Resist from './resist'
// import gnbdb from '../../data/gnb.json'






function HD(props) {

    return (
        <header id="hd" className='fixed-top bg-white border-bottom'>
            <div className='text-center container-lg'>
                <h1 id='Logo'>
                    <a href="/">
                        <img src="/assets/img/icon/hd_logo.png" alt="로고" />
                    </a>
                </h1>
                <ul id="gnb" className='d-flex justify-content-center'>
                    {
                        props.datasrc.map((v, i) => {
                            return (
                                <li key={i}><a href={v.href}>{v.gnbtext}</a></li>
                            )
                        })
                    }


                </ul>


                {/* <Resist></Resist> */}


            </div>
        </header>


    )
}

export default HD
