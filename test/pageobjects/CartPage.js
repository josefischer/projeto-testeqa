class CartPage {

    /**
     * Realiza o checkout do produto no carrinho.
     * Aguarda a página do carrinho carregar, verifica se o botão está clicável e clica.
     */
    async checkoutProduct() {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('cart.html'),
            {
                timeout: 10000, // 10 segundos para garantir que carregou
                timeoutMsg: 'A página do carrinho não carregou'
            }
        );

        // Log para depuração
        console.log('[CartPage] Estou na página do carrinho');

        // Seleciona o botão de checkout
        const checkoutButton = await $('#checkout');
        await checkoutButton.waitForClickable({ timeout: 5000 });
    await checkoutButton.click();

    // Captura screenshot após o clique no checkout
    await browser.saveScreenshot(`./test/reports/screenshots/checkout_${Date.now()}.png`);
    }
    
}

// Exporta uma instância da página do carrinho
module.exports = new CartPage();