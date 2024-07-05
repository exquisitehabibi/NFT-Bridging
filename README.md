# NFT Bridging

This project involves creating, minting, and bridging NFTs between Ethereum and Polygon. The process includes generating NFTs, storing them on IPFS, deploying a smart contract, minting NFTs, and transferring them using the FxPortal Bridge. 

## Description

The NFT Bridging project demonstrates the steps and best practices for NFT creation, storage, minting, and cross-chain bridging. Key features of this project include:

- **NFT Generation**: Creating a 5-item collection using DALL-E 2 or Midjourney.
- **IPFS Storage**: Storing NFT images on IPFS using Pinata.
- **Smart Contract Deployment**: Deploying an ERC721 or ERC1155 contract to the Goerli Ethereum Testnet.
- **Batch Minting**: Using Hardhat to mint all NFTs.
- **Cross-chain Bridging**: Transferring NFTs from Ethereum Sepolia to Polygon Amoy using the FxPortal Bridge.
- **On-chain Verification**: Testing the balance of NFTs on the Polygon Amoy network.

## Getting Started

### Executing Program

To run this program, Gitpod (https://www.gitpod.io/), VSCode or any ide of your choice can be used. Then follow these steps:

1. **Setup the Environment**:
   - Clone the project repository:
     ```sh
     git clone web_url_of_repository
     ```
   - Install the necessary dependencies:
     ```sh
     npm install
     ```

2. **Generate NFT Collection**:
   - If you already have the images, skip this step. Otherwise, generate a 5-item collection using DALL-E 2 or Midjourney and save the images locally.

3. **Store Items on IPFS**:
   - Upload the generated images to IPFS using Pinata (https://pinata.cloud/).
   - Note down the IPFS URLs for each image for use in the smart contract.

4. **Deploy ERC721 or ERC1155 Contract**:
   - Deploy the smart contract to the Sepolia Ethereum Testnet:
     ```sh
     npx hardhat run scripts/deploy.js --network sepolia
     ```

5. **Mint NFTs**:
   - Mint all NFTs using a Hardhat script:
     ```sh
     npx hardhat run scripts/BatchMinting.js --network sepolia
     ```

6. **Bridge NFTs**:
   - Approve and deposit NFTs to the FxPortal Bridge:
     ```sh
     npx hardhat run scripts/transferAll.js --network sepolia
     ```

7. **Test Balance on Polygon**:
   - Verify the NFT balance on the Polygon Amoy network:
     ```sh
     npx hardhat run scripts/balanceOf.js --network amoy
     ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Authors

Your Name  
GitHub: [@exquisitehabibi](https://github.com/exquisitehabibi)
