# F5-Guru-Demo-Site
Demo site used on [F5 Guru](http://f5guru.com) 
![alt tag](https://github.com/codygreen/F5-Guru-Demo-Site/blob/master/public/images/demo.png)

## Install on Ubuntu Server
```
apt-get update
apt-get install node npm
rm /usr/sbin/node
sudo ln -s `which nodejs` /usr/sbin/node
git clone https://github.com/codygreen/F5-Guru-Demo-Site.git
cd F5-Guru-Demo-Site
npm install 
```
## Start web server
``` 
DEBUG=demo:* npm start 
```

## Authentication
The web application is looking for X-User.  If you do not suppy this header you'll receive an error page indicating you need to login.

![alt tag](https://github.com/codygreen/F5-Guru-Demo-Site/blob/master/public/images/demo_no_session.png)

## Headers
You can view the request headers by clicking on the Headers tab
