import Carousel from 'react-bootstrap/Carousel';

import Image from 'next/image';

function CarouselUncontrolled() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/superlogo.svg"
          alt="First slide"
          width={400}
          height={450}
        />
        <Carousel.Caption>
          <h3>It's all about Cruises</h3>
          <p>It means that it's all about YOUR experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/superlogo.svg"
          alt="Second slide"
          width={400}
          height={450}
        />

        <Carousel.Caption>
            <h3>It's all about Cruises</h3>
            <p>It means that it's all about YOUR experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/superlogo.svg"
          alt="Third slide"
          width={400}
          height={450}
        />

        <Carousel.Caption>
            <h3>It's all about Cruises</h3>
            <p>It means that it's all about YOUR experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselUncontrolled;