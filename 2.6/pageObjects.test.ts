import { googlePage } from './pageObject';
import {Builder,By, Capabilities, WebDriver, until}
import {By} from 'selenium-webdriver';
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

test("do a search", async () => {
    await googlePage.navigate();
    await google.search
}

)