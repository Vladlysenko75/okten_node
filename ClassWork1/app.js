// Завдання на практику
//
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

const path = require("path");
const fs = require("fs");

// fs.writeFile(path.join(__dirname, 'main', 'target.txt'), 'One Two Five', (err => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
//     fs.readFile(path.join(__dirname, 'main', 'target.txt'), ((err, data) => {
//         if (err) {
//             console.log(err)
//             throw err
//         }
//         fs.writeFile(path.join(__dirname, 'main', 'extra', 'extra.txt'), `${data}`, (err => {
//             if (err) {
//                 console.log(err)
//                 throw err
//             }
//         }))
//     }))
// }))
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell

// fs.writeFile(path.join(__dirname, 'main', 'extra', 'extra.txt'), 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, similique?', (err => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
//     fs.readFile(path.join(__dirname, 'main', 'extra', 'extra.txt'), (err1, data) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//         console.log(data.toString())
//         fs.copyFile(path.join(__dirname, 'main', 'extra', 'extra.txt'), path.join(__dirname, 'main', 'extra', 'extraCopy.txt'), (err => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//             fs.rename(path.join(__dirname, 'main', 'extra', 'extraCopy.txt'), path.join(__dirname, 'main', 'secondary', 'extraCopy.txt'), (err => {
//                 if (err) {
//                     console.log(err)
//                     throw err;
//                 }
//                 fs.unlink(path.join(__dirname, 'main', 'extra', 'extra.txt'), (err => {
//                     if (err) {
//                         console.log(err)
//                         throw err;
//                     }
//                 }))
//             }))
//         }))
//     })
// }))
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new



