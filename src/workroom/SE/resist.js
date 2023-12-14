import React from 'react'

function Resist() {
    return (
        <div className=''>
            <ul id="login" className='d-flex'>
                <li><a href="#">로그인</a></li>
                <li><a href="#">회원가입</a></li>

                <li>

                    <select>
                        <option value="en">English</option>
                        <option value="ko" selected>한국어</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}

export default Resist
