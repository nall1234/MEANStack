// // my version which give the valute of the key and the value

// function StudentsNames(arr){
//     for (let i = 0; i<arr.length; i++){
//         for(var prop in arr[i]){
//             console.log(prop, arr[i][prop])
//         }
//     }
// }

// // the OF loop which they came up with which give it in a different way but doesnt give the key 

// function StudentsNames2(arr){
//     for (student of students){
//         console.log(student.name, student.cohort)
//     }
// }

// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// StudentsNames(students)
// StudentsNames2(students)

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

let test = users.key

console.log(test)


// function Names(users){
//     for (user in users){
//         console.log(user);
//         for (let i = 0; i<users[user].length; i++){
//             let num = i+1;
//             let firstName = users[user][i].first_name;
//             let lastName = users[user][i].last_name;
//             let count = firstName.length + lastName.length;
//             console.log(num, lastName, firstName, count )
//         }

//     }
// }
// Names(users);