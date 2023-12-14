import React from 'react'
import Resist from './resist'

function HD() {
    return (
        <header id="hd">
            <div>
                <h1>
                    <a href="#hd">
                        <img src="/public/assets/img/icon/hd_logo.png" alt="로고" />
                    </a>
                </h1>
                <ul id="gnb">
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
