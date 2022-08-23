import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import useWindowSize from '../Elements/Dimensions';

function Nfts() {
  const nftList = [
    {
      auth: 'Extwoo WarDaddy',
      authRole: 'Creator',
      authImage: '/images/extwoo.png',
      title: 'Bored Apedriod Explorer in the Konnectverse',
      image: '/images/bored.png',
      price: '12.52 ETH',
      link: '/',
    },
    {
      auth: 'Debby Luisana',
      authRole: 'Creator',
      authImage: '/images/debby.png',
      title:
        'Floral driud drapes floating  on river stynix of the astral plane',
      image: '/images/floral.png',
      price: '2.02 ETH',
      link: '/',
    },
    {
      auth: 'Johan Lives',
      authRole: 'Creator',
      authImage: '/images/johan.png',
      title: 'Ultimate Freelancer from earth 68 solar multiverse',
      image: '/images/ultimate.png',
      price: '8.82 ETH',
      link: '/',
    },
    {
      auth: 'Feiliz Waterson',
      authRole: 'Creator',
      authImage: '/images/feiliz.png',
      title: 'Soul of the Aesir and Yournmagndu Tree of Life',
      image: '/images/bored.png',
      price: '40 ETH',
      link: '/',
    },
    {
      auth: 'Extwoo WarDaddy',
      authRole: 'Creator',
      authImage: '/images/extwoo.png',
      title: 'Bored Apedriod Explorer in the Konnectverse',
      image: '/images/bored.png',
      price: '12.52 ETH',
      link: '/',
    },
    {
      auth: 'Debby Luisana',
      authRole: 'Creator',
      authImage: '/images/debby.png',
      title:
        'Floral driud drapes floating  on river stynix of the astral plane',
      image: '/images/floral.png',
      price: '2.02 ETH',
      link: '/',
    },
    {
      auth: 'Johan Lives',
      authRole: 'Creator',
      authImage: '/images/johan.png',
      title: 'Ultimate Freelancer from earth 68 solar multiverse',
      image: '/images/bored.png',
      price: '8.82 ETH',
      link: '/',
    },
    {
      auth: 'Feiliz Waterson',
      authRole: 'Creator',
      authImage: '/images/feiliz.png',
      title: 'Soul of the Aesir and Yournmagndu Tree of Life',
      image: '/images/bored.png',
      price: '40 ETH',
      link: '/',
    },
  ];
  const { width } = useWindowSize();
  const isSmall = width < 768;
  const isMedium = width < 1200;
  return (
    <section className="nfts">
      <Container>
        <h2>
          Top Trending NFTs <span>Coming Soon</span>
        </h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={24}
          slidesPerView={isSmall ? 1.3 : isMedium ? 2.5 : 3.5}
          navigation>
          {nftList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="swipe-content">
                <div className="auth">
                  <div className="auth-image">
                    <Image
                      src={item.authImage}
                      alt=""
                      width={54}
                      height={54}
                      objectFit="contain"
                    />
                  </div>
                  <div className="auth-info">
                    <h6>{item.authRole}</h6>
                    <p>{item.auth}</p>
                  </div>
                </div>
                <div className="swipe-body">
                  <div className="swipe-image">
                    <Image
                      src={item.image}
                      alt=""
                      width={352}
                      height={280}
                      objectFit="cover"
                    />
                  </div>
                  <div className="swipe-title">{item.title}</div>
                </div>
                <div className="swipe-footer">
                  <div className="bid">
                    <h6>BID</h6>
                    <p>{item.price}</p>
                  </div>
                  <div className="view">
                    <span>Coming Soon</span>

                    <a className="btn-1">View NFT</a>

                    {/* <Link href={item.link}>
                      <a className="btn-1">View NFT</a>
                    </Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default Nfts;
