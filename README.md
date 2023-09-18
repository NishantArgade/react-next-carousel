# React Next Carousel

[![npm version](https://badge.fury.io/js/react-next-carousel.svg)](https://badge.fury.io/js/react-next-carousel)
[![Build Status](https://travis-ci.org/leandrowd/react-next-carousel.svg?branch=master)](https://travis-ci.org/leandrowd/react-next-carousel)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fleandrowd%2Freact-responsive-carousel.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fleandrowd%2Freact-next-carousel?ref=badge_shield)

Typescript Supported Powerful, lightweight and fully customizable carousel component for React.js and Next.js apps.

### Important

I don't have any time available to keep maintaining this package. If you have any request, try to sort it within the community. I'm able to merge pull requests that look safe from time to time but no commitment on timelines here. Feel free to fork it and publish under other name if you are in a hurry or to use another component.

### Features

- Responsive
- Mobile friendly
- Swipe to slide
- Server side rendering compatible
- Keyboard navigation
- Support React.js and Next.js with Typescript
- Custom animation duration
- Auto play w/ custom interval
- Supports images, videos, text content or anything you want. Each direct child represents one slide!
- Supports external controls
- Highly customizable:
  - Custom thumbs
  - Custom arrows
  - Custom indicators
  - Custom status
  - Custom animation handlers

### Demo

<http://leandrowd.github.io/react-responsive-carousel/>

Check it out these [cool demos](http://react-responsive-carousel.js.org/storybook/index.html) created using [storybook](https://storybook.js.org/).

### Installing as a package

`yarn add react-next-carousel`

### Usage

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-next-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-next-carousel';

class DemoCarousel extends Component {
   const slides = [
    "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
    "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g",
    "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU",
   ]
    render() {
        return (
            <Carousel slides={slides}/>
        );
    }
});

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
```

### Props

| Name     | Value     | Description                                                                                                |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| autoPlay | `boolean` | Change the slide automatically based on `interval` prop.                                                   |
| interval | `number`  | Interval in milliseconds to automatically go to the next item when `autoPlay` is true, defaults to `2000`. |

| showCarouselArrow | `boolean` | Enable previous and next arrow, defaults to `true`. |
| showIndicators | `boolean` | Enable indicators to select items, defaults to `true`. |
| showThumbs | `boolean` | Enable thumbs, defaults to `true`.  
| thumbWidth | `number` | Width of the thumb, defaults to `80`.  
| width | `number` or `string` | The width of the carousel, defaults to `100%`.
