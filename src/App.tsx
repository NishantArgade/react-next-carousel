import Carousel from "./carousel";

const App = () => {
  const slides = [
    "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
  ];

  return (
    <Carousel
      slides={slides}
      carouselWidth="40rem"
      thumbWidth="6rem"
      // autoSlide
      // effect="fade"
      autoSlideInterval={2000}
      controllArrowSize={30}
    />
  );
};

export default App;
