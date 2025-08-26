
Pork: Seu Cofrinho Digital
Este projeto é uma ferramenta de gestão financeira digital, desenvolvida para ajudar os usuários a controlar gastos, economizar dinheiro e atingir metas financeiras. O "Pork" atua como um auxiliar financeiro digital que oferece organização e praticidade.

Recursos Principais
Plano de Economia: Oferece planos de economia personalizados para auxiliar o usuário a fazer da economia parte da rotina.

Registro de Gastos: Permite registrar e organizar despesas.

Metas de Economia: Permite a definição de objetivos para motivar o usuário a economizar dinheiro.

Organização Financeira: Oferece uma visão clara de onde o dinheiro está sendo gasto, com a capacidade de categorizar despesas e gerenciar contas em um só lugar.

Experiência Individual: As metas podem ser personalizadas de acordo com os sonhos de cada usuário.

Tecnologias e Dependências
O projeto foi construído utilizando as seguintes tecnologias:

Frontend
React

Vite

Axios: Para chamadas de API

SweetAlert2: Para mensagens de alerta

React Router DOM: Para navegação entre páginas

Tailwind CSS: Para estilos e design

AOS: Para animações

React Icons: Para ícones

React Slick: Para carrosséis

Eslint: Para padronização de código

Estrutura do Projeto
O projeto é estruturado em diferentes páginas e componentes, conforme a necessidade de navegação e reusabilidade.

Páginas
LandingPage.jsx: Página de apresentação do projeto

LoginPage.jsx: Página de login

RegisterPage.jsx: Página de registro

MainPage.jsx: A página principal onde os usuários podem acessar as funcionalidades

VerifyPage.jsx: Página de verificação de e-mail

ChangePasswordPage.jsx: Página para redefinir a senha

Componentes
Navbar.jsx e Footer.jsx: Componentes de navegação e rodapé

Input.jsx: Componente de campo de entrada

PrivateRoute.jsx: Componente para proteger rotas

CardApresentacaoEsq.jsx e CardApresentacaoDir.jsx: Cards de apresentação dos desenvolvedores

CarouselLanding.jsx e CarouselLandingMobile.jsx: Carrosséis para a página de aterragem

CardWindow.jsx e headerPages.jsx: Componentes para a MainPage

Como Executar o Projeto
Instale as dependências:

Bash

npm install
Execute o servidor de desenvolvimento:

Bash

npm run dev
Acesse a aplicação:
Abra seu navegador e acesse a URL fornecida pelo Vite.

Para compilar o projeto para produção, utilize o seguinte comando:

Bash

npm run build
Desenvolvedores
Bernardo Soares

Função: Desenvolvedor Front-end

Redes sociais: Instagram, GitHub, LinkedIn

João Vitor Chaves

Função: Desenvolvedor Back-end

Redes sociais: Instagram, GitHub, LinkedIn

Notas Técnicas
O sistema de autenticação foi corrigido para garantir a persistência da sessão e um fluxo de login e logout mais suave. As correções incluem a refatoração do contexto de autenticação, a correção do componente de rota privada e a configuração global do Axios para enviar cookies automaticamente com as credenciais. Além disso, as referências de imagem foram atualizadas para caminhos absolutos para garantir o carregamento correto em todos os ambientes.
