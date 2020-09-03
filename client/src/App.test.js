const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({});
  page = await browser.newPage();

  await page.goto('http://localhost:3000/');

});

describe('on page load', () => {
  test('Layout loads correctly on russian language', async() => {
    const nav = await page.$eval('.navbar-brand', e => e.innerHTML);

    const span = await page.$eval('.badge-primary', e => e.innerHTML);

    expect(nav).toBe('Заметки');

    expect(span).toBe('RU');

  }, 16000);

  test('Should be change language correctly', async() => {

    await page.click('[data-testid="eng"]')

    const nav = await page.$eval('.navbar-brand', e => e.innerHTML);

    expect(nav).toBe('Notes');
  }, 16000);

});

afterAll(() => {
  browser.close();
});

