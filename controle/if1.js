function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado com " +nota);
    }
}
//let nota = 7.1
//console.log(soBoaNoticia(6.9));
soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('È verdade ... '+valor);

    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1,2]);
seForVerdadeEuFalo({});


