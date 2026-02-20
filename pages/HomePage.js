import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
  constructor(page) {
    super(page);
    this.elementsCard = page.locator('h5:text("Elements")');
  }

 
  async acessarElements() {
    await this.elementsCard.click();
  }
}
