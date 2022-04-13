# EletroLucas

Trabalho final da matéria de Interação Humano Computador, com a professora Fernanda Lima. Universidade de Brasília (UnB), semestre 2021/2.

O trabalho se resume em um aplicativo "hub" de aparelhos inteligentes, que consegue controlar qualquer aparelho IoT. O aplicativo implementado não controle realmente aparelhos, mas simula este comportamento.

O front foi feito em React-Native para execução nativa em celulares. Não há exatamente o backend bem definido, usamos armazenamento interno para guardar dados que normalmente iriam para um banco de dados.

## Como utilizar em produção

O Aplicativo foi compilado apenas para Android (cheque na aba de releases), mas o código é completamente compatível com IOS.

Para instalar no Android, basta baixar o binário e executá-lo no seu dispositivo.

## Como utilizar em desenvolvimento

Instale o **nodejs** e o **npm (node package manager)**.

Em seguida, usando o npm, instale o Expo CLI:

```bash
npm install -g expo-cli
```

Clone o projeto em uma pasta, entre na pasta e instale as dependências:

```bash
git clone https://github.com/ABMHub/EletroLucas.git
cd EletroLucas
npm install
```

Finalmente, rode o projeto no ambiente de desenvolvimento:

```bash
npm start
```

Para ver a execução do projeto, existem duas opções: utilizando o Android Studio ou Usando o Expo, que consegue simular o aplicativo diretamente no celular, sem a necessidade de build. As instruções aparecerão no terminal quando assim que o último comando for executado.