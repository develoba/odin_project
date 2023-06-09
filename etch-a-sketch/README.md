<div align="center">
    <h1>
        <img src="./img/paintbrush-solid.svg" alt="Etch-a-sketch icon" height = "25px">
        <a href="https://spectacular-torte-2fa425.netlify.app/">Etch A Sketch</a>
    </h1>
    <h4>
        <b>4th assignment of <a href="https://www.theodinproject.com" target="_blank">The Odin Project</a></b>
    </h4>
    <h4>
        <a href="#tech-stack">Stack</a>
        •
        <a href="#motivation">Motivation</a>
        •
        <a href="#detailed-implementation">Implementation</a>
        •
        <a href="#credits">Credits</a>
    </h4>
    <h4>
        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
    </h4>

</div>

### ![Website Screenshot](./img/preview.png)

This project had the aim of applying basic Javascript knowledge and to learn how to lookup information and how to ask yourself the right questions to search for answers.

After all, I think that you don't need to know every little thing of programming languages and logical concepts; however, it is necessary to know what you're doing and what you want to achieve, and when you don't remember which method or library you should use, just look it up. My best allies in those cases are most frecuently [Google](https://www.google.com), [StackOverflow](https://stackoverflow.com/) and cases studies articles from [Medium](https://medium.com/).

In this project, etch-a-sketch, it is simply an UI where the user can drag the mouse to draw anything and choose different colors. The interface also allows to erase some parts or all the drawing, and to change the size of the pixels of the sketch, going from a grid of 2x2 pixels up to one of 64x64.

Moreover, I thought of an original feature that could be implemented, and I figured that aggregating an option of downloading the drawing as a picture could be interesting!

If you're interested in the implementation of this project or the stack used, keep reading!

# Table of contents
- [Table of contents](#table-of-contents)
- [Tech stack](#tech-stack)
  - [Libraries used](#libraries-used)
- [Motivation](#motivation)
- [Detailed Implementation](#detailed-implementation)
  - [Design](#design)
    - [Colors](#colors)
    - [Fonts](#fonts)
  - [HTML](#html)
    - [Highlights:](#highlights)
  - [CSS](#css)
    - [Highlights:](#highlights-1)
  - [JS](#js)
  - [Responsiveness](#responsiveness)
- [Contribute](#contribute)
- [Credits](#credits)

# Tech stack
This project follows a basic web development stack:

* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  
## Libraries used
Besides the main stack, I used [html2canvas](https://github.com/niklasvh/html2canvas) library in order to capture the grid of the draw and convert it to a canvas element so that it can be downloaded.

# Motivation
As it was previously mentioned, the main motivation of this project is to keep on completing assignments of [The Odin Project](https://theodinproject.com) and to practice on Javascript skills learnt.

These kind of projects motivates me a lot, because the course gives the first guidelines to make a basic project, but you are also able to add more features and then having a full project designed from scratch and with your own ideas.

Moreover, I firstly took this project as a big challenge because I had no idea how to make the pixels painted according to the mouse events. But after reading other's people code, understanding it and searching for more documentation, I found myself capable of doing it. After completing this part, I thought about adding the downloading feature and I was in the same point again of having no clue about how to implement it. After some searches I found a library that could help in this implementation and I finally got it.

After all, the main motivation at the start of this project was to see basic guidelines with a blank document and thinking about making my own project from scratch. When I finished the project, it motivated me much more seeing me capable of understanding new concepts and applying them to my website.

# Detailed Implementation
## Design
Two general designs were made. I created the first one for larger screens like desktops or tablets; while the second design was adapted to smallest screens as phone devices.

The desktop-based design have a main grid that contains the drawing part. On each side, there are different buttons to choose between colors, eraser, size and to download the sketch.

On the other hand, for the mobile design, I thought that it would be a better idea to adapt the drawing to the entire screen. In this case, the buttons are on top and on the right of the screen, above the drawing grid, and the explanatory text of the buttons is replaced by icons.

### Colors
Three colors were used in this project:
* ![#57527e](https://placehold.co/20x20/57527e/57527e.png) `#57527e` &rarr; buttons
* ![#212930](https://placehold.co/20x20/212930/212930.png) `#212930` &rarr; background
* ![#c3c8cd](https://placehold.co/20x20/c3c8cd/c3c8cd.png) `#c3c8cd` &rarr; text
### Fonts
* [Zuka Doodle](https://www.fontspace.com/zuka-doodle-font-f35028) &rarr; free font for title
* [Delicious Handrawn](https://fonts.google.com/specimen/Delicious+Handrawn?query=delici) &rarr; text

## HTML
Basic HTML structure by creating containers for the part of the buttons of colors, another for the grid of the drawing, and a third for the other buttons that allows for more options on the sketch.

### Highlights:
* Use of input of type color to have a button to pick any color
* Use of input of type range to change the size of the grid

## CSS
Used pure CSS to style each element by sleecting them by class or ID. 

### Highlights:
* Use of flexbox and grid for different containers
* Change the content of the buttons according to the size of the screen

## JS
Calls for different functions when clicking a button. Functions for setting the main color and grid size when an evet occurs.

When the user clicks on the download button, an alert appears because the lock button must be clicked firstly. This is done because the lock button change the grid to a canvas element with the [html2canvas](https://github.com/niklasvh/html2canvas) library, and then the download button takes this canvas and download it.

For the drawing part, the function listens when the mouse is over a pixel and if the mouse is clicked while it hovers, then the pixel is painted. A boolean variable is needed in this case, where it turns true when the user clicks on the mouse and false when the mouse is no longer clicked.


## Responsiveness
The final result shows three different functional designs for desktop, tablet and mobile.

<p align="center">
    <img src="./img/tabletPreview.png" width="60%"> 
    <img src="./img/mobilePreview.png" width="30%">
</p>


# Contribute
If you liked my project and ideas or you think I could improve it, feel free to support my work or give me any advice by leaving me a message!

# Credits

[![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/develoba)
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/develoba)


