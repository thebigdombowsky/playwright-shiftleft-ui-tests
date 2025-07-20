Feature: Login functionality

  Scenario: Successful login redirects to dashboard
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the dashboard header should be visible
