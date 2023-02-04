Feature: Admin/user login and navigation
  As a admin, I want to be able to log in to the web app and navigate to the admin web app.

Scenario: Successful login
Given I am on the login page
When I enter valid info
Then I should see Nodehill Logo in schedule page
Then Login is successful

Scenario: Failed login
Given I am on the login page
When I enter invalid info
Then Login is unsuccessful

Scenario: Successful login and navigation
Given I am on the login page
When I enter valid info
Then I should be logged in and see logo in schedule page
When I click on the admin button
Then I visit the admin page