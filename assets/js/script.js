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
let teamList = ['Giovanni', 'Lucia', 'Marco', 'Federico', 'Jessika', 'Laura', 'Luca', 'Davide', 'Anna', 'Massimo', 'Claudia', 'Giacomo'];

// creo la variabile collegata all'elemento HTML
let containerCard = document.getElementById('row');

// con un ciclo for creo le card in pagina
for (let i = 0; i < teamList.length; i++) {
    const member = teamList[i];
    
    // creo i div che conterranno le informazioni degli utenti
    const card = document.createElement("div");

    // inserisco i nomi degli utenti nelle card
    card.innerText = member;

    // aggiungo la classe al div creato
    card.classList.add('userCard');

    // con append inserisco card nel nodo della dom
    containerCard.append(card);
}

// creo una variabile che contenga la classe userCard
let cards = document.getElementsByClassName('userCard');

// creo un event listener (su ogni card) che modifica le classi
for (let card of cards) {
    card.addEventListener('click', function () {
        // se la card contiene la classe selectedCard   
        if (card.classList.contains('selectedCard')) {
            // rimuovi la classe selectedCard
            card.classList.remove('selectedCard');
        } else {
            // Altrimenti, aggiungi la classe selectedCard
            card.classList.add('selectedCard');
        }
    });
}    