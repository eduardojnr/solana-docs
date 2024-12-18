import { Connection, Transaction, SystemProgram, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const senderKeypair = getKeypairFromEnvironment("SECRET_KEY"); // Variável de ambiente no sistema [1, 2, 3, ...]
const recipientKeypair = new PublicKey("98q9c74cbc2T7XsD2w4obJuRGQwWBGgvsmp3cpgP4MBv");
const lamportsToSend = 1;

//console.log(`${senderKeypair}`);

async function main() {
    const sendSolInstruction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: senderKeypair.publicKey,
            toPubkey: recipientKeypair,
            lamports: lamportsToSend
        })
    );

    const signature = await sendAndConfirmTransaction(connection, sendSolInstruction, [senderKeypair]);
    console.log(`Finished! Sent ${lamportsToSend} to the address ${recipientKeypair}.`);
    console.log(`Transaction signature is ${signature}!`);
}

main()
