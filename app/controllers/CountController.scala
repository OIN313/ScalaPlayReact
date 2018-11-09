package controllers

import java.text.DateFormat

import javax.inject._
import play.api.mvc._
import services.Counter
import play.api.libs.json.Json
import java.util.{Date, TimeZone}

/**
 * This controller demonstrates how to use dependency injection to
 * bind a component into a controller class. The class creates an
 * `Action` that shows an incrementing count to users. The [[Counter]]
 * object is injected by the Guice dependency injection system.
 */
@Singleton
class CountController @Inject() (cc: ControllerComponents,
                                 counter: Counter) extends AbstractController(cc){

  val timeZoneMatrix:Map[String,String] = Map(
    "Beijing" -> "Asia/Shanghai",
    "Tokyo" -> "Asia/Tokyo",
    "London" -> "Europe/London"
  ).withDefaultValue("Europe/London")

  /**
   * Create an action that responds with the [[Counter]]'s current
   * count. The result is plain text. This `Action` is mapped to
   * `GET /count` requests by an entry in the `routes` config file.
   */
  def count =  Action {
    Ok(Json.obj("content" -> new Date().toString))
  }

  def getTime(timeZone : String) = Action {
    var df = DateFormat.getInstance()
    df.setTimeZone(TimeZone.getTimeZone(timeZoneMatrix(timeZone)))
    val resultStr = df.format(new Date())
    Ok(Json.obj("content" -> resultStr))
  }

}
