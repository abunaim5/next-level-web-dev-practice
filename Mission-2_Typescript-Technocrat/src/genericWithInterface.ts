//* We can use generics with interface to dynamic interface types
interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseDate: number; 
    };
    smartWatch: T;
    bike?: X;
};

interface RichGuyWatch {
    brand: string,
    aiFeature: boolean;
    callingFeature: boolean;
};

interface PoorGuyWatch {
    brand: string,
    calculator: boolean;
    callingFeature: boolean;
};

interface PoorGuyBike {
    brand: string,
    enginCapacity: string;
};

const poorGuy: Developer<PoorGuyWatch, PoorGuyBike> = {
    name: 'Mark',
    salary: 500,
    device: {
        brand: 'Lenevo',
        model: 'x55',
        releaseDate: 2010
    },
    smartWatch: {
        brand: 'xyz',
        calculator: true,
        callingFeature: false
    },
    bike: {
        brand: 'Suzuki',
        enginCapacity: '200cc'
    }
};

const richGuy: Developer<RichGuyWatch> = {
    name: 'Elon',
    salary: 1500,
    device: {
        brand: 'hp',
        model: 'z85',
        releaseDate: 2025
    },
    smartWatch: {
        brand: 'xyz',
        aiFeature: true,
        callingFeature: false
    },
    bike: null
};