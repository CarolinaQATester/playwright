export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async acessarHome() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }
}
