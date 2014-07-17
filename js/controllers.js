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

app.controller("ParentCtrl", function ($scope, $translate, $location) {
    $scope.staffWallEnabled = (window.innerWidth > 1365);
    $scope.staffCellW = ($("#staff-view").width() - 40)/3;
    $scope.correctFlippableHeight = function() {
        if ($scope.staffWallEnabled) {
            $("#staff-view .pin img").height($scope.staffCellW);
        } else {
            $("#staff-view .pin img").height($("#staff-view .pin img").width());
        }
        // Loop through element's children to find & set the biggest height
        $(".flipper").each(function(){
            var biggestHeight = "0";
            $(this).find(".front").each(function(){
                // If this elements height is bigger than the biggestHeight
                if ($(this).innerHeight() > biggestHeight ) {
                    // Set the biggestHeight to this Height
                    biggestHeight = $(this).innerHeight();
                }
            });
            // Set the container height
            $(this).height(biggestHeight);
            $(this).find(".back .text").height(biggestHeight - 20);
        });
    };
    $scope.$on("correctFlippableHeight", function(e) {
        $scope.correctFlippableHeight();
    });
    $scope.$on("finishLoad", function(e) {
        $scope.correctFlippableHeight();
        $scope.$broadcast("constructStaffWall");
    });
}).controller("LanguageCtrl", function ($scope, $translate, $location) {
    $translate.fallbackLanguage('en');

    if ('lang' in $location.search() && $location.search().lang === 'vn') {
        $translate.use('vn');
        $scope.currentLang = 'vn';
    } else {
        $translate.use('en');
        $scope.currentLang = 'en';
    }

    $scope.changeLanguage = function(key) {
        $location.search("lang", key);
        $translate.use(key);
        $scope.currentLang = key;
        $scope.$apply();
    };

    $scope.isLangActive = function(key) {
        return $scope.currentLang === key;
    };
}).controller("StaffCtrl", function($scope) {
    for (key in staff) {
        var member = staff[key];
        member['flippable'] = (member.back && member.back !== null && member.back !== '');
        var imagePresent = (member.image && member.image !== null && member.image !== '');
        member['imagePresent'] = imagePresent;
    }
    $scope.staff = staff;
    $scope.countries = countries;

    // Construct guest groups for fallback
    var staffPartitionSize = 3;
    var staffGroup = [];
    for (var i = 0; i < staffPartitionSize; i += 1) {
        staffGroup[i] = [];
    }
    if (!$scope.staffWallEnabled) {
        if ($(document).width() < 992) {
            staffPartitionSize = 1;
        } else if ($(document).width() < 1280) {
            staffPartitionSize = 2;
        }
        for (key in staff) {
            var member = staff[key];
            var partition = key % staffPartitionSize;
            console.log(partition);
            staffGroup[partition].push(member);
        }
        $scope.staffGroup = staffGroup;
        $scope.staffPartitionSize = staffPartitionSize;
    }

    $scope.walls= {};

    $scope.buildStaffWall = function() {
        var staffWall = new freewall("#staff-view");
        staffWall.reset({
            selector: '.member',
            animate: true,
            cellW: $scope.staffCellW,
            cellH: 'auto',
            gutterX: 20,
            gutterY: 20,
            onResize: function() {
                staffWall.fitWidth();
            }
        });
        staffWall.fitWidth();
        $scope.walls.staffWall = staffWall;
    };

    $scope.$on("constructStaffWall", function(e) {
        if ($scope.staffWallEnabled) {
            $scope.buildStaffWall();
            $scope.$emit("correctFlippableHeight");
        }
    });

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
    for (key in schedule) {
        var entry = schedule[key];
        entry['flagPresent'] = (entry.flag && entry.flag !== null && entry.flag !== '');
    }
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