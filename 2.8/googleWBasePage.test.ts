import {Google} from './googlePageWBase';
const google = new Google()
const fs = require('fs')
test('do a search', async () => {
    await google.navigate()
    await google.search('Bear Cubs');
    let text = await google.getResults();
    expect(text).toContain('Bear Cubs');

    fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.log(e);
        else console.log('Save Successful');
    })

    fs.writeFile(`${__dirname}/google.png`,
    await google.driver.takeScreenshot(), "base64",
    (e) =>{
        if (e) console.log("a picture says a thousand words.")
    })

    await google.driver.quit()
});