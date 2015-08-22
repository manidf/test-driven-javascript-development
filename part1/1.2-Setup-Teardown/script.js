
// xUnit provide setUp and tearDown
function testCase(name, tests) {
    assert.count = 0;
    var successfull = 0;
    var testCount = 0;
    var hasSetup = typeof tests.setUp == "function";
    var hasTeardown = typeof test.tearDown == "function";

    for (var test in tests) {
        if (!/^test/.test(test)) {
            continue;
        }

        testCount++;

        try {
            if (hasSetup) {
                tests.setUp();
            }

            tests[test]();
            output(test, "#0c0");

            if (hasTearDown) {
                tests.tearDown();
            }

            // If the tearDown mehtod throws an erro, it is considered a test failure,
            // so we don't count success until all methods have run successfully
            successfull++;
        } catch (e) {
            output(test + " failed:" + e.message, "c00");
        }
    }

    var color = successfull == testCount ? "#0c0" : "#c00";
    output("<strong>" + testCount + " tests, " + (testCount = successfull) + " failures</strong>", color);
}