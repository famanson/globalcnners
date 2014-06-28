var app = angular.module('GlobalCNNers', ['ngSanitize']);

app.controller("StaffCtrl", function($scope) {
    for (key in staff) {
        var member = staff[key];
        member['flippable'] = (member.back && member.back !== null && member.back !== '');
    }
    $scope.staff = staff;
    $scope.countries = countries;
}).controller("GuestsCtrl", function($scope) {
    for (key in guests) {
        var member = guests[key];
        member['flippable'] = (member.back && member.back !== null && member.back !== '');
    }
    $scope.guests = guests;
}).controller("ScheduleCtrl", function($scope) {
    $scope.schedule = schedule;
}).controller("TestimonialsCtrl", function($scope) {
    var partitionSize = 3;
    var testimonialGroup = [];
    for (var i = 0; i < partitionSize; i += 1) {
        testimonialGroup[i] = [];
    }
    for (key in testimonials) {
        var testimonial = testimonials[key];
        var partition = key % partitionSize;
        testimonialGroup[partition].push(testimonial);
    }
    $scope.testimonialGroup = testimonialGroup;
    $scope.partitionSize = partitionSize;
});