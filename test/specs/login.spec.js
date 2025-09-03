const assert = require('assert');
const helpers = require('../utils/helpers');
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
    await helpers.takeScreenshot('01_login_page');

    await LoginPage.login(users.validUser.username, users.validUser.password);
    await helpers.takeScreenshot('02_after_login');
       
        // adiciona produto ao carrinho
    await HomePage.addToCart(productName);
    await helpers.takeScreenshot('03_after_add_to_cart');

        // Clica no botão Checkout
    await CartPage.checkoutProduct();
    await helpers.takeScreenshot('04_after_checkout_cart');

        // Preenche os dados do checkout e clica no botão Continue

    await CheckoutPage.checkoutInformation(users.checkoutUser.firstname,users.checkoutUser.lastname, users.checkoutUser.postalcode)
    await helpers.takeScreenshot('05_after_checkout_info');

        // Finalizar compra

    await CheckoutOverviewPage.checkoutFinish();
    await helpers.takeScreenshot('06_after_checkout_finish');

        // Validar mensagem de sucesso de compra
    await CheckoutCompletePage.validateSuccessMessage();
    await helpers.takeScreenshot('07_success_message');

        // pausa para verificar 
        await browser.pause(3000);


    });
});

