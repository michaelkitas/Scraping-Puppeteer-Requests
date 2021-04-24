const puppeteer = require("puppeteer-extra");

const url =
  "https://www.google.com/search?q=sunset&tbm=isch&source=hp&biw=800&bih=600&ei=8BaEYJjJEczRgwfYnbXoCQ&oq=sunset&gs_lcp=CgNpbWcQAzIFCAAQsQMyBQgAELEDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEAM6CAgAELEDEIMBUL4HWMwZYN0caABwAHgAgAFUiAHfA5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img&ved=0ahUKEwiYgZC4-JbwAhXM6OAKHdhODZ0Q4dUDCAc&uact=5";

async function StartScraping() {
  await puppeteer
    .launch({
      headless: false,
    })
    .then(async (browser) => {
      const page = await browser.newPage();

      await page.setViewport({
        width: 1366,
        height: 768,
      });

      page.on("response", async (response) => {
        // console.log(await response);
        // console.log(await response._request._resourceType);
        // if (response._request._resourceType == "image") {
        //   console.log(await response._url);
        // }
        if (response.url().includes("log")) {
          console.log(await response.json());
        }
      });

      await page.goto(url, {
        waitUntil: "load",
        timeout: 0,
      });
    });
}
StartScraping();
