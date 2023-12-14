import React from 'react'
import Resist from './resist'


function HD() {
    return (
        <header id="hd" className='container d-flex justify-content-between border-bottom align-item-center'>
            <div>
                <h1 id='Logo'>
                    <a href="#">
                        <img src="/assets/img/icon/hd_logo.png" alt="로고" />
                    </a>
                </h1>
                <ul id="gnb" className='d-flex'>
                    <li><a href="#">구독</a></li>
                    <li><a href="#">전체상품</a></li>
                    <li><a href="#">베스트</a></li>
                    <li><a href="#">이벤트</a></li>
                    <li><a href="#">Q & A</a></li>
                </ul>
                <Resist></Resist>
            </div>
        </header>

    )
}

export default HD
