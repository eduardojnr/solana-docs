import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

async function main() {
    try{
        const connection = new Connection(clusterApiUrl("devnet"));
        const address = new PublicKey("98q9c74cbc2T7XsD2w4obJuRGQwWBGgvsmp3cpgP4MBv");
        const balance = await connection.getBalance(address);
        const balanceInSol = balance / LAMPORTS_PER_SOL;
        console.log(`The balance of the account at ${address} is ${balanceInSol} lamports`);
        console.log(`✅ Finished!`);
    } catch (error) {
        console.error("Error getting balance", error);
        return;
    } 
}

main().catch(console.error);
