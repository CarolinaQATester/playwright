import {test, expect} from '@playwright/test';
import { RadioButtonPage } from '../pages/RadioButtonPage';

test('Deve clicar no Yes', async({page}) => {
    const radioButton = new RadioButtonPage(page);

    await radioButton.acessar("https://demoqa.com/radio-button");
    await radioButton.deveClicarNoYes();
   

    await expect(radioButton.resultados).toHaveText('Yes');
   


})

test('Deve clicar no Impressive', async({page}) => {
    const radioButton = new RadioButtonPage(page);

    await radioButton.acessar("https://demoqa.com/radio-button");
    
    await radioButton.deveClicarNoImpressive();


    await expect(radioButton.resultados).toHaveText('Impressive');



})