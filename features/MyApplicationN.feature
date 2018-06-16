Feature: Test Facebook smoke scenario

  Scenario Outline: Test login with valid credentials
    Given open firefox browser and start application
    When I Enter valid "<username>" and valid "<password>"
    Then user should be able to login successfully
    Then browser should be closed

    Examples: 
      | username  | password |
      | giddu4qe  |   123456 |
      | giddu4qea |   789456 |
      | giddu4qeq |   236549 |
