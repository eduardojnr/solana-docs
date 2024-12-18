import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente

// Imprime todas as variáveis para depuração
console.log("Todas as variáveis de ambiente:", process.env);

// Acessa e imprime a variável SECRET_KEY
const secretKey = process.env["SECRET_KEY"];

if (secretKey) {
  console.log(`SECRET_KEY carregada com sucesso: ${secretKey}`);
} else {
  console.error("ERROR: SECRET_KEY não encontrada.");
}