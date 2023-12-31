import React from 'react'
import subscribecard from './subscribecard.module.scss';


function SubscribeCard(props) {
  return (
    <>

    {
      props.datasrc.map((el, idx)=> {
        return (
          <div className="subscribe-wrap" key={`div${idx}`}>
          <a href="" className={subscribecard.ssh}>
            {/* <img className='rounded-circle' src="/assets/img/cheongju/cheongju01.jpg" alt="cheongju01" /> */}
            <img className='rounded-circle' src={el.imgsrc} alt="" />
            <p className="box-name">{el.nm}</p>
          </a>
        </div>
        )
      })
      
    } 

        
    </>
  )
}

export default SubscribeCard
