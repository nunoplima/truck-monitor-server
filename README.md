# M-A-N Truck Monitor

ServiceCare On Road Full-Stack Code Exercise implementation proposal

This project is deployed here: [https://truck-monitor-server.herokuapp.com](https://truck-monitor-server.herokuapp.com)<br />
Front-end is deployed here: [https://m-a-n-truck-monitor.herokuapp.com](https://m-a-n-truck-monitor.herokuapp.com/)<br />
Front-end repo here: [https://github.com/nunoplima/truck-monitor-client](https://github.com/nunoplima/truck-monitor-client)<br />

## Run the app locally (in development):
```
yarn install && yarn dev
```
Installs dependecies and runs the app in the development mode.

### Create a DB and add your MySQL credentials
Create locally a MySQL DB and add a file in the root of the project called `.env` with the following:

```
MYSQL_HOST=your host
MYSQL_USER=your username
MYSQL_PW=your password
MYSQL_DB=your DB name
```

### Create the tables and seed them
```
yarn db:create && yarn db:seed
```