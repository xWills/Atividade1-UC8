//verificação de quantidade de participantes
let listaDeParticipantes = ["Helena", "Chico", "Mário", "José", "Maria" ]
let quantidadeDeParticipantes = listaDeParticipantes.length;
if (quantidadeDeParticipantes <= 4) {
    console.log("Vagas disponíveis"); ;
} else {
    console.log("Não é possivel inserir mais participantes no evento")
}
//verificação de data
let dataAtual = new Date();
let dia = dataAtual.getDate();
let mes = (dataAtual.getMonth()+1);
let ano = dataAtual.getFullYear();
let Hoje = (dia + "/" + mes + "/" + ano);
let DiadoEvento = 30
if (DiadoEvento <= dia) {
    console.log ("Data inválida")
    } else {
    console.log ("Data permitida" )
}
//verificação de idade
let qualsuaidade = 19
if (qualsuaidade >= 18){
    console.log ("Idade Permitida para o evento")
 }else {
     console.log("Cadastro premitido para maiores de 18anos")
 }
 //verificação de cadastro
 var seinscrever = "sim"
 if (seinscerver = "sim"){
     console.log ("inscrição realizada com sucesso")
 }