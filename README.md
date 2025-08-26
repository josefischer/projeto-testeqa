# Projeto QA - WebdriverIO com SauceDemo

Este projeto é um exemplo de **automação de testes de interface web** usando **WebdriverIO** com o site [SauceDemo](https://www.saucedemo.com).  
O teste realiza login, adiciona um produto ao carrinho, clica no carrinho e finaliza a compra do produto.

---

##  Estrutura do projeto
1. projeto-testeqa
    * Test
        * data
            * user.json
        * pageobjects
            * HomePage.js
            * Login.js
        * reports
        * specs
            * login.spec.js
        * utils
            * helpers.js
    * package.json
    * README.md
    * wdio.conf.js 

##  Execução dos testes

Executar o comando no prompt

**npx wdio run ./wdio.conf.js**


