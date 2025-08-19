
# 🇺🇸 EUA Afora em React

-----

##  Descrição do Projeto

Este projeto foi criado com o objetivo principal de **desenvolver habilidades em React**, servindo como um estudo de caso prático para a **migração de uma aplicação construída com JavaScript puro para o framework React**. O foco é converter um site funcional e interativo em uma aplicação moderna e baseada em componentes, usando o Vite como ferramenta de build.

-----

##  Objetivos de Aprendizagem

  - Configurar um projeto React com Vite.
  - Converter HTML para JSX.
  - Criar e organizar componentes React.
  - Implementar a reutilização de componentes.
  - Gerenciar `props` e `children`.
  - Estruturar pastas de forma organizada.

-----

##  Tecnologias Utilizadas

  - **React**: Biblioteca JavaScript para interfaces.
  - **Vite**: Ferramenta de build rápida.
  - **JSX**: Extensão de sintaxe JavaScript.
  - **CSS**: Estilização (migrada do projeto anterior).

-----

## 🛠 Configuração Inicial

1.  **Criar o Repositório**

    ```bash
    # Clone o repositório
    git clone git@github.com:MayzaMendesRodrigues/web_project_around_react.git
    cd web_project_around_react
    ```

    ```bash
    # Criar projeto React com Vite
    npm create vite@latest .
    # Selecione: React → JavaScript
    ```

    ```bash
    # Instalar dependências
    npm i
    ```

2.  **Configurar Scripts e Porta**

    **`package.json`**:

    ```json
    "scripts": {
      "dev": "vite --open",
      "build": "vite build",
      "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
    }
    ```

    **`vite.config.js`**:

    ```javascript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      server: {
        port: 3000,
      },
    });
    ```
