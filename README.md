# Frontend Mentor - Intro component with sign up form solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Intro component with sign up form solution started by downloading the starter files, structure the content with HTML and finish the design with CSS Flexbox and complete the form validation with Javascript.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![web](images/127.0.0.1_5500_web.png)
![mobile](images/127.0.0.1_5500_mobile.png)

### Links

- Solution URL: [Solution URL here](https://github.com/ahmedsaliuGit/intro-component-signup)
- Live Site URL: [Live site URL here](https://ahmedsaliugit.github.io/intro-component-signup/)

## My process

- HTML to structure the the content
- CSS to match design spec
- Write validation for the form with Javascript

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt more about event handler in javascript

```js
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  functionToCall(param1, param2);
});
```

### Useful resources

- [MDN](https://developer.mozilla.org/) - I learn how to pass parameter to event listener handler.

## Author

- Website - [Ahmed Saliu](https://www.frontendmentor.io/profile/ahmedsaliuGit)
- Frontend Mentor - [@ahmedsaliuGit](https://www.frontendmentor.io/profile/ahmedsaliuGit)

## Acknowledgments

All thanks goes to the Frontend Mentor for given us a platform like this.
