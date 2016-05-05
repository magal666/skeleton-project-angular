skeletonMagal666 = angular.module('skeletonMagal666');

skeletonMagal666.controller('skeletonMagal666Controller', ['$scope', 'skeletonMagal666Service',
    function ($scope, skeletonMagal666Service) {

        $scope.teste = "TESTE";
        
        $scope.inputData = {
            "nome": undefined,
            "email": undefined,
            "password": undefined
        };

        $scope.list = {
            "user": []
        };
        
        $scope.error = {
            "user": []  
        };

        $scope.listUserAction = function () {
            skeletonMagal666Service.listUser().then(function (response) {
                $scope.list.user = response;
            }, function (error) {
                $scope.error.user = error;
            });
        };

        $scope.setUserAction = function (input) {
            skeletonMagal666Service.setUser(input).then(function (response) {
                if(response.success){
                    alert("User added with success");
                }else{
                    alert("One error ocorred to try add a new user.");
                }
            }, function (error) {
                $scope.error.user = error;
            });
        };

    }
]);

