// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by simple.js.
import { name as packageName } from "meteor/morwal89:simple";

// Write your tests here!
// Here is an example.
Tinytest.add('Package Name test', function (test) {
  test.equal(packageName, "simple");
});
