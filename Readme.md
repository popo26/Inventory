Description:The purpose of the Mini Project is to reinforce skills that have been covered in recent modules.
Select a data set and analyse it using the techniques learned in recent modules. Prepare and present a 10-minute presentation in class.

-----------
Rubric:
- Explanation of the business context behind the dataset
- Quality of presentation - engaging, well structured, not too short or too long
- Quality of the notebook - code well documented, runs correctly


The third mini-project is designed to cover material learned in modules 8 and 9 around using databases. The goal is to create a real-time database after fetching data externally via an API (choose from the list or find your own). The project should follow the MVC model, and ideally include a start-up routine that initially fetches the data and populates the database. All CRUD operations should be included, and demonstrated via Postman or Swagger (a front-end is not required). The database structure should reflect the structure of the data returned from the external API, but does not need to include everything.

Here are some questions to cover during your presentations:
- What was your requirements gathering and design process? Was it useful/successful? --> Please refer to `requirements.drawio.png` in `Planning` folder. Successful with mutiple attempts and reading documentations.
- Give a high level overview of your application and its features --> Please refer to `flowchart.drawerio.png` in `Planning` folder.
- Where does the data come from (external API)? -->[DummyJSON](https://dummyjson.com/) & [Random User Generator](https://randomuser.me/)
- How is this data inserted into your database? --> During the initialization of application. If there are no data, this data gets inserted.
- How is the data structured (into tables or collections)? --> Please refer to `logical_models.draweio.png` in `Planning` folder.
- How is the application code structured (MVC model)? --> Yes. Please refer to my codebase.
- Does your application cover all 4 CRUD operations? How? --> Yes. [Swagger](http://127.0.0.1:8082/api-docs/)
- How might using a database instead of an external API directly benefit an application? --> Less Latency, Available offline, Controlled access.
- How might you extend the features of your application in future? --> Add 1) Delete functionality in products associated to customer & order. 2) Frontend 3) User authentication for admins

## How to Setup Locally & Run

1. Download the source code and unzip it locally.
2. Have [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) installed in your pc if you haven't.
3. Create a new database (Add this name as `DB_NAME` in the  `.env` file at Step3)
4. Open terminal. Go to the root directory of the extracted zip file.
5. Enter this command `npm install`
6. At the root level, create `.env` file. Add below details.
   ```
    DB_NAME=* your db name*
    DB_USER=* your db username, e.g. root*
    DB_PASSWORD=* your db password *
    DB_HOST=localhost
    DB_PORT=3306
    PORT=8082
   ```
7. Back in terminal. Run this command to start. `npm start`
8. You will get a lots of SQL error message. Follow below steps:
9. `dbinit.js` --- Comment line 9 to 12.  This popupates `product` table.
10. `dbinit.js` --- Uncomment line 9. This popupates `customer` table.
11. `dbinit.js` --- Uncomment line 10. This popupates `order` table.
12. `dbinit.js` --- Uncomment line 11. This popupates `customer_product` table.
13. `dbinit.js` --- Uncomment line 12. This popupates `order_product` table.


