import { test, expect } from '@playwright/test';
import { CheckBoxPage } from '../pages/CheckBoxPage';


test('Selecionar checkbox Home', async ({ page }) => {
    const checkBox = new CheckBoxPage(page);

    await checkBox.acessar("https://demoqa.com/checkbox");
    await checkBox.selecionarHome();

    await expect(checkBox.resultados).toContainText('home');

});


test('Selecionar o check box Desktop Notas', async ({ page }) => {
    const checkBox = new CheckBoxPage(page);

    await checkBox.acessar("https://demoqa.com/checkbox")
    await checkBox.selecionarNotasDesktop();

    await expect(checkBox.resultados).toBeVisible();
})