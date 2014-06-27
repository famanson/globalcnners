var app = angular.module('GlobalCNNers', ['ngSanitize']);

app.controller("StaffCtrl", function($scope) {
    for (key in staff) {
        var member = staff[key];
        member['flippable'] = (member.back && member.back !== null && member.back !== '');
    }
    $scope.staff = staff;
});