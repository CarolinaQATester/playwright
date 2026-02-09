import {test, expect} from '@playwright/test';
import { ButtonPage } from '../pages/ButtonPage';

test ('Deve clicar no Double Click Me', async({page}) => {

    const buttonPage = new ButtonPage(page);

    //ação
    await buttonPage.acessar('https://demoqa.com/buttons')
    await buttonPage.deveClicarDoubleClickMe();
    
    //validação
    await expect(buttonPage.doubleClickMessage).toBeVisible();
    await expect(buttonPage.doubleClickMessage).toHaveText('You have done a double click');
});

test('Deve clicar no Right Click Me', async({page}) => {

    const buttonPage = new ButtonPage(page);

    //ação
    await buttonPage.acessar('https://demoqa.com/buttons')
    await buttonPage.deveClicarRightClickBtn();

    //Validação
    await expect(buttonPage.rightClickMessage).toBeVisible();
    await expect(buttonPage.rightClickMessage).toHaveText('You have done a right click');
});

test('Deve clicar no Click Me', async({page}) => {
    const buttonPage = new ButtonPage(page);

    //Acção
    await buttonPage.acessar('https://demoqa.com/buttons')
    await buttonPage.deveClicarClickMe();

    //Validação
    await expect(buttonPage.clickMe).toBeVisible();
    await expect(buttonPage.dynamicClickMessage).toHaveText('You have done a dynamic click');
})