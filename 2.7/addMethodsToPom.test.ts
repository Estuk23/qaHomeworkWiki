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

class employeeObject {



 constructor(driver:WebDriver) {
    this.driver = driver
 }

 async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.header))
 };
    async click(elementBy: By) {
        await this.driver.await(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click()
    
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        await this.driver.findElement(elementBy).clear()
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
}

const emp = new employeeObject(driver);

test('adding employees', async() => {
    await emp.navigate()
    await emp.click(emp.addEmployee);
    await emp.click(emp.newEmployee);
    await emp.click(emp.nameInput);
    await emp.sendKeys(emp,nameInput, "Jane Doe");
    await emp.click(emp.saveBtn);
    await emp.driver.quit();
    
})