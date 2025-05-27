const hre = require("hardhat");

async function main() {
  const Verifier = await hre.ethers.getContractFactory("HonkVerifier"); // or Verifier if that's the class name
  const verifier = await Verifier.deploy();

  await verifier.waitForDeployment(); // ✅ Correct way to wait in ethers v6+
  console.log("Verifier deployed to:", verifier.target); // `target` replaces `address` in ethers v6
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
