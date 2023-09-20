# React.js Next.js Carousel

[![npm version](https://badge.fury.io/js/react-next-carousel.svg)](https://www.npmjs.com/package/reactjs-nextjs-carousel?activeTab=versionsl)
[![Build Status](https://travis-ci.org/leandrowd/react-next-carousel.svg?branch=master)](https://travis-ci.org/leandrowd/react-next-carousel)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fleandrowd%2Freact-responsive-carousel.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fleandrowd%2Freact-next-carousel?ref=badge_shield)

Typescript Supported Powerful, lightweight and fully customizable carousel component for React.js and Next.js apps.

### Slide Animation Effect

![GIF Animation](/public/slide.gif)

### Fade Animation Effect

![GIF Animation](/public/fade.gif)

### Important

I don't have any time available to keep maintaining this package. If you have any request, try to sort it within the community. I'm able to merge pull requests that look safe from time to time but no commitment on timelines here. Feel free to fork it and publish under other name if you are in a hurry or to use another component.

### Features

- Responsive
- Mobile friendly
- Server side rendering compatible
- Support React.js and Next.js with Typescript
- Custom animation duration
- Auto play w/ custom interval
- Supports images, videos, text content or anything you want. Each direct child represents one slide!
- Highly customizable:
  - Custom thumbs
  - Custom arrows
  - Custom indicators
  - Custom slides
  - Custom animation handlers

### Installing as a package

- `npm install reactjs-nextjs-carousel`.
- `yarn add reactjs-nextjs-carousel`.

### Usage

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel  from 'reactjs-nextjs-carousel';

class DemoCarousel extends Component {
   const slides = [
    "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
   ]
    render() {
        return (
            <Carousel slides={slides} autoSlide={true} carouselWidth={"30rem"} effect="fade" autoSlideInterval={3000}/>
        );
    }
});

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

```

### Props

| Name              | Value             | Description                                                             |
| ----------------- | ----------------- | ----------------------------------------------------------------------- |
| slides            | `array`           | Array of image url.                                                     |
| carouselWidth     | `string`          | The width of the carousel, defaults to `20rem`.                         |
| thumbWidth        | `string`          | The width of the carousel, defaults to `3rem`.                          |
| autoSlide         | `boolean`         | Change the slide automatically, default to `false`.                     |
| autoSlideInterval | `number`          | Change the slide automatically based on `interval` , default to `2000`. |
| effect            | `slide` or `fade` | Animation for change slides.                                            |
| controllArrowSize | `number`          | Width of the Arrows, defaults to `20`.                                  |
| indicatorSize     | `string`          | The size of the indicator, defaults to `0.40rem`.                       |
| showControlArrow  | `boolean`         | Show carousel Arrow, defaults to `true`.                                |
| showIndicators    | `boolean`         | Show carousel Arrow, defaults to `true`.                                |
| showThumbs        | `boolean`         | Show carousel Arrow, defaults to `true`.                                |
