my-smart-contract
===

# Truffle

This repository is managed by truffle.

```
truffle init
```

Test

```
truffle test
```

Create Contract
```
truffle create contract PartyParrotToken
```

# Ganache

[Install Ganache](https://github.com/trufflesuite/ganache)

Personal blockchain for Ethereum development

```
truffle migrate --network "deployment"
```

# Solidity

[Install Solidity](https://solidity.readthedocs.io/en/v0.5.11/installing-solidity.html)

```
npm install -g solc
solcjs --version

solcjs contracts/PartyParrotToken.sol --abi
```
