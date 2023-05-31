<div align="center">
    <h1>
        <img src="./assets/hand-scissors-solid.svg" alt="scissors icon" height = "25px">
        <a href="https://frabjous-nasturtium-7a4a41.netlify.app/">Rock Paper Scissor Lizard Spock</a>
    </h1>
    <h4>
        <b>3rd assignment of <a href="https://www.theodinproject.com" target="_blank">The Odin Project</a></b>
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
<section class="introduction" id="introduction">
    <img src="./assets/preview.png">
    <div class="content">
        <p>In this project, the main objective was to code with Javascript and make a basic rock, paper and scissors game.</p>
        <p>The game could have the rules anyone wanted, so in order to make it more interesting I decided to make a harder version of the game, which is rock, paper, scissors, lizard, spock from The Big Bang Theory show</p>
        <p>With the basic knowledge of JavaScipt, I was able to implement those basic functions to make the game</p>
        <p>Once the game was correctly running, I made a simple UI to create a visual interface so that a user could play against the computer</p>
        <p>The UI consist of five possible choices for the user at the same time that the computer randomly picks one. In the middle of the interface, the user can click on the picture to see the rules. The first player that gets to 5 win the entire game and can restart a new one</p>
        <p>If you're interested in the implementation of this project or the stack used, keep reading!</p>
    </div>
</section>
<section class="container table" id="table-of-contents">
    <h1>Table of contents</h1>
    <ul>
        <li><a href="#table-of-contents">Table of contents</a></li>
        <li>
            <a href="#tech-stack">Tech Stack</a>
            <ul>
                <li><a href="#libraries-used">Libraries used</a></li>
            </ul>
        </li>
        <li><a href="#motivation">Motivation</a></li>
        <li>
            <a href="#detailed-implementation">Detailed Implementation</a>
            <ul>
                <li>
                    <a href="#design">Design</a>
                    <ul>
                        <li><a href="#colors">Colors</a></li>
                        <li><a href="#fonts">Fonts</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#html">HTML</a>
                    <ul>
                        <li><a href="#highlights">Highlights</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#css">CSS</a>
                    <ul>
                        <li><a href="#highlights-1">Highlights</a></li>
                    </ul>
                </li>
                <li><a href="#js">JS</a></li>
            </ul>
        </li>
        <li><a href="#contribute">Contribute</a></li>
        <li><a href="#credits">Credits</a></li>
    </ul>
</section>
<section class="container stack" id="tech-stack">
    <h1>Tech Stack</h1>
    <p>This project follows a basic web development stack:</p>
    <ul>
        <li><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></li>
        <li><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></li>
        <li><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></li>
    </ul>
</section>
<section class="container libraries" id="libraries-used">
    <h1>Libraries Used</h1>
    <p>Since it is a basic game, only pure Javascript was used in this project</p>
</section>
<section class="container motivation" id="motivation">
    <h1>Motivation</h1>
    <div class="content">
        <p>As it was previously mentioned, the main motivation of this project is to keep on completing assignments of <a href="https://theodinproject.com">The Odin Project</a> and to practice on Javascript skills learnt.</p>
        <p>This project is a good motivation to see the level of Javascript one has!</p>
        <p>These kind of projects motivates me a lot, because the course gives the first guidelines to make a basic project, but you are also able to add more features and then having a full project designed from scratch and with your own ideas.</p>
        <p>Moreover, I firstly took this project as a big challenge because I had no idea how to make the pixels painted according to the mouse events. But after reading other's people code, understanding it and searching for more documentation, I found myself capable of doing it. After completing this part, I thought about adding the downloading feature and I was in the same point again of having no clue about how to implement it. After some searches I found a library that could help in this implementation and I finally got it.</p>
        <p>After all, the main motivation at the start of this project was to see basic guidelines with a blank document and thinking about making my own project from scratch. When I finished the project, it motivated me much more seeing me capable of understanding new concepts and applying them to my website.</p>
    </div>
</section>
<section class="container detailed" id="detailed-implementation">
    <h1>Detailed Implementation</h1>
    <section class="design" id="design">
        <h2>Design</h2>
        <div class="content">
            <p>The design is fully responsive, mantaining a grid between the player and the computer all the time</p>
            <p>The title is a copy of the Big Bang Theory show styles, but with the game title. Special mention to the show's logo in the background</p>
            <p>The design is based on one font type and different colors that are also based on the show</p>
        </div>
        <section class="colors" id="colors">
            <h3>Colors</h3>
            <p>Three main colors were used in this project:</p>
            <ul>
                <li>
                    <img src="https://placehold.co/20x20/f1faee/f1faee.png">
                    <span>#f1faee</span>
                    &rarr;
                    background
                </li>
                <li>
                    <img src="https://placehold.co/20x20/e63946/e63946.png">
                    <span>#e63946</span>
                    &rarr;
                    red text
                </li>
                <li>
                    <img src="https://placehold.co/20x20/457b9d/457b9d.png">
                    <span>#457b9d</span>
                    &rarr;
                    blue text
                </li>
            </ul>
        </section>
        <section class="fonts" id="fonts">
            <h3>Fonts</h3>
            <p>The main font used is one with free downloading license that is very similar to the font of The Big Bang Theory merch</p>
            <ul>
                <li><a href="https://www.dafontfree.io/impact-font/">Impact</a></li>
            </ul>
        </section>
    </section>
    <section class="html" id="html">
        <h2>HTML</h2>
        <p>The HTML part of this project consist mainly of different buttons and elements that have unique IDs that will be used for functionality in JS</p>
        <section class="highlights" id="highlights">
            <h3>Highlights</h3>
            <ul>
                <li>Use of unique IDs</li>
                <li>Use of buttons</li>
            </ul>
        </section>
    </section>
    <section class="css" id="css">
        <h2>CSS</h2>
        <p>Used pure CSS to style each element by sleecting them by class or ID.</p>
        <section class="highlights" id="highlights-1">
            <h3>Highlights</h3>
            <ul>
                <li>Use of flexbox and grid for different containers</li>
                <li>Change the content of the buttons according to the size of the screen</li>
            </ul>
        </section>
    </section>
    <section class="js" id="js">
        <h2>JS</h2>
        <div class="content">
            <p>Creating different functions for each functionality. Firstly, the rules are stored in a dictionary where the key is the dominant pair and the values are the one that loses against the key</p>
            <p>Moreover, another dictionary stores the messages that are related to the results, so that in each round the message of the action is shown</p>
            <p>Following these dictionaries, the game can start where the user can make a choice</p>
        </div>
    </section>
</section>
<section clasS="container contribute" id="contribute">
    <h1>Contribute</h1>
    <p>If you liked my project and ideas or you think I could improve it, feel free to support my work or give me any advice by leaving me a message!</p>
</section>
<section class="container credits" id="credits">
    <h1>Credits</h1>
    <div class="images">
        <a href="https://github.com/develoba"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"></a>
        <a href="https://twitter.com/develoba"><img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white"></a>
    </div>
</section>
