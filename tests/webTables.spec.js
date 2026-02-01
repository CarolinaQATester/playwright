import { test, expect } from '@playwright/test';
import { WebTablesPage } from '../pages/WebTablesPage';

test('Validar se os dados cadastrados estão na Web Table', async ({ page }) => {
  const webTables = new WebTablesPage(page);

  const dadosUsuario = {
    primeiroNome: 'Carol',
    ultimoNome: 'QA',
    email: 'carol@qa.com',
    idade: '30',
    salario: '9000',
    departamento: 'Qualidade'
  };

  await webTables.acessar('https://demoqa.com/webtables');
  await webTables.abrirFormularioNovoRegistro();
  await webTables.preencherFormulario(dadosUsuario);
  await webTables.salvarRegistro();

  const registroExiste = await webTables.registroExisteNaTabela(dadosUsuario);

  expect(registroExiste).toBe(true);
});
