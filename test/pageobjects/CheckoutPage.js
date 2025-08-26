class CheckoutPage {
    get inputFirstName() { return $('#first-name'); }
    get inputLastName() { return $('#last-name'); }
    get inputPostalCode() { return $('#postal-code'); }
    get btnContinue() { return $('#continue'); }

    async checkoutInformation(firstName, lastName, postalCode) {

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('checkout-step-one.html'),
            {
                timeout: 10000, // 10 segundos para garantir que carregou
                timeoutMsg: 'A página de preenchimento de informações de checkout não carregou'
            }
        );

        console.log('estou na pagina de informações de checkout');
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPostalCode.setValue(postalCode);

        await this.btnContinue.waitForClickable({ timeout: 5000 });
        await this.btnContinue.click();
    }
    
}

module.exports = new CheckoutPage();