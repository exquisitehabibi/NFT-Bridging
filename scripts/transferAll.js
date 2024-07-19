const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyCollection.sol/MyCollection.json");
require('dotenv').config();

const contractAddress = process.env.CONTRACT_ADDR;
const contractABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "<RECIPIENT_ADDRESS>";

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Using deployer account: ${deployer.address}`);

    const myCollection = await hre.ethers.getContractAt(contractABI, contractAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);

    const tokenIds = [0, 1, 2, 3, 4];

    for (let i = 0; i < tokenIds.length; i++) {
        try {
            // Approve the NFT to be transferred
            await myCollection.approve(fxERC721RootAddress, tokenIds[i]);
            console.log(`Approved token ${tokenIds[i]} for transfer`);

            // Deposit Nfts to Bridge contract from where they will be deposited to amoy
            await fxContract.deposit(contractAddress, walletAddress,tokenIds[i], "0x6554"  );
            console.log(`Transferred token ${tokenIds[i]} to the bridge`);

        } catch (error) {
            console.error(`Error processing token ${tokenIds[i]}: ${error.message}`);
        }
    }
}

main()
   .then(() => process.exit(0))
   .catch((error) => {
        console.error(error);
        process.exit(1);
    });
