const hre = require("hardhat");

async function main() {
  // Get the first account from the Hardhat node to deploy the contract
  const [owner] = await hre.ethers.getSigners();

  // Get the contract factory based on the name of the contract
  const contractFactory = await hre.ethers.getContractFactory("GenerativeNFT");

  // Deploy the contract and wait for it to be mined
  const contract = await contractFactory.deploy();
  await contract.deployed();

  // Print out the contract address and owner address
  console.log("GenerativeNFT Contract deployed to:", contract.address);
  console.log("GenerativeNFT Contract owner address:", owner.address);
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
