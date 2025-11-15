//* conditional type declaration
type A = null;
type B = undefined;
// this are called conditional type declaration
type C = A extends number ? true : B extends undefined ? true : false;

//* another example
type RichGuyVehicle = {
    car: string;
    bike: string;
    ship: string;
};

type CheckVehicle<T> = T extends keyof RichGuyVehicle ? true : false;

type HasBike = CheckVehicle<'bike'>