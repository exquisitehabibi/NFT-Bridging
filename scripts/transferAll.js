const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyCollection.sol/MyCollection.json");
require('dotenv').config();

const contractAddress = process.env.CONTRACT_ADDR;
const contractABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0x421DbB7B5dFCb112D7a13944DeFB80b28eC5D22C";
const walletAddress = "0xbeEF51912Bf30B21a361a953978790645cF680d7";
const toAddress = "0xc365eDFC968cCb5eb19704337e6e7E3724fd1ddd";

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

            // Transfer the NFT to the Bridge using safeTransferFrom
            await fxContract.transferFrom( walletAddress,toAddress, tokenIds[i]);
            
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
