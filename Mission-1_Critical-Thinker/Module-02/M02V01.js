// const obj = {
//     nextLevel: {courseId: 'level2'},
//     "programming hero": {courseId: 'level1'}
// };

// console.log(obj["programming hero"])


// const obj = {};

// obj[course12] = {courseId: 'level2'};
// obj[course1] = {courseId: 'level1'};

const course1 = { name: 'web development' };
const course2 = { name: 'next level web development' };


const courses = [[course1, 'level1'], [course2, 'level2']]

const map = new Map(courses);

// map.set(course1, { courseId: 'level1' })
// map.set(course2, { courseId: 'level2' })

// map.delete(course1);
// map.clear();
// map.forEach((value, key) => console.log("key: ", key, 'value: ', value));
// map.forEach((value, key) => key.name = 'shorol simple shohoj ' + key.name);

// for (let key of map.keys()) {
//     key.name = 'simple ' + key.name;
// }

console.log(map);
// console.log(map.size);