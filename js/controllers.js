var app = angular.module('GlobalCNNers', ['ngSanitize', 'pascalprecht.translate']);

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
    // $scope.guests = guests;
    var guestPartitionSize = 2;
    var guestGroup = [];
    for (var i = 0; i < guestPartitionSize; i += 1) {
        guestGroup[i] = [];
    }
    for (key in guests) {
        var guest = guests[key];
        var partition = key % guestPartitionSize;
        guestGroup[partition].push(guest);
    }
    $scope.guestGroup = guestGroup;
    $scope.guestPartitionSize = guestPartitionSize;
}).controller("ScheduleCtrl", function($scope) {
    $scope.schedule = schedule;
}).controller("TestimonialsCtrl", function($scope) {
    var testimonialPartitionSize = 3;
    var testimonialGroup = [];
    for (var i = 0; i < testimonialPartitionSize; i += 1) {
        testimonialGroup[i] = [];
    }
    for (key in testimonials) {
        var testimonial = testimonials[key];
        var partition = key % testimonialPartitionSize;
        testimonialGroup[partition].push(testimonial);
    }
    $scope.testimonialGroup = testimonialGroup;
    $scope.testimonialPartitionSize = testimonialPartitionSize;
});