const fs = require('fs');
const path = require("path");

// fs.mkdir(path.join(__dirname, 'main'), (err => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))
//
// fs.mkdir(path.join(__dirname,'main','online'), (err => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))
//
// fs.mkdir(path.join(__dirname,'main','inPerson'), (err => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))

// const onlineUsers = [
//     {name: "Vova", age: 25, city: "Kyiv"},
//     {name: "Toha", age: 24, city: "Lviv"},
//     {name: "Masha", age: 21, city: "Poltava"}
// ];
//
// const inPersonUsers = [
//     {name: "Max", age: 18, city: "Rivne"},
//     {name: "Sasha", age: 22, city: "Kharkiv"},
//     {name: "Ira", age: 29, city: "Priluki"}
// ];

// fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${onlineUsers.map(user => `\n Name: ${user.name} \n Age: ${user.age} \n City: ${user.city}`)}`, (err => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))
//
// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${inPersonUsers.map(user => `\n Name: ${user.name} \n Age: ${user.age} \n City: ${user.city}`)}`, (err => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))

// function changeOnlineStatus() {
//     fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'),
//         path.join(__dirname, 'main', 'inPerson', 'inPerson2.txt'), (err => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//             fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
//                 path.join(__dirname, 'main', 'online', 'online.txt'), (err => {
//                     if (err) {
//                         console.log(err)
//                         throw err;
//                     }
//                     fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson2.txt'),
//                         path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), (err => {
//                             if (err) {
//                                 console.log(err)
//                                 throw err;
//                             }
//                         }))
//                 }))
//         }))
// }
//
// changeOnlineStatus()


