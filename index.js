const playerNames = [
    // Premier League Stars
    "Erling Haaland", "Mohamed Salah", "Bukayo Saka", "Phil Foden", "Cole Palmer",
    "Bruno Fernandes", "Heung-Min Son", "Martin Ødegaard", "Kevin De Bruyne", "Alexander Isak",
    "Ollie Watkins", "Darwin Núñez", "Declan Rice", "Rodri", "William Saliba",
    "Virgil van Dijk", "Trent Alexander-Arnold", "Gabriel Magalhães", "Reece James", "Kyle Walker",
    
    // La Liga Stars  
    "Vinícius Júnior", "Jude Bellingham", "Robert Lewandowski", "Lamine Yamal", "Pedri",
    "Kylian Mbappé", "Rodrygo", "João Félix", "Antoine Griezmann", "Frenkie de Jong",
    "Raphinha", "Nico Williams", "Federico Valverde", "Eduardo Camavinga", "Aurélien Tchouaméni",
    
    // Serie A Stars
    "Victor Osimhen", "Rafael Leão", "Lautaro Martínez", "Khvicha Kvaratskhelia", "Dusan Vlahović",
    "Marcus Thuram", "Paulo Dybala", "Niccolò Barella", "Alessandro Bastoni", "Mike Maignan",
    
    // Bundesliga Stars
    "Harry Kane", "Jamal Musiala", "Florian Wirtz", "Victor Boniface", "Serge Gnabry",
    "Leroy Sané", "Joshua Kimmich", "Alphonso Davies", "Karim Adeyemi", "Gregor Kobel",
    
    // Ligue 1 Stars
    "Randal Kolo Muani", "Bradley Barcola", "Ousmane Dembélé", "Achraf Hakimi", "Marquinhos",
    "Gianluigi Donnarumma", "Gonçalo Ramos", "Warren Zaïre-Emery", "Alexandre Lacazette", "Nemanja Matić",
    
    // Other Top Players
    "Cristiano Ronaldo", "Neymar Jr.", "Lionel Messi", "Karim Benzema", "N'Golo Kanté",
    "Luis Díaz", "Cody Gakpo", "Dominik Szoboszlai", "Alexis Mac Allister", "Moisés Caicedo",
    "Julián Álvarez", "Mateo Kovačić", "Enzo Fernández", "Mykhailo Mudryk", "Pedro Neto",
    "Jarrod Bowen", "James Maddison", "Dejan Kulusevski", "Brennan Johnson", "Anthony Gordon",
    "Eberechi Eze", "Michael Olise", "Matheus Cunha", "Hwang Hee-chan", "Ivan Toney"
];
    const interestedClubs = ["Manchester United", "FC Barcelona", "Real Madrid", "Bayern Munich", "Liverpool",
    "Paris Saint-Germain", "Chelsea", "Borussia Dortmund", "Juventus", "Tottenham Hotspur",
    "Manchester City", "Inter Milan", "Atletico Madrid", "Arsenal", "AC Milan",
    "Ajax", "FC Porto", "Napoli", "Benfica", "Sevilla",
    "RB Leipzig", "Bayer Leverkusen", "Roma", "Valencia", "Olympique Lyon",
    "Everton", "Leicester City", "Wolverhampton Wanderers", "West Ham United", "Villarreal",
    "Lazio", "AS Monaco", "Leeds United", "Atalanta", "Zenit Saint Petersburg",
    "Paris FC", "Al Nassr", "Al Hilal", "Al Ittihad", "Al Ahli",
    "Al Shabab", "Al-Wehda", "Al-Faisaly", "Al-Raed", "Al-Taawoun",
    "Porto", "Benfica", "Sporting CP", "Marseille", "Lyon",
    "AS Roma", "AC Milan", "Inter Milan", "Napoli", "Lazio",
    "Borussia Dortmund", "Bayern Munich", "Bayer Leverkusen", "RB Leipzig", "Schalke 04",
    "Ajax", "PSV Eindhoven", "Feyenoord", "AZ Alkmaar", "Celtic",
    "Rangers", "Aberdeen", "Heart of Midlothian", "Hibernian", "Boca Juniors",
    "River Plate", "Independiente", "Racing Club", "San Lorenzo", "Velez Sarsfield",
    "Flamengo", "Palmeiras", "Santos", "Sao Paulo", "Gremio",
    "Internacional", "Atletico Mineiro", "Cruzeiro", "Corinthians", "Vasco da Gama",
    "Paris Saint-Germain", "Lille", "Monaco", "Lyon", "Marseille",
    "Portsmouth", "Leeds United", "Nottingham Forest", "Sheffield Wednesday", "Aston Villa",
    "CSKA Moscow", "Spartak Moscow", "Zenit Saint Petersburg", "Lokomotiv Moscow", "Dynamo Moscow",
    "Al-Hilal", "Al-Nassr", "Al-Ahli", "Al-Ittihad", "Al-Shabab"];
    
const phrases = [
    "is rumoured to be moving to",
    "linked with a move to",
    "attracts interest from",
    "in advanced talks with",
    "set to join",
    "could be heading to",
    "on the verge of signing for",
    "reportedly close to joining",
    "has agreed personal terms with",
    "being monitored by",
    "subject of a bid from",
    "wanted by",
    "eyed by",
    "a target for",
    "pursued by",
    "edging closer to",
    "in negotiations with",
    "expected to complete a move to",
    "undergone a medical at",
    "spotted at training ground of"
];

const sources = [
    "according to Sky Sports",
    "reports suggest",
    "sources claim",
    "insiders reveal",
    "as per reliable sources",
    "multiple outlets report",
    "The Athletic understands"
];

const transferFees = [];
    for (let i = 0; i < 50; i++) {
        const fee = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
        const formattedFee = `£${fee}M`; // Format the fee with the currency symbol and "M" for million
        transferFees.push(formattedFee);
      }
    
    // Function to generate a random transfer rumor
    function generateTransferRumor() {
      const randomPlayerName = playerNames[Math.floor(Math.random() * playerNames.length)];
      const randomClub = interestedClubs[Math.floor(Math.random() * interestedClubs.length)];
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      const randomTransferFee = transferFees[Math.floor(Math.random() * transferFees.length)];
      const randomSource = sources[Math.floor(Math.random() * sources.length)];
    
      const rumor = `${randomPlayerName} ${randomPhrase} ${randomClub} for ${randomTransferFee}, ${randomSource}`;
      return rumor;
    }
    
    // Event listener for the generate button
    //document.getElementById("generate-button").addEventListener("click", function() {
      //const rumor = generateTransferRumor();
      //document.getElementById("rumor-text").textContent = rumor;
    //});
    
    // Get the rumor text element and buttons
    const rumorText = document.getElementById("rumor-text");
    const generateButton = document.getElementById("generate-button");
    const copyButton = document.getElementById("copy-button");
    const shareButton = document.getElementById("share-twitter");
    const buttonContainer = document.getElementById("button-container");
    
    // Function to copy the rumor text to the clipboard
    function copyToClipboard(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    
    // Hide the button container initially
    //buttonContainer.style.display = "none";
    
    // Add event listener for generating a new rumor and showing buttons
    generateButton.addEventListener("click", function() {
      const rumor = generateTransferRumor();
      document.getElementById("rumor-text").textContent = rumor;
    
      // Display the rumor
      rumorText.textContent = rumor;
    
      // Show the button container
      buttonContainer.style.display = "flex";
    });
    
    // Add event listener for copying the rumor
    copyButton.addEventListener("click", () => {
      const generatedRumor = rumorText.textContent;
      copyToClipboard(generatedRumor);
      //alert("Rumour copied to clipboard!");
    });
    
    // Add event listener for sharing on Twitter
    shareButton.addEventListener('click', () => {
      const generatedRumor = rumorText.textContent;
      const tweetText = encodeURIComponent('🚨 BREAKING: ' + generatedRumor + '\n\nGenerate your own fake transfer rumours at transferrumourgenerator.online');
      const tweetUrl = 'https://twitter.com/intent/tweet?text=' + tweetText;
    
      window.open(tweetUrl, '_blank');
    });