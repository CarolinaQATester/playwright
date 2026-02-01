import { test, expect} from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';

test('Preencher Text box com sucesso', async ({page}) => {
    const textBox = new TextBoxPage(page);

    await textBox.acessar('https://demoqa.com/text-box');
    await textBox.devePreencherFormulario();

    await expect(textBox.resultado).toBeVisible();
})