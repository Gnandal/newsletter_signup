# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Your users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
   - The field is left empty
   - The email address is not formatted correctly

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Github Repo](https://github.com/Gnandal/newsletter-sign-up-with-success-message-main)
- Live Site URL: [Demo](https://gnandal.github.io/newsletter-sign-up-with-success-message-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-First Flow
- JavaScript

### What I learned

Here are what I learned :

- Style unorder list (ul) :
```css
ul {
  list-style: url("./assets/images/icon-list.svg");
}
```

- Email validation :
```js
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
```

## Author

- Website - [GNANDAL  ELISEE](https://gnandal-elisee.vercel.app)
- Frontend Mentor - [@Gnandal](https://www.frontendmentor.io/profile/Gnandal)
