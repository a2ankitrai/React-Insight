
const names = ['IronMan','Hulk','Thor'];

const namesX = ['Black Widow','Captain America','Hawk Eye']

// ES5 concatination

let combiNames = [];
combiNames = combiNames.concat(names);
combiNames.push('Groot');
combiNames = combiNames.concat(namesX);

//console.log(combiNames);

// ES6 spread operator

const allNames = [...names, 'Groot', ... namesX];

console.log(allNames);
