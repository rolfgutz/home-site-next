import { useEffect } from "react";
import Layout from "../components/Layout";
import { getFirestore } from "firebase/firestore";
import fireapp  from "../lib/firebase";  // Caminho para o arquivo de configuração do Firebase

export default function Home() {
    useEffect(() => {
        // Obtenha a instância do Firestore
        const db = getFirestore(fireapp);

        // Verifique a conexão com o Firebase
        console.log("Firebase Firestore conectado", db);
    }, []);  // O array vazio garante que o useEffect seja executado apenas uma vez

    return (
        <Layout>
            <h1 className="text-4xl font-bold">Hello, Next.js com Tailwind!</h1>
            <p className="text-lg text-gray-700 mt-2">Configuração do CI/CD com GitHub Actions</p>
        </Layout>
    );
}
