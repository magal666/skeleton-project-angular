skeletonMagal666 = angular.module('skeletonMagal666');

skeletonMagal666.factory('skeletonMagal666Service', function ($http, $q, API_CONFIG) {

    var self = this;

    self.setUser = function (input) {
        var deferred = $q.defer();
        var url = API_CONFIG.url + "/user";
        var dados = {
            name: input.name,
            email: input.email,
            password: input.password
        };

        $http.post(url, dados).then(function (response) {
            deferred.resolve(response);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    self.listUser = function () {
        var deferred = $q.defer();
        var url = API_CONFIG.url + "/user";

        $http.get(url).then(function (response) {
            deferred.resolve(response);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    return self;
});
