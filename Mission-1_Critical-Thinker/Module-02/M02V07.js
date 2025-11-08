//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//TODO initiate empty object
//TODO check if the response already exist or not
//TODO if it exist then increment the count
//TODO if not the initialize it with one

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

const count = surveyResponses.reduce((table, res) => {
    // if (table[res]) {
    //     table[res] = table[res] + 1;
    // } else table[res] = 1;

    // another short way
    table[res] = (table[res] || 0) + 1;

    return table;
}, {});

console.log(count);