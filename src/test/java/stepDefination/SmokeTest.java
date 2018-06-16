package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	WebDriver driver;
	
	@Given("^open firefox browser and start application$")
	public void open_firefox_browser_and_start_application() throws Throwable {
		
		driver=new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");
	}

	@When("^I Enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void I_Enter_valid_username_and_valid_password(String username, String password) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("pass")).sendKeys(password);
	}
	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
		driver.findElement(By.xpath("//input[@value='Log In']")).click();
		
	}
	@Then("^browser should be closed$")
	public void browser_should_be_closed() throws Throwable {
	   driver.close();
	}



}
