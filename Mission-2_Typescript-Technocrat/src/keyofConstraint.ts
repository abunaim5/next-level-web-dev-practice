//* keyof: type operator

type RichGuyVehicle = {
    car: string;
    bike: string;
    truck: string;
};

// type myVehicle = 'car' | 'bike' | 'truck';

//* we can define this type with keyof type operator
type myVehicle = keyof RichGuyVehicle;

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    };
};

const user: User = {
    id: 123,
    name: 'Elon',
    address: {
        city: 'Mym'
    }
};

const products = {
    brand: 'Lenevo'
}

// We can generalize functions with generic
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
};

const res1 = getPropertyFromObj(user, 'name');
const res2 = getPropertyFromObj(products, 'brand');