# 🎬 Guia de Filmes e Séries

Aplicativo mobile desenvolvido com **React Native + Expo** para ajudar usuários a descobrir filmes e séries com informações detalhadas e navegação simples.

---

## 📱 Telas

| Filmes | Séries | Detalhes | Menu |
|--------|--------|----------|------|
| Lista de filmes com card, imagem, descrição e avaliação | Lista de séries no mesmo padrão | Imagem ampliada, sinopse, gênero e nota | Drawer com Início, Sobre e Contato |

---

## 🚀 Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/) — Drawer + Bottom Tabs + Stack
- [React Native Paper](https://callstack.github.io/react-native-paper/) — biblioteca de UI
- [Expo Vector Icons](https://icons.expo.fyi/)

---

## 🧭 Navegação

```
Drawer
├── Início
│   └── TabBar
│       ├── 🎬 Filmes → Lista → Detalhes
│       └── 📺 Séries → Lista → Detalhes
├── Sobre
└── Contato
```

---

## 📂 Estrutura de Pastas

```
GuiaFilmes/
├── App.js
├── babel.config.js
├── package.json
└── src/
    ├── navigation/
    │   ├── DrawerNavigator.js
    │   └── TabNavigator.js
    ├── screens/
    │   ├── FilmesScreen.js
    │   ├── SeriesScreen.js
    │   └── DetalhesScreen.js
    ├── components/
    │   └── MediaCard.js
    └── data/
        ├── filmes.json
        └── series.json
```

---

## ⚙️ Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [Expo Go](https://expo.dev/go) no celular **ou** navegador

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ferrnd/mobile-app-cinestream.git

# Entre na pasta
cd guia-filmes-series

# Instale as dependências
npm install
```

### Rodando no celular (Expo Go)

```bash
npx expo start
```
Escaneie o QR code com o app **Expo Go**.

### Rodando no navegador

```bash
npx expo install react-native-web react-dom @expo/metro-runtime
npx expo start --web
```

---

## ✅ Funcionalidades

- [x] Navegação com **Bottom Tabs** (Filmes e Séries)
- [x] **Drawer** lateral com Início, Sobre e Contato
- [x] Lista de itens com imagem, nome e descrição
- [x] Tela de detalhes com sinopse completa, gênero e avaliação
- [x] Passagem de parâmetros via `route.params`
- [x] Dados carregados de **JSON local**
- [x] Interface dark theme organizada
- [x] Biblioteca de UI **React Native Paper** ⭐

---

## 👨‍💻 Desenvolvido por

Feito com 💻 por Fernando Santos — Projeto escolar de React Native.
