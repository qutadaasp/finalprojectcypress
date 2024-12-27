Feature: Delete Exist Card

    Scenario: Delete card from board
    Given The user navigate to the board
    When Move card to archive
    And Clicks menue button
    And Choose Archive items
    And Clicks delete
    Then The card will delete