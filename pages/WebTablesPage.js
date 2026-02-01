import { BasePage } from "./BasePage";

export class WebTablesPage extends BasePage {
  constructor(page) {
    super(page);

    this.botaoAdicionar = page.locator('#addNewRecordButton');
    this.botaoSubmit = page.locator('#submit');

    this.primeiroNome = page.locator('#firstName');
    this.ultimoNome = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.idade = page.locator('#age');
    this.salario = page.locator('#salary');
    this.departamento = page.locator('#department');

    // 🔥 Cada linha da tabela
    this.linhasTabela = page.locator('.rt-tr-group');
  }

  async abrirFormularioNovoRegistro() {
    await this.botaoAdicionar.click();
  }

  async preencherFormulario(dados) {
    await this.primeiroNome.fill(dados.primeiroNome);
    await this.ultimoNome.fill(dados.ultimoNome);
    await this.email.fill(dados.email);
    await this.idade.fill(dados.idade);
    await this.salario.fill(dados.salario);
    await this.departamento.fill(dados.departamento);
  }

  async salvarRegistro() {
    await this.botaoSubmit.click();
  }

  /**
   * 🔍 Verifica se existe uma linha com TODOS os dados informados
   */
  async registroExisteNaTabela(dados) {
    const totalLinhas = await this.linhasTabela.count();

    for (let i = 0; i < totalLinhas; i++) {
      const linha = this.linhasTabela.nth(i);
      const textoLinha = await linha.innerText();

      const registroEncontrado =
        textoLinha.includes(dados.primeiroNome) &&
        textoLinha.includes(dados.ultimoNome) &&
        textoLinha.includes(dados.email) &&
        textoLinha.includes(dados.idade) &&
        textoLinha.includes(dados.salario) &&
        textoLinha.includes(dados.departamento);

      if (registroEncontrado) {
        return true;
      }
    }

    return false;
  }
}
