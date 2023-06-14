// Arrays of possible options
const playerNames = ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr.", "Kylian Mbappé", "Robert Lewandowski",
"Kevin De Bruyne", "Mohamed Salah", "Harry Kane", "Virgil van Dijk", "Sergio Ramos",
"Manuel Neuer", "Eden Hazard", "Luka Modrić", "Sadio Mané", "Karim Benzema",
"Raheem Sterling", "N'Golo Kanté", "Alisson Becker", "Thiago Silva", "Toni Kroos",
"Bruno Fernandes", "Joshua Kimmich", "Pierre-Emerick Aubameyang", "Thomas Müller", "Romelu Lukaku",
"Paulo Dybala", "Marco Reus", "Sergio Agüero", "Raphael Varane", "Marc-André ter Stegen",
"Erling Haaland", "Antoine Griezmann", "Aymeric Laporte", "Heung-Min Son", "Jan Oblak",
"Trent Alexander-Arnold", "Jamie Vardy", "Thiago Alcântara", "N'Golo Kanté", "Gianluigi Donnarumma",
"Andrew Robertson", "Virgil van Dijk", "Ciro Immobile", "Marquinhos", "Jadon Sancho",
"Kalidou Koulibaly", "Serge Gnabry", "Dries Mertens", "Matthijs de Ligt", "Paul Pogba",
"Luis Suárez", "Hakim Ziyech", "Kai Havertz", "Angel Di Maria", "Jorginho",
"Frenkie de Jong", "David Silva", "Keylor Navas", "Sergio Busquets", "Gareth Bale",
"Karim Benzema", "Christian Pulisic", "Lautaro Martínez", "Rodri", "Jordi Alba",
"Gerard Piqué", "Dani Carvajal", "Lucas Moura", "Federico Valverde", "Timo Werner",
"Ederson", "Sergio Agüero", "César Azpilicueta", "Alex Telles", "João Cancelo",
"Jorginho", "João Félix", "Diego Godín", "Allan", "Kalvin Phillips",
"Sadio Mané", "Leon Goretzka", "Héctor Bellerín", "Wojciech Szczęsny", "Casemiro",
"Kingsley Coman", "Kieran Trippier", "Romelu Lukaku", "Federico Chiesa", "Sergej Milinković-Savić",
"Ángel Correa", "Mason Mount", "Hirving Lozano", "Cristian Romero", "Duván Zapata",
"Thibaut Courtois", "Pedro", "Iñaki Williams", "Riyad Mahrez", "Thorgan Hazard",
"Memphis Depay", "Bruno Fernandes", "Nabil Fekir", "Niklas Süle", "Achraf Hakimi",
"Lucas Digne", "Ruben Dias", "Alessandro Florenzi", "Jude Bellingham", "Ibrahim Sangaré",
"Dejan Kulusevski", "Eduardo Camavinga", "Matteo Guendouzi", "Tanguy Ndombele", "Youri Tielemans",
"Bukayo Saka", "Dani Olmo", "Saul Niguez", "Nicolò Barella", "Giovanni Reyna",
"Gianluigi Donnarumma", "Adama Traoré", "Nathan Aké", "Dominik Szoboszlai", "Pau Torres",
"Aaron Wan-Bissaka", "Reece James", "Ezri Konsa", "Ryan Gravenberch", "Sander Berge",
"Alexander Isak", "Edmond Tapsoba", "Boubacar Kamara", "Takehiro Tomiyasu", "Manuel Locatelli",
"Leon Bailey", "Maxence Lacroix", "Matheus Cunha", "Donyell Malen", "Zeki Çelik",
"Jonathan David", "Daniel James", "Ryan Sessegnon", "Odsonne Édouard", "Daniele Rugani",
"Sergiño Dest", "Nuno Mendes", "Erling Håland", "Pedri", "Rúben Neves",
"Eduardo Camavinga", "Sandro Tonali", "Gianluigi Buffon", "Paulo Gazzaniga", "Joe Hart",
"Maarten Stekelenburg", "David de Gea", "Jasper Cillessen", "Rui Patrício", "Wojciech Szczęsny",
"Gianluigi Donnarumma", "Samir Handanović", "Jan Oblak", "Alphonse Areola", "Marc-André ter Stegen",
"Keylor Navas", "Ederson", "Kasper Schmeichel", "Bernd Leno", "Hugo Lloris"];
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
const phrases = ["is rumoured to be moving to", "linked with a move to", "attracts interest from"];
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

  const rumor = `${randomPlayerName} ${randomPhrase} ${randomClub} for ${randomTransferFee}`;
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
buttonContainer.style.display = "none";

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
shareButton.addEventListener("click", () => {
  const generatedRumor = rumorText.textContent;
  const tweetText = encodeURIComponent("Check out this transfer rumour: " + generatedRumor + " https://elljfb.github.io/random-transfer-generator/");
  const tweetUrl = "https://twitter.com/intent/tweet?text=" + tweetText;

  window.open(tweetUrl, "_blank");
});


