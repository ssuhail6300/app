# Getting Started with Hiringwalla App

As a recruitment process, it requires multiple stages and email communications with proper scheduling among the candidate and the interviewer.

Even feedbacks are shared in the email, searching of any candidate's data in email is cumbersome.
so this application will deliver those information and scheduling can be done at one place,
which will leverage interviewers and recruitment panels workload for maintaining this data.


# Automated Recruitment Process

## Test Innovators App

| Package                  | Description                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| hiringwalla/app          | Front-end React app
| \*.hiringwalla/src       | Back-end source code built on spring boot, JPA, H2 database, lombok

### starting spring boot application

Navigate till this hiringwalla folder and start give the following command
the maven `spring-boot:run` build will start the server and talks to client on localhost:8080.

```shell
$ mvnw spring-boot:run
```

### Installing nodejs and other dependencies

Move to app folder inside hiringwalla and give following command
```shell
$ npm install
$ yarn add bootstrap@4.1.3 react-cookie@3.0.4 react-router-dom@4.3.1 reactstrap@6.5.0
```

### starting react app

After starting the spring boot application which is now ready to process the requests, 
we can start the actual front-end react app which listens at localhost:3000
Move to app folder inside hiringwalla and give following command
```shell
$ yarn start
```
