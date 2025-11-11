Feature: Ecommerce validations
@Regression
  Scenario: placing the order
    Given a login to Ecommerce application with "bhimireddymonika@gmail.com" and "Monika2004"
    When Add "ZARA COAT 100" to cart
    Then Verify"ZARA COAT 3" is diaplayed in the cart 
    When Enter valid details and Place the Order
    # Then Verify order in present in the OrderHistory
    @validation
  Scenario Outline: placing the order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then verify Error message is displayed

    Examples:
    | username                   |password   |
    | bhimireddymonika@gmail.com |Monika2004 |
    | play@234.com               |iamplay2004| 