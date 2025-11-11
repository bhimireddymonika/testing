Feature: Ecommerce validations
@validation
  Scenario Outline: placing the order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then verify Error message is displayed

    Examples:
    | username                   |password   |
    | bhimireddymonika@gmail.com |Monika2004 |
    | play@234.com               |iamplay2004| 