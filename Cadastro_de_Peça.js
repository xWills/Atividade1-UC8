//Atividade do encontro remoto
var listadepecas = ["Amortecedor" , "Bobina" , "Embreagem" , "ar"] // vetor ou array
let peso = 200

//verificação de peso
if (peso < 100){
    console.log ("peso deve ter no minímo 100g")
} else {
    console.log ("a peça possui o peso adequado")
}
//Verificação de quantidade de itens
if (listadepecas.length < 10){
    console.log ("é possível cadastrar mais peças")
} else {
    console.log ("não é possível cadastrar mais peças")
}
//Verificar quantidade de caracteres no nome
var numeroPecas = listadepecas.length;
var i = 0;
while(i<numeroPecas){
    if(listadepecas[i].length > 3 ){
        console.log("O nome está adequado para o cadastro")
    }else
    if(listadepecas[i].length == 0 ){
        console.log("Nome não pode ser vazio")
    }else{
        console.log("Nome deve ter mais de 3 caracteres, digite novamente")
    }
    i = i+1;
}
