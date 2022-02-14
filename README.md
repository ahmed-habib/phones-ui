# Phones-UI
Single Page UI App for Countries Phones Filteration Project by using Angular Framework [V-11.2.14].

### Prerequisite 

You need to clone SpringBoot backend project "https://github.com/ahmed-habib/PhoneBookJumia.git"

### Server Requirments

NodeJS server:

- Install NodeJS >= 12.14.1 from https://nodejs.org/en/

### Install Angular CLI by running the following command:
```sh
npm install -g  @angular/cli@11.2.14
```

### Installation steps:

1- Apply the following commands after opening CMD:
```sh
git clone https://github.com/ahmed-habib/phones-ui.git
cd phones-ui
npm install
```

2- Update API URL in the following service file "phones-ui/src/app/shared/ServiceUtiles.ts" in current project to be able to call right API successfully acccording to your API app[PhoneBookJumia] installation path:
```sh
'http://localhost:8080/phonebook/api'
```

3- Now you should be able to access our UI app [http://localhost:4200/] from your browser after running the following command:
```sh
npm run start
```

### Running Tests by using the following command:
```sh
npm run test
```