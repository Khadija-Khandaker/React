const myName: string = "John";
const age: number = 30;

//myName.toLowerCase()
type Student={
    name: string;
    age: number;

}

interface Vegetable{
    name: string;
    weight: number;
    isRotten: boolean;

}
const potato: Vegetable= {
    name: "potato",
    weight: 5,
    isRotten: false
}
interface FavouriteVagetable extends Vegetable {
    isFavourite: boolean;
}

const cucumber: FavouriteVagetable= {
    name: "potato",
    weight: 5,
    isRotten: false,
    isFavourite: true
}