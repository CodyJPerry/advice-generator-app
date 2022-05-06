# Advice generator app

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

Welcome to my Advice Generator App! This app shows a new piece of advice in the quoted text each time the "dice button" is clicked using the [Advice Slip API](https://api.adviceslip.com/).

Each time the dice button is clicked a new fetch request will be made to update the state in the app. Once it updates using conditional rendering it will display the new data on the frontend.

You can view the live version here: https://cperry24.github.io/advice-generator-app/


## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

How to render a component based upon the `window.innerWidth` using the `useEffect` hook with a custom "resize event listener". Throughout this project I was able to learn more about ensuring to clean up our event listeners so that we don't keep adding new ones each time the component mounts.


```
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // clean up our resize event
    return () => window.removeEventListener('resize', handleResize)

  })
