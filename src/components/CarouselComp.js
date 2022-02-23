import { Carousel } from "react-carousel-minimal";
import E1 from "../images/E1.jpg";
import E2 from "../images/E2.jpg";
import E3 from "../images/E3.jpeg";
import E4 from "../images/E4.jpg";
import E5 from "../images/E5.jpg";
import E8 from "../images/E8.jpg";
import E9 from "../images/E9.jpg";
import E11 from "../images/E11.jpg";
import E12 from "../images/E13.jpg";
import E13 from "../images/E15.jpg";

function CarouselComp() {
  const data = [
    {
      image: [E1],
      caption: "San Francisco",
    },
    {
      image: [E2],
      caption: "Scotland",
    },
    {
      image: [E3],
      caption: "Darjeeling",
    },
    {
      image: [E4],
      caption: "San Francisco",
    },
    {
      image: [E5],
      caption: "Scotland",
    },
    {
      image: [E8],
      caption: "Darjeeling",
    },
    {
      image: [E9],
      caption: "San Francisco",
    },
    {
      image: [E11],
      caption: "Scotland",
    },
    {
      image: [E12],
      caption: "Darjeeling",
    },
  ];

  return (
    <>
      <Carousel
        data={data}
        time={2000}
        width="400px"
        height="300px"
        radius="10px"
        slideNumber={true}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
    </>
  );
}

export default CarouselComp;
