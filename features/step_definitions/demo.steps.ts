import { binding, given, then, when } from "cucumber-tsflow";
import { assert, Assertion } from "chai";
import homepage from "../page_objects/homepage";

@binding()
export class Demo {
  @when(/I start script/)
  public start() {
    homepage.open();
  }

  @then(/script is executed/)
  public end() {
    homepage.enterText("WEBDRIVER.IO");
    homepage.search();
    assert.isTrue(homepage.isSearched);
  }
}
