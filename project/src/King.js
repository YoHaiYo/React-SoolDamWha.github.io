import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import axios from 'axios'

// data
import datasrc from './data/sdhdata.json'

// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Best from './section/Best';
import Product from './section/Product';
import Review from './section/Review';
import Contact from './section/Contact';
import MainSwiper from './workroom/SE/MainSwiper';
import HD from './workroom/SE/Hd';

// Page
import AllPage from './page/Allpage';
import Event from './page/Event';
import Qna from './page/Qna';
import Subscribepage from './page/Subscribepage';
import LanguageSwitcher from './LanguageSwitcher';

// import LanguageSwitcher from './LanguageSwitcher'; // 새로 추가한 부분

const King = () => {

  const [kingData, SetKingData] = useState([]);
  const [language, setLanguage] = useState('ko'); // 초기 언어는 'ko'
  const [table, setTable] = useState("productinfo");

  const dataFetch = async () => {
    try {
      const result = await axios.get(`/store/${table}`);
      SetKingData([...result.data]);
      console.log("KING Fetching", result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    dataFetch();
  }, [table])

  console.log("Check DB", kingData)


  // changeLanguage : useState로 작성된 setLanguage로 언어선택 텍스트를 바꿔주는 함수
  // language : 각 컴포넌트에 뿌리는 datasrc의 객체접근을 ko,en 으로 변경해주는 변수
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  return (
    <>
      {/* 네비 */}
      {/* 언어 변경 컴포넌트 추가 */}
      {/* <LanguageSwitcher changeLanguage={changeLanguage} /> */}
      {/* <Header datasrc={datasrc[language].header} /> */}


      <HD datasrc={datasrc[language].header.gnb} />
      <Routes>
        <Route path='/'
          element={<>
            <MainSwiper datasrc={datasrc[language].header.mainbanner} />
            <button className="" onClick={() => { setTable("productinfo_en") }}>언어변경</button>
            <Subscribe datasrc={datasrc[language].subscribe} />
            <Best datasrc={datasrc[language].bestswiper} />
            {/* <Product datasrc={datasrc[language].product}></Product> */}
            <Product datasrc={kingData}></Product>
            <Review />
            <Contact />
          </>}>
        </Route>

        <Route path='/subscribe'
          element={<>
            <Subscribepage datasrc={datasrc[language].subscribepage}></Subscribepage>
          </>}>
        </Route>

        <Route path='/all' element={<AllPage datasrc={datasrc[language].product} />}></Route>

        {/* best페이지는 임시로 all페이지 쓰기 */}
        <Route path='/best' element={<AllPage datasrc={datasrc[language].product} />}></Route>

        <Route path='/event'
          element={<>
            <Event datasrc={datasrc[language].header.mainbanner}></Event>
          </>}>
        </Route>

        <Route path='/qna'
          element={<>
            <Qna datasrc={datasrc[language].qna} />
          </>}>
        </Route>

      </Routes>

      <Footer datasrc={datasrc[language].footer} />
    </>
  );
};

export default King;