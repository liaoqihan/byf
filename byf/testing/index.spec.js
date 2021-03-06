const automator = require("miniprogram-automator");

describe("index", () => {
    let miniProgram;
    let page;

    beforeAll(async() => {
        miniProgram = await automator.launch({
            cliPath: "D:\\software\\微信web开发者工具\\cli.bat",
            projectPath: "D:\\byf_test\\test",
        });
        page = await miniProgram.reLaunch("/page/component/index");
        await page.waitFor(500);
    }, 300000);

    it("list", async() => {
        const lists = await page.$$(".kind-list-item");
        expect(lists.length).toBe(9);
        const list = await lists[0].$(".kind-list-item-hd");
        expect(await list.text()).toBe("视图容器");
    });

    it("list action", async() => {
        const listHead = await page.$(".kind-list-item-hd");
        expect(await listHead.attribute("class")).toBe("kind-list-item-hd");
        await listHead.tap();
        await page.waitFor(200);
        expect(await listHead.attribute("class")).toBe(
            "kind-list-item-hd kind-list-item-hd-show"
        );
        await listHead.tap();
        await page.waitFor(200);
        expect(await listHead.attribute("class")).toBe("kind-list-item-hd");
        await listHead.tap();
        await page.waitFor(200);
        const item = await page.$(".index-bd navigator");
        await item.tap();
        await page.waitFor(500);
        expect((await miniProgram.currentPage()).path).toBe(
            "page/component/pages/view/view"
        );
    });

    afterAll(async() => {
        await miniProgram.close();
    });
});