const fs = require("fs");

//* write file with synchronously
const content1 = ` This is a content. \n Synchronous.`;

try {
    fs.writeFileSync("./output/test-sync.txt", content1);
} catch (err) {
    console.error(err.massage);
};

console.log('file written synchronously');

//* write file with asynchronously
const content2 = ` This is a content. \n Asynchronous.`;

fs.writeFile("./output/test-async.txt", content2, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('file written asynchronously');
    };
});
