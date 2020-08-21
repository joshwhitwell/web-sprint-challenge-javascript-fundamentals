# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

.forEach and .map are both advanced array methods. These two methods are similar in that both will loop over the items in an array and execute a function passed in as a parameter on each item. .forEach and .map both do not mutate the original array, however .map will create a new array as its return value, whereas .forEach will not.

2. Explain the difference between a callback and a higher order function.

A higher order function is a function that receives another function as a callback. A callback, therefore, is a function that is passed into a higher order function as an argument.

3. What is closure?

Closures describes the combination of a function and the lexical environment within which the function is declared. Closure occurs when a function must reaches outside of its own functional scope/lexical context to access data, such as a variable.

4. Describe the four rules of the 'this' keyword.

Global binding - When used in the global scope this will refer to the global object, i.e. the window in the browser or the console/global object in node. If using strict mode in JS, referencing the this keyword in the global scope will return an undefined.

Implicit binding - In implicit binding, the this keyword is bound to the object it is called upon at the time of function invocation, i.e. when a method of an object is invoked, the this keyword will refer to the object to the left of the method when using dot notation.

Explicit binding - In explicit binding, the this keyword is bound explicitly to an object by using the .call, .apply, or .bind methods. When using .call, .apply, or .bind the owner object that this will refer to is passed in as an argument. .Call and .apply will invoke the function immediatley upon being called, .bind will not invoke the function but will return a new function to be called later. .Call and .bind receive arguments individually, whereas .apply receives arguments as an array.

New binding - The new binding allows us to bind methods and values to objects using the this keyword and a constructor function. When using a constructor function and the new keyword to create an instance of an object, the this keyword will refer to the new object that is created and returned by the constructor function.

5. Why do we need super() in an extended class?

Using class syntax, super() and extend function similarly to the Object.create() method and .call method, respectively, in pseudo-classical inheritance and prototypes. The super() method allows us to bind the attributes being passed into the object constructor of a child class, to the parent class. Extend allows the child class objects to inherit the proeprties of the parent class, i.e. it "extends" the properties of the parent class to the child class.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request


