import React from 'react'
import MainSwiper from './MainSwiper'
import mainbanner from '../../data/MainSwiper.json'

function Banner() {
    return (
        <>
            <MainSwiper datasrc={mainbanner.mainbanner}></MainSwiper>
        </>
    )
}

export default Banner
