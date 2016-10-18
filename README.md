# F5-Guru-Demo-Site
Demo site used on [F5 Guru](http://f5guru.com) site
![alt tag](https://github.com/codygreen/F5-Guru-Demo-Site/blob/master/public/images/demo.png)

## Install
Cd into your working directory:
```
npm install 
```
## Start web server
``` 
DEBUG=demo:* npm start 
```

## Authentication
The web application is looking for X-User.  If you do not suppy this header you'll receive an error page indicating you need to login.

![alt tag](https://github.com/codygreen/F5-Guru-Demo-Site/blob/master/public/images/demo_no_session.png)

