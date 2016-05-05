var base_url = null;

if (window.parent.location.href.indexOf('127.0.0.1:8080') > -1){
    base_url = 'http://127.0.0.1:8080/';
}else if (window.parent.location.href.indexOf('/teste') == -1){
    base_url = 'http://api.magal666.com.br';
}else{
    base_url = 'http://www.magal666.com.br/teste/';
}


configModule = angular.module('configModule', []);

configModule.constant('API_CONFIG', {
    url: base_url
});