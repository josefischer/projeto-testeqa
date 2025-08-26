module.exports = {
    async takeScreenshot(name) {
        await browser.saveScreenshot(`./test/reports/${name}.png`);
    }
};