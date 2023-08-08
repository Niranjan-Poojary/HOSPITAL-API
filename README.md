# HOSPITAL-API

A Server-side API built on NodeJS and MongoDB for hospital doctors to keep track of their patients with Covid19 test reports.

# Features
1. Register Doctor with username, password.

2. Login(authenticate) User using passport-local and returns a jwt-token to be to access(authorize) protected routes.

3. After logging-in the doctor can do various things such as : register patient, generate a report of patient, view all reports of a particular patient, filter all the reports by status.

4. Generation of report(protecte by jwt) : A doctor has to enter enter the status for a particular patient and can generate the report according to it.

5. View all reports of a patient(protected by jwt) : A doctor can view all the reports of a patient.

6. View all the reports filtered by status(protected by jwt) : A doctor can view all reports present in database filtered by status.

# How to run and install

1. clone the project

2. Start by installing npm and mongoDB if you don't have them already.

3. Run the Mongo Server.

4. start installing postman app
 
5. Test the Hospital API using Postman app

6. run the following command

   npm init

   npm install express body-parser nodemon

   npm install mongoose

#How to use API

Base URL:http://localhost:8000

/doctors/register(POST): Register the doctor using name and password.

/patients/register(POST): Register patient using name.

/patients/:id/create_report(POST): create the report of the particular patient.

/patients/:id/all_report(GET): get the all report of particular patient.

/reports/status(GET): fetch the report with particular status.
