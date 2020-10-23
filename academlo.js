
const ages = [5, 8, 10, 34, 2, 200500];

/////////////////////////////////////////////////////////////////////////
    //------------------- MYEACH ----------------------------//
////////////////////////////////////////////////////////////////////////


function myEach(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
        callback(array[i]);
    }
}

function printAges(value) {
    console.log(value);
}

// myEach(ages, printAges);





/////////////////////////////////////////////////////////////////////////
    //------------------- FIN MYEACH ----------------------------//
////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////
    //------------------- MYFILTER ----------------------------//
////////////////////////////////////////////////////////////////////////

function myFilter(array, callback) {
    const newArray = [];
    for(let x = 0; x < array.length; x++ ) {
        if(callback(array[x]) === true) {
            newArray.push(array[x]);
        }
    }
    return newArray;
}

function getChildren(age) {
    return age < 18;
}

const children = myFilter(ages, getChildren);
// console.log(children);

/////////////////////////////////////////////////////////////////////////
    //------------------- FIN MYFILTER ----------------------------//
////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////
    //------------------- MYMAP ----------------------------//
////////////////////////////////////////////////////////////////////////


function myMap(array, callback) {
    const newArray = [];
    for(var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }

    return newArray;
}

function sumaAges(ages) {
    return ages * 10;
}

const agesChildren = myMap(ages, sumaAges);

// console.log(agesChildren);


/////////////////////////////////////////////////////////////////////////
    //------------------- FIN MYMAP ----------------------------//
////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////
    //-------------------  FIND ----------------------------//
////////////////////////////////////////////////////////////////////////

myFind = (array, callback) => {
    let numero = 0;
    for (let i = 0; i < array.length; i++){
       numero = callback(array[i]);
       if(numero)  {
            numero = array[i];
            return numero;
        }
    }

    
}


function numeroMayor(numero) {
    return numero > 200000;
}

const prueba = myFind(ages, numeroMayor);

// console.log(prueba);


/////////////////////////////////////////////////////////////////////////
    //------------------- FIN FIND ----------------------------//
////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////
    //------------------- FIND INDEX ----------------------------//
////////////////////////////////////////////////////////////////////////

const squad7 = [
    {name: 'Roger', edad:30},
    {name: 'Felipe', edad:21},
    {name: 'Alejandro', edad:34}
]


myfindIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if(callback(array[i])) {
            return i;
        }
    }
}

const finIndex = myfindIndex((squad7), (index) => {
    return index.name === 'Alejandro';
})

// console.log(finIndex);


/////////////////////////////////////////////////////////////////////////
    //------------------- FIN FIND INDEX ----------------------------//
////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
    //-------------------   CONTAINS ----------------------------//
////////////////////////////////////////////////////////////////////////
const containsPrueba = ['hola','soy','goku','adios','bye'];

function myContains(array, callback) {
    for(let i=0; i < array.length; i++) {

        if(callback(array[i])){
            return true;
        }
    }

    return false;

} 

function encuentraNombre(usuario) {
    return usuario == 'vegeta';
}

const pruebaContains = myContains(containsPrueba, encuentraNombre)

// const pruebaContains1 = myContains((containsPrueba), (encuentraNombre1) => {
//     return encuentraNombre1 == 'hola';
// })

// console.log(pruebaContains1);
console.log(pruebaContains);


/////////////////////////////////////////////////////////////////////////
    //------------------- FIN  CONTAINS ----------------------------//
////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
    //-------------------  PLUCK ----------------------------//
////////////////////////////////////////////////////////////////////////

const squad8 = [
    {name: 'Roger', edad: 30},
    {name: 'Felipe', edad:21},
    {name: 'Alejandro', edad:34}
];

function myPluck(array, element) {
    let date = [];
    for(let i = 0; i < array.length; i++) {
        date.push(array[i][element])
    }
    return date;
}

const pruebaPuck = myPluck(squad8, 'name')

// console.log(pruebaPuck);


/////////////////////////////////////////////////////////////////////////
    //-------------------  FIN PLUCK ----------------------------//
////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////
    //-------------------  WITH OUT ----------------------------//
////////////////////////////////////////////////////////////////////////

const squad9 = [1, 2, 3, 4, 1, 4, 5, 1, 1]

function myWithout(array, data){
    let Arraypush = [];
    for(let i= 0; i<array.length; i++){

        if(array[i] === data){
            array.splice(i, 1);
        }
    }
    Arraypush.push(array);
    return Arraypush;
}



console.log(myWithout([2, 1, 2, 3], 1));





/////////////////////////////////////////////////////////////////////////
    //-------------------  FIN WITH OUT ----------------------------//
////////////////////////////////////////////////////////////////////////


