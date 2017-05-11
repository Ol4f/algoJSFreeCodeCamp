/**
 * Created by namnguyen on 21/03/2017.
 */

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lockupProfile(firstName,prob){

    var find = 0;

    if (firstName === null || prob === null){
        return ;
    }
    for (var i = 0; i<contacts.length; ++i){
        if (contacts[i].firstName == firstName ) {
            if (prob == "lastName") {
                return contacts[i].lastName;
            }
            if (prob == "number") {
                return contacts[i].number;
            }
            if (prob == "likes") {
                return contacts[i].likes;
            }
            else return "No such property";
            
        }   
        else find = 0;
    }
    if (find == 0) {
        return "No such contact";
    }
};

var result = lockupProfile("Kristian","love");
console.log(result);


