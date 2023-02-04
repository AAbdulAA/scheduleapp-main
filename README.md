# Getting started

The project may work in various degrees in various NodeJS versions, but the project is currently developed for NodeJS version 16.

As a first step when setting up the project you will need to install all dependencies. You might not be prompted by the system to run npm audit fix everytime, but if you are please do so:

```bash
cd admin && npm install && npm audit fix && cd .. && cd schedule-data-service && npm install && npm audit fix && cd .. && npm install && npm audit fix
```

Next you will want to build the application (our admin dashboard built by utilising React-Admin) for production:

```bash
cd admin && npm run build && cd ..
```

Nodemon is a dev-dependency since 2023-01-27 but you can install it manually, and globally using:
```bash
npm install -g nodemon
```

To get the application up and running, please use this command:

```bash
npm run dev
```


To rebuild and restart, do this...  
CTRL+C twice in the terminal to stop the server, then...

```bash
clear && cd admin && npm run build && cd .. && npm run dev
```

## Endpoints

Entry point is schedule view at `/`

Login is at `/login.html`

Admin pages are at `/admin` _but will only work if admin folder is built, see above_

REST API Description can be found at `/data`


## Invoicing

REST API

POST /data/invoices

```json
{
    "startDate": "date",
    "endDate": "date",
    "school": INT,
    "class": INT (optional),
    "course": INT id (optional)
}
```

Invoices PDFs are generated in /schedule-data-service/invoices