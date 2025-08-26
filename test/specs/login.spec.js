const assert = require('assert');
const LoginPage = require('../pageobjects/LoginPage');
const HomePage = require('../pageobjects/HomePage');
const CartPage = require('../pageobjects/CartPage');
const CheckoutPage = require('../pageobjects/CheckoutPage');
const CheckoutCompletePage = require('../pageobjects/CheckoutCompletePage');
const users = require('../data/user.json');
const CheckoutOverviewPage = require('../pageobjects/CheckoutOverviewPage');




describe('Login, add produto no carrinho e finaliza compra', () => {
    it('deve logar e add produto', async () => {

        const baseUrl = 'https://www.saucedemo.com'; // URL correta
        const productName = 'Sauce Labs Backpack';

        await browser.url(baseUrl); // abre página de login

        await LoginPage.login(users.validUser.username, users.validUser.password);
       
        // adiciona produto ao carrinho
        await HomePage.addToCart(productName);

        // Clica no botão Checkout
        await CartPage.checkoutProduct();

        // Preenche os dados do checkout e clica no botão Continue

        await CheckoutPage.checkoutInformation(users.checkoutUser.firstname,users.checkoutUser.lastname, users.checkoutUser.postalcode)

        // Finalizar compra

        await CheckoutOverviewPage.checkoutFinish();

        // Validar mensagem de sucesso de compra
        await CheckoutCompletePage.validateSuccessMessage();

        // pausa para verificar 
        await browser.pause(3000);


    });
});

