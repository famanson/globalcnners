// function fireScreenSizeChange() {
//     var domElt = document.getElementById('html');
//     scope = angular.element(domElt).scope();
//     scope.$apply(function() {
//         scope.width = window.innerWidth;
//         scope.height = window.innerHeight;
//     });
// }

// document.addEventListener("DOMContentLoaded", fireScreenSizeChange, false);

// window.onresize = fireScreenSizeChange;

var app = angular.module('GlobalCNNers', ['ngSanitize', 'pascalprecht.translate']);

app.controller("LanguageCtrl", function ($scope, $translate, $location) {
    if ('lang' in $location.search() && $location.search().lang === 'vn') {
        $translate.use('vn');
    } else {
        $translate.use('en');
    }

    $scope.changeLanguage = function(key) {
        $location.search("lang", key);
        $translate.use(key);
    };
}).controller("StaffCtrl", function($scope) {
    for (key in staff) {
        var member = staff[key];
        member['flippable'] = (member.back && member.back !== null && member.back !== '');
    }
    $scope.staff = staff;
    $scope.countries = countries;

    // Construct guest groups for fallback
    var staffPartitionSize = 2;
    var staffGroup = [];
    for (var i = 0; i < staffPartitionSize; i += 1) {
        staffGroup[i] = [];
    }
    for (key in staff) {
        var member = staff[key];
        var partition = key % staffPartitionSize;
        staffGroup[partition].push(member);
    }
    $scope.staffGroup = staffGroup;
    $scope.flagFilterEnabled = (window.innerWidth > 1365);
    $scope.staffPartitionSize = staffPartitionSize;
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