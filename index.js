// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const newCats2 = [name, ...cats];
    return newCats2;
}

function removeLastCat(name) {
    const newCats3 = cats.slice(0,cats.length-1);
    return newCats3;
}

function removeFirstCat(name) {
    const newCats4 = cats.slice(1);
    return newCats4;

}