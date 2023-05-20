import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
    Key,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
const bernice: By = By.name("employee1");
const marnie: By = By.name("employee2");
const phillip: By = By.name("employee3");
const nameDisplay: By = By.id("employeeTitle");
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name("phoneEntry");
const titleInput: By = By.name("titleEntry");
const saveButton: By = By.id("saveBtn");
const cancelButton: By = By.name("cancel");
const errorCard: By = By.css(".errorCard");

describe("Employee Manager 1.2", () => {

    beforeEach(async () => {
        await driver.get(
        "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
        );
    });
    afterAll(async () => {
        await driver.quit();
    });
    describe("handles unsaved, canceled, and saved changes correctly", () => {
        test("An unsaved change doesn't persist", async () => {
        /*
        This test follows these steps:
        1. Open Bernice Ortiz
        2. Edit the name input
        3. Open Phillip Weaver
        4. Open Bernice Ortiz
        5. Verify the name field is the original name
        */
        await driver.findElement(bernice).click();
        await driver.wait(
            until.elementIsVisible(await driver.findElement(nameDisplay))
        );
        await driver.findElement(nameInput).clear();
        await driver.findElement(nameInput).sendKeys("Test Name");
        await driver.findElement(phillip).click();
        await driver.wait(
            until.elementTextContains(
            await driver.findElement(nameDisplay),
            "Phillip"
            )
        );
        await driver.findElement(bernice).click();
        await driver.wait(
            until.elementTextContains(
            await driver.findElement(nameDisplay),
            "Bernice"
            )
        );
        expect(
            await (await driver.findElement(nameDisplay)).getAttribute("")
        ).toBe("Bernice Ortiz");
        });
// the test above is checking to make sure that save changes don't persist when changing employee cards
        
        test("A canceled change doesn't persist", async () => {
            /*
            This test follows these steps:
            1. Open Phillip Weaver
            2. Edit the name input
            3. Click cancel
            5. Verify the name field is the original name
            */
            await driver.findElement(phillip).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameDisplay))
            );
            await driver.findElement(phillip).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(cancelButton).click();
            expect(
                await (await driver.findElement(nameInput)).getAttribute("")
            ).toBe("Phillip Weaver");
        });
//The above code is verifying you can return the original data by clicking the cancel button
// I get a timeout error here everytime for some reason even when I increase the test time to 10000s
        test("A saved change persists", async () => {
            /*
            This test follows these steps:
            1. Open Bernice Ortiz
            2. Edit the name input
            3. Save the change
            4. Open Phillip Weaver
            5. Open Bernice Ortiz's old record
            5. Verify the name field is the edited name
            */
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameDisplay))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(saveButton).click();
            await driver.findElement(phillip).click();
            await driver.wait(
                until.elementTextContains(
                await driver.findElement(bernice),
                "Phillip"
                )
            );
            await driver.findElement(bernice).click();
            expect(
                await (await driver.findElement(nameDisplay)).getAttribute("")
            ).toBe("Bernice Ortiz");
    });
//The above code verifies that changes persist
});

    describe("handles error messages correctly", () => {
        test("shows an error message for an empty name field", async () => {
            /*
            This test follows these steps:
            1. Open Bernice Ortiz
            2. Clear the name input
            3. Save the change
            4. Verify the error is present
            */
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameDisplay))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);
            await driver.findElement(saveButton).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );
        });
//The Above code verifies that the correct error message was displayed
        test("lets you cancel out of an error message", async () => {
            /*
            This test follows these steps:
            1. Open Bernice Ortiz
            2. Clear the name input
            3. Save the change
            4. Verify the error is present
            5. Cancel the change
            6. Verify the error is gone
            */
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameDisplay))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(bernice).sendKeys(Key.SPACE, Key.BACK_SPACE);
            await driver.findElement(saveButton).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );
            await driver.findElement(nameInput).sendKeys(Key.SPACE);
            await driver.findElement(cancelButton).click();
            driver.wait(() => true, 500);
            expect(await driver.findElements(errorCard)).toHaveLength(0);
        });
//The above code verifies that an error has ocurred and that you can cancel out of it
    });
});