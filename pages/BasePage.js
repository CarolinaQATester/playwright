export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async acessarHome() {
    await this.page.goto('https://demoqa.com/', 
      { waitUntil: 'domcontentloaded' });
  }
}
