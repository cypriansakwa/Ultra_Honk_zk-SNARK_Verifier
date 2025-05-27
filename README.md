# Ultra Honk zk-SNARK Verifier

This repository contains an Ethereum-compatible zk-SNARK verifier smart contract implementing the **Ultra Honk** proving system, a test for that contract, and a Hardhat Ignition module that deploys that contract. It includes verification logic, custom field operations, elliptic curve utilities, and Fiat-Shamir transcript generation, all optimized for zero-knowledge proof verification in Solidity.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```


## 🚀 Features

- zk-SNARK verifier for Ultra Honk
- Efficient finite field arithmetic (`Fr`) with modular inversion via precompiles
- Support for:
  - Permutation & lookup arguments
  - Arithmetic & delta range constraints
  - Elliptic curve and auxiliary relations
- Fiat-Shamir transcript generation
- G1 point compression & decompression for calldata-friendly proof parsing

## 🛠️ Structure

- `FrLib`: Finite field arithmetic over BN254 scalar field `Fr`.
- `Honk`: Data structures for proofs, verification keys, and challenges.
- `TranscriptLib`: Fiat-Shamir challenge generation from a zk-proof.
- `RelationsLib`: Evaluates relation constraints for proof verification.
- `HonkVerificationKey`: Hardcoded verification key for a specific circuit.
- `pairing(...)`: Bilinear pairing checks using Ethereum's BN254 precompile.
## 📦 Prerequisites

To build or test this contract, you will need:

- [Node.js](https://nodejs.org/) (v16 or newer)
- [Foundry](https://book.getfoundry.sh/) or [Hardhat](https://hardhat.org/)
- `solc` version `>=0.8.21`
- Git

If you plan to test locally or simulate proof verifications, you'll also need:

- An Ethereum development node (e.g. [Anvil](https://book.getfoundry.sh/reference/anvil/))
- Sample proof and VK inputs (not included here)

---

## 🔧 Installation
Clone this repository
```bash
git clone https://github.com/cypriansakwa/Ultra_Honk_zk-SNARK_Verifier.git
cd Ultra_Honk_zk-SNARK_Verifier
```
## 🧪 Usage

This contract is not meant to be deployed directly. Instead, it serves as a reference or dependency for a larger verifier system.

To verify a proof:

1. Load the verification key using `HonkVerificationKey.loadVerificationKey()`.
2. Parse the proof bytes using `TranscriptLib.loadProof(bytes)`.
3. Generate Fiat-Shamir challenges using `TranscriptLib.generateTranscript(...)`.
4. Recompute and evaluate all constraints via `RelationsLib`.
5. Perform a final bilinear pairing check with `pairing(...)`.

## 📦 Dependencies

- Solidity `>=0.8.21`
- No external libraries required (only Ethereum precompiles used)

## 🧩 Circuit Parameters

- Circuit size: `2^12 = 4096`
- Number of public inputs: `0`
- Constant parameters:
  - `CONST_PROOF_SIZE_LOG_N = 28`
  - `NUMBER_OF_SUBRELATIONS = 26`
  - `NUMBER_OF_ENTITIES = 40`
  - `NUMBER_OF_ALPHAS = 25`

## 📖 Reference

This contract is adapted from internal tooling at [Aztec Protocol](https://aztec.network/) and reflects the Ultra Honk proving system described in their zk-SNARK architecture.

