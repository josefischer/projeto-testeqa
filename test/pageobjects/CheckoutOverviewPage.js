class CheckoutOverviewPage {

    async checkoutFinish() {

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('checkout-step-two.html'),
            {
                timeout: 10000, // 10 segundos para garantir que carregou
                timeoutMsg: 'A página do checkout overview não carregou'
            }
        );

        console.log('estou na pagina de checkout overview');
        const checkoutButton = await $('#finish');
        await checkoutButton.waitForClickable({ timeout: 5000 });
        await checkoutButton.click();
    }
    
}

module.exports = new CheckoutOverviewPage();