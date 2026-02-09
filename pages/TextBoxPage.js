import { BasePage } from "./BasePage";

export class TextBoxPage extends BasePage {
  constructor(page) {
    super(page);

    // Inputs
    this.nome = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.enderecoAtual = page.locator('textarea#currentAddress');
    this.enderecoPermanente = page.locator('textarea#permanentAddress');
    this.botaoSubmit = page.locator('#submit');
    this.resultado = page.locator('#output');

    // 🔥 Outputs (ESCOPADOS)
    this.outputContainer = page.locator('#output');
    this.outputNome = this.outputContainer.locator('#name');
    this.outputEmail = this.outputContainer.locator('#email');
    this.outputEnderecoAtual =
      this.outputContainer.locator('#currentAddress');
    this.outputEnderecoPermanente =
      this.outputContainer.locator('#permanentAddress');
  }

  async devePreencherFormulario() {
    await this.nome.fill('Carol QA');
    await this.email.fill('carol@email.com');
    await this.enderecoAtual.fill("Rua QA");
    await this.enderecoPermanente.fill("Rua Automação");

    await this.botaoSubmit.scrollIntoViewIfNeeded();
    await this.botaoSubmit.click();
  }
}
