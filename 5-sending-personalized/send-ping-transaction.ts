import * as web3 from "@solana/web3.js";
import { Connection } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const transaction = new web3.Transaction();
const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
const programId = new web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");
const pingProgramDataId = new web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod");

const instruction = new web3.TransactionInstruction({
    keys: [
        {
        pubkey: pingProgramDataId,
        isSigner: false,
        isWritable: true,
        },
    ],
    programId,
});

async function Main(){ 
    transaction.add(instruction);
    const signature = await web3.sendAndConfirmTransaction(connection, transaction, [senderKeypair]);
    console.log(`✅ Transaction completed! Signature is ${signature}`);
    console.log(`You can view your transaction on Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`)
}

Main();