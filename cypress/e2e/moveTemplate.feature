@regressiontest
Feature: Move Template

    Scenario: User can move template to another list

    Given User navigate to the board

    When Right click on template

    And Clicks on move button

    And Choose list

    And Click Move
    
    Then The Template move to list