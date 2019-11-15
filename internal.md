
# Web Development Team
Welcome to the web-dev internal site for Cornell Hyperloop! Although the team is small, it is important we stay organized and consistent throughout our development process, and this site will be updated with relevant information on how we will be executing on that goal.

## Getting Started
    
Whether or not you are new to the team, it's best to review the best practices we will be holding ourselves to this year. We will add to these rules as the semester goes on as we figure out what works and what doesn't work.
  
### Commandments of Web Development
1. **Ask Clarifying Questions**

    Ask questions before developing! Should anything be unclear ask in the slack for clarification. Although we will likely revert code multiple times throughout the year, we want to avoid this!

2. **Be Mindful of Design Scope** 

    CSS is _cascading_ for a reason. Colors, styles, classes that will be repeatedly used should be put in the appropriate scope, be it global.css or ::root. As for javascript, things that are consistent across different pages such as headers, footers, or background resizing should be handled by a globally scoped js file. 
    
    Remember the browser assigns priority to assets-by-line so the order of stylesheets and scripts follows the same structure in every page

    ```
    <head>
        ...

        <link rel="stylesheet" href="css/global.css">
        <link rel="stylesheet" href="css/page-specific-stylesheet.css">

        <script script src="js/global.js">
        </script>

        <script script src="js/page-specific-scripts.js">
        </script>
        
        ...

    </head>
    ```
3. **Avoid Magic Numbers** if you're hardcoding a number to some parameter that is used in your code, set that value to a `var` or `const` if applicable.

4. **Follow naming conventions** , Globally scoped variables should be declared at the top of a script file and initialized elsewhere. We camelCase our variable names and call any variable referencing a element on the DOM {nameOfComponent}Element.

    `const pageHeaderElement = document.getElementByID('myheader')`

### Expectations
As a member of the web-dev team you are generally removed from the timeline of the pod-focused subteams. Despite this, there are some expectations we have for you for the benefit of the team and for _your_ own personal development.

1. **Communication over everything.** We use slack to communicate both because it keeps us organized via channels but because the Business Lead (Frances) and Team Lead (Robby) want to keep track of what we are doing. 
    
    Connect to `#website` to send updates and `#webdev19` to send messages that make more sense to keep interally within our subteam such as absences, chit-chat or memes.

2. **Document your work.** I am responsible for giving you all grades, as as much as I want to give you a high grade, the Team and the department will want me to give reasons for giving you a great grade. Git commit histories will be used as part of this documentation, but since a lot of work wont be necessarily on the repo, everyone should be keeping a log of what they do in 1,2 week intervals.

3. **Take Ownership.** Time flies quickly, especially as an engineer and sooner or later the team's leads will have graduated. Take ownership in your work, the codebase, and the projects we scope out. You'll do your present _and_ future team a huge service by enriching our team with knowledge.

### Crash Course List
1. **Git sources control.** Yes, pushing pulling and comitting should be second nature to you at this point but review [commit squashing](https://medium.com/@slamflipstrom/a-beginners-guide-to-squashing-commits-with-git-rebase-8185cf6e62ec), branching, [merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging), and [rebasing](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase). 

2. **HTML Semantics.** As of right now, the hyperloop website is a [statically hosted website](https://techterms.com/definition/staticwebsite) on Github Pages (Although we have a dynamically functional project scoped for the future, details to come). Because what we write won't be compiled into a div soup like some JS libraries may do on dynamic sites, our source code must be readable as a standalone <HTML> document. We _must_ adhere to the [semantics of HTML5](https://www.w3schools.com/html/html5_semantic_elements.asp) to best communicate our work. Our job will be rewriting and/or editing old code to adhere to this standard.

3.  **CSS** This is the bread-and-butter of what we do and everyone needs to be well versed on the basics of styling. However, there's a lot more to add to your CSS toolbelt.
    1. [CSS Selectors](w3schools.com/cssref/css_selectors.asp)
    2. [CSS Variables](https://una.im/local-css-vars/)
    3. [CSS Specificity](http://qnimate.com/dive-into-css-specificity/)
    4. When to use style classes vs style id's.

4. **Javascript, all of it.** Just kidding, how people use Javascript changes every month and it doesn't really help to know all of it but everyone must prioritize learning how to do things with vanilla ES6 Javascript, we won't be using JQuery to this end.
    1. [What is ES6](https://www.w3schools.com/js/js_es6.asp) and what features does it offer (variable scopes, arrow functions, etc.).
    2. [What is the DOM](https://www.w3schools.com/js/js_htmldom.asp) and what are the methods Javascript provides to manipulate it:
    
        | methods | attributes |
        | :-: | :-: |
        | getElementByID()|  document |
        | getElementsByClassName() |  window |
        | onload() | children |
        | onscroll() | innerHTML  |
        | getBoundingClientRect() | innerText  |
        | getElementsByTagName() |  onpointerover |
        | addEventListener()   | onkeydown |
        | insertAdjacentElement() | innerHeight |
        | insertAdjacentHTML() | innerWidth |
        | |     style |

### Figma 

As discussed previously we will be using Figma to brainstorm designs & layouts and prototype them. As this is quite new to me I don't have an idea of what works/doesn't work yet. I feel as though this will become apparent as soon as we get started on the platform. In the meantime, utilize these resources and I will share the Figma project during the next g-body meeting.


1. [Youtube - DesignCourse](https://www.youtube.com/watch?v=3q3FV65ZrUs) This guy talks about a lot of relevant frontend stuff, so this is a good resource for everything in general and you should consider subscribing to him.

1. [Figma Website](https://help.figma.com/article/116-getting-started) 

1. [Youtube - Figma Channel](https://youtu.be/T0kRCTOX0zY?t=600) 

### Markdown
* Not urgent, and not hard to learn- but this will come in useful when we want to document our work on the repo and don't want to create a webpage for it, like this. You can learn a lot from a straight-forward tutorial [here](https://www.markdowntutorial.com/).

Enjoy, see you all on monday!

## Notes October 21, 2019
Hotfixes needed:
1. Links on pages
2. Resizing on page






<!-- 
### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc -->