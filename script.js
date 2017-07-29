// Pluralizer
// Takes two arguments, a number and a singular noun
// Return plural or singular noun, eg '1 dog' or '2 cats' as string.
// Handles limited numbers of irregularNouns, like sheep or geese.
//



function pluralizer(num,noun) {
    // Input Error Checking
    var isNumArgValid = (typeof(num) === 'number' && num >= 0);
    if(!isNumArgValid) { show('Error: Invalid number argument!');}
    var isNounArgValid = (typeof(noun) === 'string');
    if(!isNounArgValid) { show('Error: Invalid noun argument!');}

    // Initialization
    var resultString;
    var noChangeNouns = ['sheep','deer','fish','series','species'];
    var irregularNouns = [
        ['goose','geese'],
        ['man','men'],
        ['child','children'],
        ['foot','feet'],
        ['tooth','teeth'],
        ['mouse','mice'],
        ['person','people']
    ];


    // Begin Plural Logic
    if(num === 1) {
    // Case: Single item, no plural
        resultString = num + " " + noun;
    } else if (num > 1 || num === 0) {
        // Case: Plural. Includes > 1 AND 0, as in "zero dishes."

        // What KIND of plural?
        if( noChangeNouns.includes(noun) ) {
            // Plural which doesn't change the noun at all.
            resultString = num + " " + noun;
        } else if ( deepIndexOf(irregularNouns,noun) != -1) {
            // If on list of irregularNouns, get index:
            let indexIrregular = deepIndexOf(irregularNouns,noun);
                // Replace irregular noun with its plural form:
            resultString = num + " " + irregularNouns[indexIrregular][1];
        } else {
            // Regular Plural, just at 's'.
            resultString = num + " " + noun + "s";
        }

    }

    return resultString;
}


function show(arg) {
    document.write(arg + "<br>");
}

function showError(arg) {
    document.write("<font color='red'>" + arg + "<br>"+"</font>");
}


function deepIndexOf(array,searchString) {
    // Searches first element of each sub array.
    // Returns index if found, or -1 otherwise
    for (let i = 0; i<array.length; ++i) {
        if ( array[i][0].toLowerCase() == searchString.toLowerCase()) {
            return i;
        }
    }
    return -1; // search string not found
}

// Test Code
var areEqual = function(expected, actual) {
    return expected === actual;
}


function testPluralizer(func) {
    var numArguments = 7;
    var inputOutput = [
        ['dog','dogs'],
        ['sheep','sheep'],
        ['goose','geese'],
        ['bus','buses'],
        ['match','matches'],
        ['box','boxes'],
        ['tomato','tomatoes'],
        ['hero','heroes'],
        ['wolf','wolves'],
        ['knife','knives'],
        ['city','cities'],
        ['baby','babies'],
    ];

    var results = [];
    // loop
    for (let i = 0; i < inputOutput.length; ++i) {
        results[i] = pluralizer(numArguments,inputOutput[i][0]);
            show("Input: " + numArguments + " " + inputOutput[i][0]);
            show("Output: " + results[i]);
        if( ! areEqual(numArguments + " " + inputOutput[i][1], results[i]) ) {
            showError("Expected: " + numArguments + " " + inputOutput[i][1]);
        }
    }
}

testPluralizer(pluralizer);



// Call function:
// Regular
show(pluralizer(1,'dog'));
show(pluralizer(5,'cat'));
// Unchanging
show(pluralizer(4,'sheep'));
show(pluralizer(33,'species'));
// Irregular, changes form
show(pluralizer(5,'goose'));
show(pluralizer(50,'mouse'));
show(pluralizer(21,'person'));
// -> Ends in S, CH, SH, X, or Z -> add -ES
show(pluralizer(7,'bus'));
show(pluralizer(7,'match'));
show(pluralizer(7,'dish'));
show(pluralizer(7,'box'));
show(pluralizer(7,'quiz'));
// -> Ends in CONSONANT + O -> add -ES
show(pluralizer(9,'hero'));
show(pluralizer(8,'echo'));
show(pluralizer(5,'tomato'));
show(pluralizer(4,'potato'));
// -> remove F/FE, add VES
show(pluralizer(7,'wolf'));
show(pluralizer(302,'knife'));
// -> Ends in CONSONANT + Y -> Remove Y, add -ES
show(pluralizer(4,'city'));
show(pluralizer(4,'baby'));
show(pluralizer(4,'story'));
show(pluralizer(4,'party'));
show(pluralizer(4,'country'));

