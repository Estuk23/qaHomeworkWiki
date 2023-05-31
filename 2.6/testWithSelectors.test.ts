import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        
    })

    const hdrInput: By = By.xpath('//input[@name="hdrInput"]')
    const mkeInput: By = By.xpath('//input[@name="mkeInput"]')
    const oaiInput: By = By.xpath('//input[@name="oriInput"]')
    const nameInput: By = By.xpath('(//input[@class="inputField"])[4]')
    const clrBtn: By = By.xpath('//button[@id="clearBtn"]')
    const submitBtn: By = By.xpath('//button[@id="saveBtn"]')
    const errorMsg: By = By.id('validHeader')

    test("Testing inputs and error message", async () => {
        await driver.findElement(hdrInput).sendKeys("123456789\n")
        await driver.findElement(mkeInput).sendKeys("MKE123ABC\n")
        await driver.findElement(oaiInput).sendKeys("Originating Agency Identifier\n")
        await driver.findElement(nameInput).sendKeys("John Doe\n")
        await driver.findElement(submitBtn).click()
        let errorHdr = await driver.findElement(errorMsg).getText()
        expect(errorHdr).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        await driver.quit()
    })
})