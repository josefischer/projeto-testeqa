class HomePage {

    async addToCart(productName) {

        // espera até a página de inventário carregar
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('inventory.html'),
            {
                timeout: 10000, // 10 segundos para garantir que carregou
                timeoutMsg: 'A página de inventário não carregou após login'
            }
        );

        const buttonId = `add-to-cart-${productName.toLowerCase().replace(/\s+/g, '-')}`;
        const button = await $(`#${buttonId}`);

        // Espera até o botão estar visível
        await button.waitForExist({ timeout: 5000 });

        await button.click();

        // Clica no carrinho
        const cartButton = await $('#shopping_cart_container a');
        await cartButton.waitForDisplayed({ timeout: 5000 });
        await cartButton.click();

    }
}

module.exports = new HomePage();