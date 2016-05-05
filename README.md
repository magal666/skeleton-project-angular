# Skeleton Project Angular
This is one basic skeleton for creating AngularJS project, utilizing service and promisses AngularJS

<br>
<br>
<br>

## How to install

For install this skeleton, first clone this project with the code:

    git clone https://github.com/magal666/skeleton-project-angular.git

and enter the project folder and use the command:

    bower install

this command will install the libraries: __AngularJS__ and __Twitter Bootstrap__

in the HTML file add the calls from files, __.css__ and __.js__:

<br>

> Injecting bootstrap:

    <link href="vendor/bootstrap/dist/css/bootstrap.min.css">
    <link href="vendor/bootstrap/dist/css/bootstrap-theme.css">
    <script src="vendor/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="vendor/jquery/dist/jquery.min.js"></script>

<br>

> Injecting angularjs:

    <script src="vendor/angularjs/angular.min.js"></script>

<br>
<br>
<br>

##Structure

The structure this project is:

    skeleton-project-angular
    |___css
    |___js
        |___config
        |___controller
        |___lib
        |___service
    |___vendor
    |___view


<br>
<br>

* __CSS:__ personal files css
* __JS:__ project AngularJS with module angular (app.js).
* __CONFIG:__ file for configuration of path ___API___.
* __CONTROLLER:__ files from controller AngularJS.
* __LIB:__ files from directive AngularJS.
* __SERVICE:__ files from service/factory AngularJS.
* __VENDOR:__ library from third, such as AngularJS, JQuery, Bootstrap and etc.
* __VIEW:__ folder of templates