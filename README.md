# Chatbouvet
2 gangsintervju oppgave

 Lage en chatbot for 2 gangsintervju

- Brukeren går inn på en nettside laget av deg. (domenet/hostingplattform er valgfritt, gjerne noe gratis, f.eks Firebase eller Github)
- Brukeren blir møtt med en melding som sier “Velkommen til chatten”.
- Brukeren får generert, og blir vist, et tilfeldig navn fra SSBs navne-API. (https://www.ssb.no/statbank/table/10467/tableViewLayout1/)
  - Fornavnet kan være enten et guttenavn eller jentenavn.
  - Etternavnet er et tilfeldig fornavn, med “-sen” eller “-dottir” lagt til på slutten - avhengig av om det valgte navnet var et gutte- eller jentenavn.
  - Hvis brukeren er misfornøyd med navnet sitt, kan brukeren trykke på en knapp og få tildelt et nytt brukernavn 4.Når brukeren er fornøyd med navnet, kan    vedkommende trykke “Fortsett til chatten”, og blitt tatt til et chattevindu
- I chattevinduet kan brukere fra hele verden skrive til hverandre. Chatten skal oppdateres i sanntid, og skal til enhver tid vise de 10 siste meldingene     som ble skrevet.
- Brukernavnet til personen som skrev meldingen skal stå før hver melding
- Under chattevinduet skal det være et input-felt hvor brukeren selv kan skrive inn meldinger
- Løsningen skal lages i React.js. Bruk av Typescript er et stort pluss.

- Løsningen har ingen innlogging. Det stilles heller ingen krav til sikkerhet, men under intervjuet vil vi gjerne høre dine tanker om hvordan det kan gjøres sikkert.

- Løsningen vil kreve en database som kan pushe oppdateringer til klienten i sanntid. Vi anbefaler Firebase Firestore til dette, men kandidaten står fritt til å velge en annen database/API-løsning med f.eks websockets.

- Innleveringen skal inneholde en link til applikasjonen, samt en link til et åpent Github-repo hvor koden ligger
