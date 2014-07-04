app.directive('flippable', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            // Activate flippable info
            $(element).bind("click", function() {
                if($(this).hasClass("flipped")) {
                    $(this).removeClass("flipped")
                } else {
                    $(this).addClass("flipped")
                }
            });
        }
    };
}).directive('finishLoad', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            $timeout(function () {
                scope.$emit("finishLoad");
            });
        }
    }
}).directive('flagPickerActivate', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            if (scope.staffWallEnabled) {
                $(element).bind("click", function() {
                    var staffWall = scope.walls.staffWall; // See StaffCtrl in controllers.js
                    var country = $(this).attr("country");
                    if (!$(this).hasClass("grayscale") && $("#flag-picker").hasClass("filtered")) {
                        $(this).siblings(".flag-icon").andSelf().removeClass("grayscale");
                        $("#flag-tip-2").fadeOut(250, function() {
                            $("#flag-tip-1").fadeIn(250);
                        });
                        staffWall.unFilter();
                        $("#flag-picker").removeClass("filtered");
                    } else {
                        $(this).siblings(".flag-icon").andSelf().each(function() {
                            if ($(this).attr("country") !== country) {
                                $(this).addClass("grayscale");
                            } else {
                                $(this).removeClass("grayscale");
                            }
                        });
                        staffWall.filter(".member." + country);
                        $("#flag-tip-1").fadeOut(250, function() {
                            $("#flag-tip-2").fadeIn(250);
                        });
                        $("#flag-picker").addClass("filtered");
                    }
                });
            }
        }
    };
}).directive('langpicker', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).bind("click", function() {
                scope.changeLanguage(attrs.langpicker);
            });
        }
    };
}).directive('balloonpop', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).bind("click", function(){
                $("#balloon").addClass("stop");
                $("#balloon").animate({
                    top: "-200%"
                }, 1500, function() {
                    $("#prologue").hide();
                    $("body").removeClass("init");
                    $("body > :not(#prologue)").fadeTo(1000, 1);
                });
            });
        }
    };
});
