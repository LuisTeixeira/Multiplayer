import io.javalin.Javalin
import org.eclipse.jetty.websocket.api.Session
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.awt.Color.red
import kotlin.math.pow
import kotlin.math.roundToInt
import kotlin.math.sqrt
import kotlin.random.Random
import kotlin.random.nextUBytes


var log: Logger = LoggerFactory.getLogger("main")

fun main() {
    val app = Javalin.create().apply {
        exception(Exception::class.java) {e,_ -> log.error("Javalin error", e)}
        error(404) {ctx -> ctx.json("not fount")}
    }.start(8080)

    app.config.addStaticFiles("/web")

    val sessionToPlayers = HashMap<Session, Player>()
    val currentGoalPixel = newGoalPixel()

    app.ws("/") { ws ->
        ws.onConnect { session ->
            run {
                log.info("New player connected: ${session.host()}")
            }
        }
        ws.onBinaryMessage { context ->
            val byteArray = context.data().toByteArray()
            val session = context.session
            val playerPosition = PlayerPosition(byteArray)

            val distanceToGoal = getDistance(playerPosition.x, playerPosition.y, currentGoalPixel)
            val player = sessionToPlayers[session] ?: createNewPlayer(playerPosition, distanceToGoal.toShort())
        }
    }
}

fun newGoalPixel(): Pair<Short, Short> {
    val pixel = Pair(Random.nextInt(0, 1200).toShort(), Random.nextInt(0, 800).toShort())
    log.info("New goal: $pixel")
    return pixel
}

fun getDistance(x1: Short, y1: Short, xy2: Pair<Short, Short>): Int {
    val x2 = xy2.first
    val y2 = xy2.second
    return  sqrt((x1.toDouble() - x2).pow(2.0) + (y1.toDouble() - y2).pow(2.0)).roundToInt()
}

fun createNewPlayer(playerPosition: PlayerPosition, closeness: Short): Player {
    val random = Random
    return Player(
        x = playerPosition.x,
        y = playerPosition.y,
        distance = closeness,
        red = random.nextUBytes(1)[0],
        green = random.nextUBytes(1)[0],
        blue = random.nextUBytes(1)[0],
        score = 0
    )
}