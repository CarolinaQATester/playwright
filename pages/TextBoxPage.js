import{ BasePage } from "./BasePage";

export class TextBoxPage extends BasePage {
    constructor(page){
        super(page);
    

    this.fullName = page.locator("#userName");
    this.email = page.locator("#userEmail");
    this.currentAddress = page.locator("#currentAddress");
    this.permanentAddress = page.locator("#permanentAddress");
    this.submit = page.locator("#submit");
    this.resultado = page.locator("#output")
    }

    async devePreencherFormulario(){
        await this.fullName.fill('Carolina');
        await this.email.fill('teste@teste.com');
        await this.currentAddress.fill('teste');
        await this.permanentAddress.fill('teste teste')
        await this.submit.click();
    }
}