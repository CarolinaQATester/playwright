import { BasePage } from "./BasePage";

export class RadioButtonPage extends BasePage {

    constructor(page){
        super(page);

        this.yesRadio = page.locator("label[for='yesRadio']");
        this.impressiveRadio = page.locator("label[for='impressiveRadio']");
        this.resultados = page.locator('.text-success');
    }

    async deveClicarNoYes(){
        await this.yesRadio.click();
    }

    async deveClicarNoImpressive(){
        await this.impressiveRadio.click();
    }
}
