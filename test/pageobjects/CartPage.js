class CartPage {

    async checkoutProduct() {

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('cart.html'),
            {
                timeout: 10000, // 10 segundos para garantir que carregou
                timeoutMsg: 'A página do checkout não carregou'
            }
        );

        console.log('estou na pagina de checkout');
        const checkoutButton = await $('#checkout');
        await checkoutButton.waitForClickable({ timeout: 5000 });
        await checkoutButton.click();
    }
    
}

module.exports = new CartPage();