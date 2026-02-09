import { BasePage } from "./BasePage";

export class LinkPage extends BasePage{

    constructor(page){
        super(page);

        this.simpleLink = page.locator('#simpleLink');
        this.created = page.locator('#created');
        this.no_content = page.locator('#no-content');
        this.moved = page.locator('#moved');
        this.bad_request = page.locator('#bad-request');
        this.unauthorized = page.locator('#unauthorized');

    }

    async deveClicarHome(){
        await this.simpleLink.click();
    }
    async deveClicarCreated() {
        await this.created.click();
    }
    async deveClicarNoContent(){
        await this.no_content.click();
    }
    async deveClicarMoved(){
        await this.moved.click();
    }
    async deveClicarBadRequest(){
        await this.bad_request.click();
    }
    async deveClicarUnauthorized(){
        await this.unauthorized.click();
    }
}