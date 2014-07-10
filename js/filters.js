app.filter('listgen', function() {
    return function(input) {
        var lines = input.split(" | ");
        if (lines.length < 2) {
            return input;
        }
        var out = "<ul>";
        for (key in lines) {
            out += "<li>" + lines[key] + "</li>";
        }
        return out;
    };
});
