import {test, expect} from '@playwright/test';
import { LinkPage } from '../pages/LinkPage';

test('Deve clicar no link Home', async ({page}) => {

    const linkPage = new LinkPage(page);

    //ação
    await linkPage.acessar('https://demoqa.com/links');
    await linkPage.deveClicarHome();
    await this.page.goto('/')


})