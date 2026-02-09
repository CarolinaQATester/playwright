import { BasePage } from "./BasePage";

export class ElementsMenuPage {
  constructor(page) {
    this.page = page;

    this.textBox = page.locator('span:text("Text Box")');
    this.checkBox = page.locator('span:text("Check Box")');
    this.radioButton = page.locator('span:text("Radio Button")');
    this.webTables = page.locator('span:text("Web Tables")');
    this.buttons = page.locator('span:text("Buttons")');
    this.links = page.locator('span:text("Links")');
    this.brokenLinks = page.locator('span:text("Broken Links - Images")');
    this.uploadDownload = page.locator('span:text("Upload and Download")');
    this.dynamicProperties = page.locator('span:text("Dynamic Properties")');
  }

  async acessarTextBox() {
    await this.textBox.click();
  }

  async acessarCheckBox() {
    await this.checkBox.click();
  }

  async acessarRadioButton() {
    await this.radioButton.click();
  }

  async acessarWebTables() {
    await this.webTables.click();
  }

  async acessarButtons() {
    await this.buttons.click();
  }

  async acessarLinks() {
    await this.links.click();
  }

  async acessarBrokenLinks() {
    await this.brokenLinks.click();
  }

  async acessarUploadDownload() {
    await this.uploadDownload.click();
  }

  async acessarDynamicProperties() {
    await this.dynamicProperties.click();
  }
}


