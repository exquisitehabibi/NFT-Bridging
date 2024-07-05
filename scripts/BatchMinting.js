const { ethers } = require("hardhat");
require('dotenv').config();

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const metadataURIs = [
        "ipfs://QmUeDuX3QEbwzADdeDgD3soDShxjn6crfgWRgrLSi4d9w2",
        "ipfs://QmWqXXBHdBK4HZ6MNuvdFZ2E7ecbqHDvWnYAWAngZ95RpC",
        "ipfs://QmaaTSbBcrgEKd2v5P4Wkkmj4ry5Trc9kSsMdvVCxc2hG5",
        "ipfs://QmQdY8CTYFpZgTVjo3K4FDtnmpRFfVb9Dt1ZVFK5KVwuoX",
        "ipfs://QmXvdP5sZMQ9wBBHRSjg7SmKDpYgv4DaQrxN6292iLmPDh"
    ];

    
        const deployedContractAddress = process.env.CONTRACT_ADDR; //change with sepolia
    
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