describe("Browser Commands ", function() {
    it("newWindow example ", function() {
            browser.url("https://www.lambdatest.com/");

            browser.newWindow(
                "https://www.google.com/",
                "Google Window",                            
                "width=800,height=700,resizable,scrollbars=yes,status=1"
            );
            browser.pause(5000);
            console.log(browser.getTitle());
            // opening Google and writing text on newly opened window
            $(".//input[@name='q']").setValue("lambdatest.com");
            browser.pause(5000);
    });
});