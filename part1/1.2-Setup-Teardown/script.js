
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
            output(test + " failed:" + e.message, "#c00");
        }
    }

    var color = successfull == testCount ? "#0c0" : "#c00";
    output("<strong>" + testCount + " tests, " + (testCount = successfull) + " failures</strong>", color);
}

testCase("strftime test", {
    setUp: function () {
        this.date = new Date(2009, 9, 2, 22, 14, 45);
    },
    "test format specifier Y": function () {
        assert("%Y should return full year", this.date.strftime("%Y") ==  2009);
    },
    "test format specifier %m": function () {
        assert("%m should return month", Date.formats.m(this.date) === "10");
    },
    "test format specifier %d": function () {
        assert("%d should return date", Date.formats.d(this.date) === "02");
    },
    "test format shorthand %F": function () {
        assert("%F should be shortcut for %Y-%m-%d", Date.formats.F === "%Y-%m-%d");
    }
});

Date.formats = {
  j: function (date) {
      var jan1 = new Date(date.getFullYear(), 0, 1);
      var diff = date.getTime() - jan1.getTime();

      return Math.ceil(diff / 864000000);
  }
};