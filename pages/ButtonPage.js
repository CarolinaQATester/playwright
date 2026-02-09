import { BasePage } from "./BasePage";

export class ButtonPage extends BasePage {

    constructor(page) {
        super(page);

        this.doubleClickMe = page.locator('#doubleClickBtn');
        this.rightClickBtn = page.locator('#rightClickBtn');
        this.clickMe = page.locator("//button[text()='Click Me']");

        this.doubleClickMessage = page.locator('#doubleClickMessage');
        this.rightClickMessage = page.locator('#rightClickMessage');
        this.dynamicClickMessage = page.locator('#dynamicClickMessage');
    }

    async deveClicarDoubleClickMe() {
        await this.doubleClickMe.dblclick();
    }

    async deveClicarRightClickBtn() {
        await this.rightClickBtn.click({ button: 'right' });
    }

    async deveClicarClickMe() {
        await this.clickMe.click();
    }
}
