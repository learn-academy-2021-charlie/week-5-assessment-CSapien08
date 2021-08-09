# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
- SQL is a domain specific language used to communicate with databases. As a user you can update the databcase or retrieve data from a database by using keywords such as SELECT, WHERE, ORDERBY, and many others.

2. What the PostgreSQL query that would return all the content in a particular table?
- If I am understanding the question correctly, I beleve you are looking for the select alll option which is an asterisk. An example of this would be SELECT * (name of table).

3. What is the command to create a new Rails application with a PostgreSQL database?
- $ rails new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
- $ rails generate model Meals breakfase:string lunch:string dinner:integer

5. What is a migration? Why would you use one?
- Migrations are an important part of rails that allows users to update their schema and make changes to their database by using the rails command. As a user you would need one to update or make changes to the databse.

6. What is the command to generate a migration file?
- $ rails generate migration (name of what your trying to accomplish)

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
- The model name is singular and PascalCase and plural and snake_case for the table

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
- The schema file is a representation of the database and no it cannot be modified directly, it cannot be modified directly because it could mess up the database and all of the data inside of it.

9. What is the Rails console?
- The rails console allows a user to interact with the rails application from the command line. It allows a user to perform CRUD operations on a via the command line.

10. What is the Rails console command to see all the content in a particular table?
- table.all
