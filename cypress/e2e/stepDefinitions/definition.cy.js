import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("Start to type your Given step here", () => {
    console.log("a");
});

When("Start to type your When step here", () => {
    console.log("b");
});

Then("Start to type your Then step here", () => {
    console.log("c");
});