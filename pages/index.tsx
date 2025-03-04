import { useEffect } from "react";
import Layout from "../components/Layout";
import { getFirestore } from "firebase/firestore";
import fireapp from "../lib/firebase"; // Caminho para o arquivo de configuração do Firebase

export default function Home() {
  useEffect(() => {
    // Obtenha a instância do Firestore
    const db = getFirestore(fireapp);

    // Verifique a conexão com o Firebase
    console.log("Firebase Firestore conectado", db);
  }, []); // O array vazio garante que o useEffect seja executado apenas uma vez

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
        <div className="text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4 animate-pulse">Oi, meu amor! 💖</h1>
          <p className="text-lg text-gray-100 mb-4">
            Estou trabalhando e estudando nesse projeto, mas estou aqui para te mostrar que te amo muito! 💫
          </p>

          {/* Coração animado */}
          <div className="animate-pulse text-6xl">❤️</div>

          <p className="mt-4 text-sm text-gray-200">
            Estou sempre pensando em você! 💕
          </p>
        </div>
      </div>
    </Layout>
  );
}
