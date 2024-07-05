const { ethers } = require("hardhat");
require('dotenv').config();

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const metadataURIs = [
        "ipfs://<Enter your token metadata URI>",
        "ipfs://<Enter your token metadata URI>",
        "ipfs://<Enter your token metadata URI>",
        "ipfs://<Enter your token metadata URI>",
        "ipfs://<Enter your token metadata URI>"
    ];

    
        const deployedContractAddress = process.env.CONTRACT_ADDR; 
    
        // Get the ABI from the artifacts
        const MyCollectionArtifact = require('../artifacts/contracts/MyCollection.sol/MyCollection.json');
        const myCollection = new ethers.Contract(deployedContractAddress, MyCollectionArtifact.abi, deployer);
    
        console.log("Interacting with contract at address:", deployedContractAddress);
    
        for (let i = 0; i < metadataURIs.length; i++) {
            await myCollection.mint(deployer.address, i, metadataURIs[i]);
            console.log(`Minted NFT ${i} to ${deployer.address}`);
        }
    }
    
    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
