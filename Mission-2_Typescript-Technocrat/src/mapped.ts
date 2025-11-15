//* Mapped type
//* We can use mapped type to define types dynamically
type Area<T> = {
    [key in keyof T]: T[key];
};

const area: Area<{ height: number, width: string }> = {
    height: 200,
    width: '500'
}


