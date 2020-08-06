import Page from "./page";

class Homepage extends Page {
  get searchBar() {
    return $("[name=q]");
  }
  get searchButton() {
    return $("input.gNO89b");
  }
  get resultsList() {
    return $("[id=search]");
  }

  open() {
    super.open("https://google.com"); //provide your additional URL if any. this will append to the baseUrl to form complete URL
  }

  enterText(query: string) {
    this.searchBar.clearValue();
    this.searchBar.setValue(query);
  }

  search() {
    this.searchButton.waitForDisplayed({ timeout: 1000 });
    this.searchButton.click();
  }

  isSearched() {
    this.resultsList.waitForDisplayed({ timeout: 1000 });
    console.log(this.resultsList.isDisplayed());
    return this.resultsList.isDisplayed();
  }
}

export default new Homepage();
