const assert = require('assert');

class CheckoutCompletePage {
    async validateSuccessMessage() {
        const successMessage = await $('.complete-header');
        const text = await successMessage.getText();

        assert.strictEqual(
            text,
            'Thank you for your order!',
            `Mensagem incorreta. Esperado: "Thank you for your order!", Obtido: "${text}"`
        );
    }
}

module.exports = new CheckoutCompletePage();