/**
 *  |||| Descrizione: ||||
 * 
 * Ricreiamo il layout come nell'immagine allegata, seguendo le specifiche del milestone scritto qui di seguito.
 * Vi ho allegato anche un file img.zip contenente gli avatar che vedete nell'immagine,
 * siete liberi di usarli o di usarne altri a vostro piacimento, ma senza cambiare nulla nell'oggetto contacts assegnato.
 * 
 * ## Il Milestone 1 include esclusivamente:
 * 
 * Nota Bene: non è possibile in nessun caso modificare i dati nell'oggetto contacts da noi fornito.
 * - Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
 * - Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.
 * 
 * ()Consigli:
 * 
 * Come ieri vi consiglio di pensare in anticipo alle strutture dati che potrebbero servirvi per ogni fase,
 * facendo particolare attenzione alle richieste delle milestone e ai dati ricevuti.
 * Non spendete tempo a ragionare su funzionalità che non sono state richieste nel milestone corrente;
 * l'obiettivo non è essere veloci, l'obiettivo è ottenere un risultato di qualità, pulito ed efficiente.
 * Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
 * 
 * 
 * ## Il Milestone 2 include esclusivamente:
 * 
 * Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
 * Click sul contatto mostra la conversazione del contatto cliccato
 * 
 * ## Il Milestone 3 include esclusivamente:
 * 
 * Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
 * Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
 * 
 * ## Il Milestone 4 include esclusivamente:
 * 
 * Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
 *    
*/


var root = new Vue (
    {
        el:"#root",

        data: {

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
            
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            selectedContact : 0,
            newTextElement : "",
            
        },

        methods: {
            
            selectContact : function(elementIndex) {
                this.selectedContact = elementIndex;
            },

            addTextElement: function(){

                if (this.newTextElement.length > 0){

                    const elementToAdd = 
                    root.contacts.messages[2].push({text : this.newTextElement});
                    newTextElement = "";
                }
            },
        }
    }
);

