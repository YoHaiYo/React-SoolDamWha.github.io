
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import './data/MainSwiper.json';
import Mswiper from './workroom/SE/Banner'
function King() {
  return (
    <>
      <Header />
      <Mswiper></Mswiper>
      <Subscribe />
      <Footer />
    </>
  );
}

export default King;
