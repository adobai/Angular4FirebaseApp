# Angular4FirebaseApp

The following provides boilerplate for an Angular4 webapp utilizing the Twitter Bootstrap framework and Firebase authentication.  

1.  Create a new webapp using the [AngularCLI](https://cli.angular.io/)
2.  Change to the directory that was created and run the following:
    >npm install firebase ngx-bootstrap@next angularfire2@next ngx-text-equality-validator --save
3.  Copy files from this repository to your project (overwrite the existing files in your app)  
  *```src/index.html```  
  *```src/styles.css```  
  *```src/app/*.*```    
4.  Update the ```src/environments/environment.ts``` file in your project to the following:
```
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```
5.  from the command line while in your project folder run:
>ng serve

6.  Check for proper operation by visitng localhost:4200



Resources:
  * [AngularCLI](https://cli.angular.io/)  
  * [Twitter Bootstrap](http://getbootstrap.com/)  
  * [Twitter Bootstrap CDN](http://getbootstrap.com/getting-started/) 
  * [Twitter Bootstrap Navbar Color Generator](https://work.smarchal.com/twbscolor/index.php)
  * [NGX-BOOTSTRAP Installation](https://github.com/valor-software/ngx-bootstrap#installation-instructions)  
  * [NGX-BOOTSTRAP Usage](http://valor-software.com/ngx-bootstrap/#/)  
  * [Font Awesome](http://fontawesome.io/)  
  * [Font Awesome CDN](https://www.bootstrapcdn.com/fontawesome/)  
  * [Firebase](https://firebase.google.com/)  
  * [AngularFire2](https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md)  
