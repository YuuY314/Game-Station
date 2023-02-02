const rpgCategory = document.querySelector("#rpg");
const openWorldCategory = document.querySelector("#open-world");
const terrorCategory = document.querySelector("#terror");
const indieCategory = document.querySelector("#indie");
let arraySize = 4;

let rpgImages = ["https://upload.wikimedia.org/wikipedia/pt/e/e9/Dark_Souls_3_capa.png", "https://upload.wikimedia.org/wikipedia/pt/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png", "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png", "https://upload.wikimedia.org/wikipedia/pt/7/70/Fallout_4_cover_art.jpg"];
let rpgLinks = ["https://store.steampowered.com/app/374320/DARK_SOULS_III/", "https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/", "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/", "https://store.steampowered.com/app/377160/Fallout_4/"];
let rpgTitles = ["Dark Souls 3", "The Elder Scrolls V: Skyrim", "The Witcher 3: Wild Hunt", "Fallout 4"];

let openWorldImages = ["https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png", "https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png", "https://upload.wikimedia.org/wikipedia/pt/0/0d/Elden_Ring_capa.jpg", "https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png"];
let openWorldLinks = ["https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/", "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/", "https://store.steampowered.com/app/1245620/ELDEN_RING/", "https://minecraft.com.br/?gclid=Cj0KCQiA2-2eBhClARIsAGLQ2RmqKNByZ54_RXf7HjhI2eLd1Zp76MJqOWq-eIHWGYLR2I7RLx0lfyMaAp_REALw_wcB"];
let openWorldTitles = ["GTA 5", "Red Dead Redemption 2", "Elden Ring", "Minecraft"];

let terrorImages = ["https://upload.wikimedia.org/wikipedia/pt/c/c7/Alien_Isolation_capa.png", "https://upload.wikimedia.org/wikipedia/pt/3/35/Dead_Space_capa.png", "https://upload.wikimedia.org/wikipedia/en/c/ca/Sh3_boxart.jpg", "https://upload.wikimedia.org/wikipedia/pt/9/9f/Outlast_Cover_Art.jpg"];
let terrorLinks = ["https://store.steampowered.com/app/214490/Alien_Isolation/", "https://store.steampowered.com/app/1693980/Dead_Space/", "https://coolrom.com.au/roms/ps2/71021/Silent_Hill_3.php", "https://store.steampowered.com/app/238320/Outlast/"];
let terrorTitles = ["Alien Isolation", "Dead Space", "Silent Hill 3", "Outlast"];

let indieImages = ["https://i.pinimg.com/originals/71/a9/23/71a92360cb0c1fc5ce6981685079ac2e.jpg", "https://bdjogos.com.br/capas/1012-stardew-valley-pc-capa-1.jpg", "https://bdjogos.com.br/capas/05102017024536-terraria-cover.jpg", "https://upload.wikimedia.org/wikipedia/en/1/1f/Dead_cells_cover_art.png"];
let indieLinks = ["https://store.steampowered.com/app/367520/Hollow_Knight/", "https://store.steampowered.com/app/413150/Stardew_Valley/", "https://store.steampowered.com/app/105600/Terraria/", "https://store.steampowered.com/app/588650/Dead_Cells/"];
let indieTitles = ["Hollow Knight", "Stardew Valley", "Terraria", "Dead Cells"];

for(var i = 0; i < arraySize; i++){
    createGameCard(rpgCategory, rpgImages, rpgTitles, rpgLinks);
    createGameCard(openWorldCategory, openWorldImages, openWorldTitles, openWorldLinks);
    createGameCard(terrorCategory, terrorImages, terrorTitles, terrorLinks);
    createGameCard(indieCategory, indieImages, indieTitles, indieLinks);
}

function createGameCard(gameCategory, gameImages, gameTitles, gameLinks){
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");

    const gameImage = document.createElement("img");
    gameImage.src = gameImages[i];
    gameCard.appendChild(gameImage);

    const gameTitleContainer = document.createElement("div");
    const gameTitle = document.createElement("h4");
    gameTitle.textContent = gameTitles[i];
    gameTitleContainer.appendChild(gameTitle);
    gameCard.appendChild(gameTitleContainer);

    const gameLink = document.createElement("a");
    gameLink.target = "_blank";
    gameLink.href = gameLinks[i];
    gameLink.appendChild(gameCard);

    gameCategory.appendChild(gameLink);
}