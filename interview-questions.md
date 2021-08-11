# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for model, view, controller. It is a software design pattern that divides program logic into the three interconnected elements model, view, and controller. Rails enforces this pattern or idea by seperating the model, views, and controller into there own subdirectories which allows for separtion between the logic, input, and presentation logic.

  Researched answer: Rails follows a strict MVC pattern which seperates the MVC into there own subdirectories under the app/ directory. With this model Rails also processes request that are passed to it and then redirects it to the appropriate controller based on the URL pattern. As far as the MCV pattern, the model communicates with the controller and mainly handles the data related logic such as interactions with the database. The view is the actual view of the application, it is what the end user sees. It consists of HTML/CSS and in Rails case, a user can actual embed Ruby into the HTML to render data passed from the controller. The controller takes in user input as well as processess request to the database, it gets data from the model and passes it to the view.

2. What is a relational database? Are there other kinds of databases?

  Your answer: Relational databases is a type of database that has access to data that is related to one another. A key aspect to relational databases is that it organizes data into tables of columns and rows with in which there is a unique key that identifies each row.

  Researched answer: Relational databases are databases in which the collections of data and items have a pre-defined relationship between them through a unique key based on the model. If I am explaining this right realtional database allow you to have seperate tables for information but at the same time it can relate it to another table that the first table has relatable data to. For example if there is a table of students and another table for all classes a school has to offer then using a realtional database we can access data to find out which students are apart of which class based on the unique key. 

3. What is object-relational mapping?

  Your answer: Not really sure. To be honest I had to look this information up to form an answer. Object-relational mapping is a way to convert data between two incompatible type systems using OOP languages. It appears to take the data from a database using SQL and converts into arrays or vice versa.

  Researched answer: ORM can be defined as a way to store, retrieve, update, and delete data from a realtional database from an OOP language. ORM provides a way to manage the translation between the OOP and the database. It handles the data to translates it from an object or class to a table within the database and vice versa.

4. What is a gem?

  Your answer: A gem is a dependency in ruby.

  Researched answer: A gem is a module or library that can be installed on any project that you create. It is also a ruby package manager but more importantly the extend or modify the functionality of a Ruby application they can help automate taks and speed up your work. They are helpful because the you can package a projecct that has a lot of resuable code that a user might want to be able to redistriubte to another project to reduce the duplication of code and make code reusable.

5. What are primary keys? Why are they important?

  Your answer: Primary keys are unique identifers for a relational database.

  Researched answer: A primary key is a special databse id that uniquely identifies or relates the data between one table to another within a relational database. It ties common values to pull data for specific related data that each of the tables share. Going back to the example earlier betweeen student classes, there are many students and many classes. With a unique id associated to each table a user can find out which student is apart of which class based on their unique keys.

## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routing is a set of standards used in many different languages to create efficient, reusable routes. It aims to map HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions.

2. JSON: JavaScript Object Notation is a text format for storing and transporting data using key and value pairs

3. ERB: Allows a user to Embeds Ruby code into a HTML to render data from the controller.

4. Params: Refers to the parameters being passed to the controller from a GET or POST request.

5. API: Application Programming Interface is an interface that allows two different applications to talk to each other. 
