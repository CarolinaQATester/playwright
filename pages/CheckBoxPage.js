import { BasePage } from "./BasePage";

export class CheckBoxPage extends BasePage{

    constructor(page){
        super(page);

        this.home =  page.locator("//label[@for='tree-node-home']");

        this.expandir = page.locator("//button[@title='Expand all']");
        this.notas = page.locator("//span[contains(text(),'Notes')]");
        this.resultados = page.locator("#result");
    }

    async selecionarHome(){
        await this.home.click();
    }

    async selecionarNotasDesktop(){
        await this.expandir.click();
        await this.notas.click();
        
    }

}