$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplicationN.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "browser should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "giddu4qe",
        "123456"
      ],
      "line": 11,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "giddu4qea",
        "789456"
      ],
      "line": 12,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "giddu4qeq",
        "236549"
      ],
      "line": 13,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Enter valid \"giddu4qe\" and valid \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_browser_and_start_application()"
});
formatter.result({
  "duration": 24716754015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "giddu4qe",
      "offset": 15
    },
    {
      "val": "123456",
      "offset": 36
    }
  ],
  "location": "SmokeTest.I_Enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 1075953762,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 2760264007,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.browser_should_be_closed()"
});
formatter.result({
  "duration": 15953055,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Enter valid \"giddu4qea\" and valid \"789456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_browser_and_start_application()"
});
formatter.result({
  "duration": 14294450184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "giddu4qea",
      "offset": 15
    },
    {
      "val": "789456",
      "offset": 37
    }
  ],
  "location": "SmokeTest.I_Enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 870613765,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 3060227061,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.browser_should_be_closed()"
});
formatter.result({
  "duration": 14699275,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open firefox browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Enter valid \"giddu4qeq\" and valid \"236549\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_browser_and_start_application()"
});
formatter.result({
  "duration": 14690454850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "giddu4qeq",
      "offset": 15
    },
    {
      "val": "236549",
      "offset": 37
    }
  ],
  "location": "SmokeTest.I_Enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 379778505,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 3767210827,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.browser_should_be_closed()"
});
formatter.result({
  "duration": 15029968,
  "status": "passed"
});
});