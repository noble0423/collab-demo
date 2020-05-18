// GLOBAL VARIABLES
//=========================================================================================================================================
var students = ["Alyssa", "Brandon", "Celeste", "Derrick", "Harpreet", "Joel", "Karen", "Lewis", "Michael"];
var groupA = [];
var groupB = [];
var groupC = [];

var $groupADiv = document.getElementById("groupA-list");
var $groupBDiv = document.getElementById("groupB-list");
var $groupCDiv = $("#groupC-list");
// console.log($groupCDiv);

// FUNCTIONS
//=========================================================================================================================================
// function to shuffle students array
function shuffle(array) {
    var counter = array.length;
    var temp;
    var index;

    // while loop
    while (counter > 0) {
        // pick a random index
        index = Math.floor(Math.random() * counter);
        
        // decrease the counter by 1
        counter--;

        // swap the last element
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    console.log(array);
    divideIntoGroups(array);
}

function divideIntoGroups(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i < 3) {
            groupA.push(arr[i]);
        }
        else if (i >= 3 && i < 6) {
            groupB.push(arr[i]);
        }
        else {
            groupC.push(arr[i]);
        }
    }
    console.log(`GroupA: ${groupA}`);
    console.log(`GroupB: ${groupB}`);
    console.log(`GroupC: ${groupC}`);
    

    for (var j = 0; j < groupA.length; j++) {
        var newPTag = document.createElement("p");
        newPTag.textContent = groupA[j];
        $groupADiv.appendChild(newPTag);
    }

    for (var k = 0; k < groupB.length; k++) {
        var newPTag = document.createElement("p");
        newPTag.textContent = groupB[k];
        $groupBDiv.appendChild(newPTag);
    }

    for (var l = 0; l < groupC.length; l++) {
        var newPTagjQuery = $("<p>");
        newPTagjQuery.text(groupC[l]);
        // console.log(newPTagjQuery);
        $groupCDiv.append(newPTagjQuery);
    }

}








// MAIN PROCESS
//=========================================================================================================================================
$(document).ready(function() {
    $("#generate-btn").on("click", function() {
        shuffle(students);
    
    });
})























