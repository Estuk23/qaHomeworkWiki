import {
    Builder,
    By,
    Capabilities,
    until,
    Webdriver
} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: Webdriver = new Builder()
.withCapabilities(Capabilities.chrome()).build();

import { emObject } from './employeeManagerPage'
const emPage = new emObject(driver)

test("add employee", async () => {
    await emPage.navigate();
    await emPage.click(emPage.addEmployee);
    await emPage.click(emPage.newEmployee);
    await emPage.click(emPage.nameInput);
    await emPage.sendKeys(emPage.nameInput, "Mike De Santa");
    await emPage.click(emPage.saveBtn)
    await emPage.driver.quit()
})