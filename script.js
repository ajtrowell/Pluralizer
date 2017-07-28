// Pluralizer
// Takes two arguments, a number and a singular noun
// Return plural or singular noun, eg '1 dog' or '2 cats' as string.
// Handles limited numbers of irregularNouns, like sheep or geese.
//



function pluralizer(num,noun) {
    var resultString;


    // Handle normal nouns
    if(num === 1) {
        resultString = num + " " + noun;
    } else if (num > 1) {
        resultString = num + " " + noun + "s";
    } else {
        show('Error: Invalid number!');
    }


    return resultString;
}


function show(arg) {
    document.write(arg + "<br>");
}



// Call function:
show(pluralizer(1,'dog'));
show(pluralizer(5,'cat'));
show(pluralizer(4,'sheep'));
show(pluralizer(5,'goose'));

