import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['example.com'], // Adicione domínios de onde você vai carregar imagens
  },
  reactStrictMode: true, // Ativa o modo estrito do React para ajuda no desenvolvimento
};

export default nextConfig;