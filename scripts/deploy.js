const hre = require("hardhat");

async function main() {
  const prompts = [
    "Prompt 1",
    "Prompt 2",
    "Prompt 3",
    "Prompt 4",
    "Prompt 5"
  ];

  const MyCollection = await hre.ethers.getContractFactory("MyCollection");
  const myCollection = await MyCollection.deploy(prompts);

  await myCollection.waitForDeployment();

  console.log("MyCollection deployed to:", await myCollection.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
