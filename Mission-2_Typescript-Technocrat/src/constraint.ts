//* We can use constraint to strictly define the types. Which property or value must be needed.
//* We can use extends to set constraint

type Student = {id: number, name: string, dateOfBirth: string}

const addStudentToCourse = <T extends Student>(courseInfo: T) => {
    return {
        course: 'Next level web dev',
        ...courseInfo
    }
};

const student1 = {
    id: 123,
    name: 'Elon',
    hasPen: true,
    dateOfBirth: '2-2-2022'
};

const student2 = {
    id: 234,
    name: 'Zucker',
    hasWatch: true,
    dateOfBirth: '2-2-2022'
};

const student3 = {
    id: 456,
    name: 'Bill',
    hasPen: false,
    hasCar: true,
    dateOfBirth: '2-2-2022'
};

const std1 = addStudentToCourse(student1);
const std2 = addStudentToCourse(student2);
const std3 = addStudentToCourse(student3);