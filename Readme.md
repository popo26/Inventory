Description:The purpose of the Mini Project is to reinforce skills that have been covered in recent modules.
Select a data set and analyse it using the techniques learned in recent modules. Prepare and present a 10-minute presentation in class.

-----------
Rubric:
- Explanation of the business context behind the dataset
- Quality of presentation - engaging, well structured, not too short or too long
- Quality of the notebook - code well documented, runs correctly


The third mini-project is designed to cover material learned in modules 8 and 9 around using databases. The goal is to create a real-time database after fetching data externally via an API (choose from the list or find your own). The project should follow the MVC model, and ideally include a start-up routine that initially fetches the data and populates the database. All CRUD operations should be included, and demonstrated via Postman or Swagger (a front-end is not required). The database structure should reflect the structure of the data returned from the external API, but does not need to include everything.

Here are some questions to cover during your presentations:
- What was your requirements gathering and design process? Was it useful/successful?
- Give a high level overview of your application and its features
- Where does the data come from (external API)? -->[DummyJSON](https://dummyjson.com/) & [Random User Generator](https://randomuser.me/)
- How is this data inserted into your database? --> During the initialization of application. If there are no data, this data gets inserted.
- How is the data structured (into tables or collections)?
- How is the application code structured (MVC model)? --> Yes. Please refer to my codebase.
- Does your application cover all 4 CRUD operations? How?
- How might using a database instead of an external API directly benefit an application? --> Since data is stored in database, it requires less traffic and bandwidth to retrieve data.
- How might you extend the features of your application in future?
