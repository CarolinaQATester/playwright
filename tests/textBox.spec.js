import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import { HomePage } from '../pages/HomePage';
import { ElementsMenuPage } from '../pages/ElementsMenuPage';

test('Acessar página Links via menu Elements', async ({ page }) => {
  const home = new HomePage(page);
  const menu = new ElementsMenuPage(page);

  await home.acessarHome();
  await home.acessarElements();

  await menu.acessarTextBox();

  await expect(page).toHaveURL('/text-box');
});

test('Preencher Text box com sucesso', async ({page}) => {
  const home = new HomePage(page);
  const menu = new ElementsMenuPage(page);
  const textBox = new TextBoxPage(page);

  

  await home.acessarHome();
  await home.acessarElements();

  await menu.acessarTextBox();

  await textBox.devePreencherFormulario();

  await expect(textBox.resultado).toBeVisible();
});

test('Validar campos do output do Text Box', async ({ page }) => {
  const home = new HomePage(page);
  const menu = new ElementsMenuPage(page);
  const textBox = new TextBoxPage(page);

 

  await home.acessarHome();
  await home.acessarElements();

  await menu.acessarTextBox();

  await textBox.devePreencherFormulario();

  await expect(textBox.outputNome).toHaveText('Name:Carol QA');
  await expect(textBox.outputEmail).toHaveText('Email:carol@email.com');
  await expect(textBox.outputEnderecoAtual)
    .toHaveText('Current Address :Rua QA');
  await expect(textBox.outputEnderecoPermanente)
    .toHaveText('Permananet Address :Rua Automação');
});
