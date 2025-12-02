const fs = require("fs");

console.log('Start reading...');

fs.readFile("./data/diary.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err.message);
    }
    console.log('File content: ');
    console.log(data);
});

console.log('This runs immediately - No blocking');