# Export to QuickBooks

This simple repo tries to explain the GitHub bounty that enables creating an automated "Export to QuickBooks" button for the [TrueBlocks Account Explorer](https://github.com/TrueBlocks/trueblocks-explorer). We've greatly simplified the problem by providing mocked data.

## Install

To get started, clone and get this simple React app working.

```
git clone git@github.com:TrueBlocks/qb-export.git
cd qb-export
yarn install
yarn start
```

The above instructions will open a small app that looks like this:

![image](https://user-images.githubusercontent.com/5417918/128114376-87bc321b-0baa-4b7b-b0dc-e359c93b8feb.png)

The goal is to enable the functionality inside of the `onExport` function in the file `./src/App.tsx`.

The data is relatively self explanitory, but in summary:

The data is an object with one key field that is an array of `Transactions`:

```
{ data: [... Transactions ...] }
```

Transactions have many fields, but the only one of interest for this bounty is the `statements` field which is itself an array of `Reconciliations`.

{ statments: [... Reconciliations ...]}

Each reconciliation contains two particular fields that identify the asset being reconciled:

`assetAddr:` The address of the ERC20 or ERC721 token or the 'accounted for' address if `assetSymbol` is `ETH`.
`assetSymbol:` The token symbol for the address (may be empty, in which case we use the first five characters of the address).

Use `assetAddr` as the account number in QuickBooks as it is a unique identifier.

The remaining fields should be self-explanitory, but the bounty solver may ask questions here.

## The Goal

**Primary Bounty:** (1,250 DAI) The goal is a file in an appropriate format for import into QuickBooks online. Prior to completing the work, the applicant will discuss this format with us for our approval and understanding.

**Bonus:** (250 DAI) A file format that allows for import to other crypto accounting software including but not limited to Rotki, Token Tax, Gilded, etc.

**Bonus:** (250 DAI) Export of .csv and .tab text files

We will pay using the DAI stable coin.