import React, { useState } from 'react'
import ProductCard from '../workroom/JY/ProductCard'
import Category from '../workroom/JY/Category'
import { MoreButton } from '../styled/Btns';
import ProductSwiper from '../workroom/JY/ProductSwiper'

function Product(props) {
  const [tap, setTap] = useState(0);
  const handleCategoryClick = (idx) => {
    setTap(idx);
  }

  return (
    <section id="itemTitle" className="mb80 mt80 wrap container" >
      <h2 className="text-center">
        <a href="#closeTop" className="text-decoration-none scrollTop">
          지금 당장 술 담아보기
        </a>
      </h2>
      <Category datasrc={props.datasrc} tap={tap} onCategoryClick={handleCategoryClick}></Category>
      <ProductCard datasrc={props.datasrc} tap={tap} />
      <ProductSwiper datasrc={props.datasrc} tap={tap}></ProductSwiper>
      <MoreButton>더보기</MoreButton>
    </section>
  )
}

export default Product