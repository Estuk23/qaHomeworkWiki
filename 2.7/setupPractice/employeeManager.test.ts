import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver
} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome()).build();

import { emObject } from './employeeManagerPageObject'
const emPage = new emObject(driver)


test("add employee", async () => {
    await emPage.navigate();
    await emPage.click(emPage.addEmployee);
    await emPage.click(emPage.newEmployee);
    await emPage.click(emPage.nameInput);
    await emPage.sendKeys(emPage.nameInput, "Cheryl Mason");
    await emPage.click(emPage.phoneInput);
    await emPage.sendKeys(emPage.phoneInput, "9876543210");
    await emPage.click(emPage.titleInput);
    await emPage.sendKeys(emPage.titleInput, "Chief Investigator");
    await emPage.click(emPage.saveBtn);
    
})

    
