(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-io', 'kudens'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-io'), require('kudens'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'js'.");
    }
    if (typeof this['kotlinx-io'] === 'undefined') {
      throw new Error("Error loading module 'js'. Its dependency 'kotlinx-io' was not found. Please, check whether 'kotlinx-io' is loaded prior to 'js'.");
    }
    if (typeof kudens === 'undefined') {
      throw new Error("Error loading module 'js'. Its dependency 'kudens' was not found. Please, check whether 'kudens' is loaded prior to 'js'.");
    }
    root.js = factory(typeof js === 'undefined' ? {} : js, kotlin, this['kotlinx-io'], kudens);
  }
}(this, function (_, Kotlin, $module$kotlinx_io, $module$kudens) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var BytePacketBuilder = $module$kotlinx_io.kotlinx.io.core.BytePacketBuilder_za3lpa$;
  var readBytes = $module$kotlinx_io.kotlinx.io.core.readBytes_3lionn$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ByteReadPacket = $module$kotlinx_io.kotlinx.io.core.ByteReadPacket_1qge3v$;
  var UByte_init = Kotlin.kotlin.UByte;
  var game = $module$kudens.games.perses.game;
  var DrawMode = $module$kudens.games.perses.game.DrawMode;
  var input = $module$kudens.games.perses.input;
  var toShort = Kotlin.toShort;
  var EmptyInputProcessor = $module$kudens.games.perses.input.EmptyInputProcessor;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_964n91$;
  var text = $module$kudens.games.perses.text;
  var numberToInt = Kotlin.numberToInt;
  var Screen = $module$kudens.games.perses.game.Screen;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var Math_0 = Math;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  main$ObjectLiteral.prototype = Object.create(EmptyInputProcessor.prototype);
  main$ObjectLiteral.prototype.constructor = main$ObjectLiteral;
  GameScreen.prototype = Object.create(Screen.prototype);
  GameScreen.prototype.constructor = GameScreen;
  function ByteReadPacket$lambda(it) {
    return Unit;
  }
  function Player(x, y, distance, red, green, blue, score) {
    this.x = x;
    this.y = y;
    this.distance = distance;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.score = score;
  }
  Player.prototype.buildBytes_n1q6a5$ = function (builder) {
    builder.writeShort_mq22fl$(this.x);
    builder.writeShort_mq22fl$(this.y);
    builder.writeShort_mq22fl$(this.distance);
    this.writeUByte_0(builder, this.red);
    this.writeUByte_0(builder, this.green);
    this.writeUByte_0(builder, this.blue);
    builder.writeByte_s8j3t7$(this.score);
  };
  Player.prototype.writeUByte_0 = function ($receiver, uByte) {
    $receiver.writeByte_s8j3t7$(uByte.data);
  };
  Player.prototype.toByteArray = function () {
    var builder = BytePacketBuilder();
    this.buildBytes_n1q6a5$(builder);
    return readBytes(builder.build());
  };
  Player.$metadata$ = {kind: Kind_CLASS, simpleName: 'Player', interfaces: []};
  function Player_init_0(reader, $this) {
    $this = $this || Object.create(Player.prototype);
    Player.call($this, reader.readShort(), reader.readShort(), reader.readShort(), new UByte_init(reader.readByte()), new UByte_init(reader.readByte()), new UByte_init(reader.readByte()), reader.readByte());
    return $this;
  }
  Player.prototype.component1 = function () {
    return this.x;
  };
  Player.prototype.component2 = function () {
    return this.y;
  };
  Player.prototype.component3 = function () {
    return this.distance;
  };
  Player.prototype.component4 = function () {
    return this.red;
  };
  Player.prototype.component5 = function () {
    return this.green;
  };
  Player.prototype.component6 = function () {
    return this.blue;
  };
  Player.prototype.component7 = function () {
    return this.score;
  };
  Player.prototype.copy_bxixp2$ = function (x, y, distance, red, green, blue, score) {
    return new Player(x === void 0 ? this.x : x, y === void 0 ? this.y : y, distance === void 0 ? this.distance : distance, red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue, score === void 0 ? this.score : score);
  };
  Player.prototype.toString = function () {
    return 'Player(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', distance=' + Kotlin.toString(this.distance)) + (', red=' + Kotlin.toString(this.red)) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + (', score=' + Kotlin.toString(this.score)) + ')';
  };
  Player.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.distance) | 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    return result;
  };
  Player.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.distance, other.distance) && Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.score, other.score)))));
  };
  function toPlayers(byteArray) {
    var players = ArrayList_init();
    var reader = ByteReadPacket(byteArray, 0, byteArray.length, ByteReadPacket$lambda);
    while (reader.canRead()) {
      players.add_11rb$(Player_init_0(reader));
    }
    return players;
  }
  function PlayerPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  PlayerPosition.prototype.toByteArray = function () {
    var builder = BytePacketBuilder();
    builder.writeShort_mq22fl$(this.x);
    builder.writeShort_mq22fl$(this.y);
    return readBytes(builder.build());
  };
  PlayerPosition.$metadata$ = {kind: Kind_CLASS, simpleName: 'PlayerPosition', interfaces: []};
  PlayerPosition.prototype.component1 = function () {
    return this.x;
  };
  PlayerPosition.prototype.component2 = function () {
    return this.y;
  };
  PlayerPosition.prototype.copy_8bdmd0$ = function (x, y) {
    return new PlayerPosition(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  PlayerPosition.prototype.toString = function () {
    return 'PlayerPosition(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  PlayerPosition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  PlayerPosition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function main$ObjectLiteral(closure$gameScreen) {
    this.closure$gameScreen = closure$gameScreen;
    EmptyInputProcessor.call(this);
  }
  main$ObjectLiteral.prototype.mouseMove_dleff0$ = function (x, y) {
    this.closure$gameScreen.playerX = toShort(roundToInt(x));
    this.closure$gameScreen.playerY = toShort(roundToInt(y));
  };
  main$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [EmptyInputProcessor]};
  function main$lambda$lambda(closure$gameScreen) {
    return function (bytes) {
      closure$gameScreen.players = toPlayers(bytes);
      return Unit;
    };
  }
  function main$lambda(closure$gameScreen) {
    return function (messageEvent) {
      readBytes_0(messageEvent, main$lambda$lambda(closure$gameScreen));
      return Unit;
    };
  }
  function main$lambda_0(it) {
    if (Kotlin.isType(it, ErrorEvent)) {
      var data = it.message;
      println('ERROR: ' + data);
    }
     else {
      println('UNKNOWN ERROR: ' + it.type);
    }
    return Unit;
  }
  function main() {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = document.body) != null ? tmp$.style : null) != null ? (tmp$_0.backgroundColor = '#182') : null;
    game.Game.view.setToWidth_mx4ult$(1200.0);
    game.Game.view.drawMode = DrawMode.LINEAR;
    game.Game.view.minAspectRatio = 1200.0 / 800.0;
    game.Game.view.maxAspectRatio = 1200.0 / 800.0;
    game.Game.setClearColor_7b5o5w$(0.0, 0.0, 0.0, 1.0);
    var gameScreen = new GameScreen();
    input.Input.setInputProcessor_809zsn$(new main$ObjectLiteral(gameScreen));
    gameScreen.webSocket.onmessage = main$lambda(gameScreen);
    gameScreen.webSocket.onerror = main$lambda_0;
    game.Game.start_lbnb05$(gameScreen);
  }
  function GameScreen() {
    Screen.call(this);
    var tmp$;
    this.webSocket = new WebSocket('ws://' + ((tmp$ = document.location) != null ? tmp$.host : null));
    this.playerX = 0;
    this.playerY = 0;
    this.players = emptyList();
    this.secondsSinceLastSend_0 = 0.0;
    this.onScreenText_0 = '';
  }
  GameScreen.prototype.update_dleff0$ = function (time, delta) {
    this.onScreenText_0 = 'fps: ' + game.Game.fps + ' : ' + this.playerX + ',' + this.playerY;
    this.secondsSinceLastSend_0 += delta;
    var secondsBetweenSends = 0.03;
    if (this.secondsSinceLastSend_0 > secondsBetweenSends) {
      this.secondsSinceLastSend_0 %= secondsBetweenSends;
      var openstate = 1;
      if (this.webSocket.readyState === openstate) {
        var byteArray = (new PlayerPosition(this.playerX, this.playerY)).toByteArray();
        this.webSocket.send(new Int8Array(toTypedArray(byteArray)));
      }
    }
  };
  function GameScreen$render$lambda(it) {
    return it.score;
  }
  GameScreen.prototype.render = function () {
    var context = game.Game.html.canvas2d;
    text.Texts.drawText_k35s1u$(10.0, game.Game.view.height - 30, this.onScreenText_0, 'bold 20pt Arial', 'gray');
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = sortedWith(this.players, new Comparator$ObjectLiteral(compareByDescending$lambda(GameScreen$render$lambda))).iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var i = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var y = game.Game.view.height - ((40 * i | 0) + 80 | 0);
      this.drawBoxAt_0(context, item, 30, toShort(numberToInt(y + 11)), 24.0);
      text.Texts.drawText_k35s1u$(60.0, y, item.score.toString(), 'bold 20pt Arial', 'gray');
    }
    var tmp$_1;
    tmp$_1 = this.players.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var distanceToGoal = element.distance;
      var x = distanceToGoal * 25;
      var width = Math_0.sqrt(x);
      this.drawBoxAt_0(context, element, element.x, element.y, width);
    }
  };
  GameScreen.prototype.drawBoxAt_0 = function ($receiver, player, x, y, width) {
    $receiver.fillStyle = 'rgba(' + player.red + ' ,' + player.green + ' ,' + player.blue + ', 0.5 )';
    var leftX = x - width / 2;
    var topY = y + width / 2;
    var convertedY = game.Game.view.height - topY;
    $receiver.fillRect(leftX, convertedY, width, width);
  };
  GameScreen.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameScreen', interfaces: [Screen]};
  function readBytes$lambda(closure$fileReader, closure$onReadDone) {
    return function (it) {
      var tmp$;
      var arrayBuffer = Kotlin.isType(tmp$ = closure$fileReader.result, ArrayBuffer) ? tmp$ : throwCCE();
      var uint8Array = new Uint8Array(arrayBuffer);
      var array = new Int8Array(uint8Array.byteLength);
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        array[i] = uint8Array[i];
      }
      var byteArray = array;
      closure$onReadDone(byteArray);
      return Unit;
    };
  }
  function readBytes_0($receiver, onReadDone) {
    var tmp$;
    var data = Kotlin.isType(tmp$ = $receiver.data, Blob) ? tmp$ : throwCCE();
    var fileReader = new FileReader();
    fileReader.addEventListener('loadend', readBytes$lambda(fileReader, onReadDone));
    fileReader.readAsArrayBuffer(data);
  }
  _.Player_init_8awntw$ = Player_init_0;
  $$importsForInline$$['kotlinx-io'] = $module$kotlinx_io;
  _.Player = Player;
  _.toPlayers_fqrh44$ = toPlayers;
  _.PlayerPosition = PlayerPosition;
  _.main = main;
  _.GameScreen = GameScreen;
  main();
  return _;
}));

//# sourceMappingURL=js.js.map
