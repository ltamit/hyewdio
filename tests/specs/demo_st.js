
describe('Demo Function', () => {
    it('Demo steps', async () => {
    browser.url('https://www.lambdatest.com/automation-demos/')
    for( var i=0; i<600; i++){
        browser.getTitle()
        browser.getTitle()
    }
    const username = await $('#username')
    username.setValue('lambda')
    const password = await $('#password')
    password.setValue('lambda123')
    const loginbutton = await $('/html/body/div[1]/div[1]/section[2]/div/div/form/div[3]/button')
    loginbutton.click()
    const displaypage = await $('#developer-name')
    displaypage.isDisplayed()
    displaypage.setValue('demo@lambdatest.com');
    const random= await $('/html/body/div[1]/div[1]/section[2]/div/div/div[1]/p[4]/label/input')
    random.click()
    const other = await $('#others')
    other.click()
    const checkbox= await $('#tried-ecom')
    checkbox.click()
    const textArea= await $('#comments')
    textArea.setValue('Hi This is LambdaTest automation Demo')

});
});
