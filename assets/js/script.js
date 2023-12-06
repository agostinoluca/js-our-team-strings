/* 

Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.

MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.

MILESTONE 1:
Stampare le informazioni su DOM come card.

MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.

BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.

BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.


##Tools:
 -const / let;
 -array;
 -getElementById / querySelector;
 -for;
 -append;
 -innerText;
 -addEventListener(click)

*/

// creo una array contenente i nomi del mio team
let teamList = ['Giovanni', 'Lucia', 'Marco', 'Federico', 'Jessika', 'Laura', 'Luca', 'Davide', 'Anna', 'Massimo'];

// creo la variabile collegata all'elemento HTML
let containerCard = document.getElementById('container');

// con un ciclo for creo le card in pagina
for (let i = 0; i < teamList.length; i++) {
    const member = teamList[i];
    console.log(member);
}
// inserisco i nomi degli utenti nelle card

// creo un event listener su ogni card che modifica le classi
