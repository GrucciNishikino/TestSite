function ControlHandler(main) {
    this.a = false;
    this.d = false;
    this.w = false;
    this.s = false;
    this.m = false;
    this.tab = false;
    this.mouseLeft = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.main = main;
    this.canvas = main.canvas;
    window.addEventListener('keydown', this.keyDownEvent.bind(this));
    window.addEventListener('keyup', this.keyUpEvent.bind(this));
    this.canvas.addEventListener('mousedown', this.mouseDownEvent.bind(this));
    this.canvas.addEventListener('mouseup', this.mouseUpEvent.bind(this));
    this.canvas.addEventListener('mousemove', this.mouseMoveEvent.bind(this));
    this.canvas.addEventListener('contextmenu', this.contextMenuEvent.bind(this))
}
ControlHandler.prototype.init = function(main) {}
;
ControlHandler.prototype.enterFrame = function() {}
;
ControlHandler.prototype.keyDownEvent = function(e) {
    if (e.keyCode == 87) {
        this.w = true
    } else if (e.keyCode == 83) {
        this.s = true
    } else if (e.keyCode == 65) {
        this.a = true
    } else if (e.keyCode == 68) {
        this.d = true
    } else if (e.keyCode == 77) {
        this.m = true
    } else if (e.keyCode == 9) {
        this.tab = true;
        e.preventDefault()
    }
}
;
ControlHandler.prototype.keyUpEvent = function(e) {
    if (e.keyCode == 87 || e.keyCode == 38) {
        this.w = false
    } else if (e.keyCode == 83) {
        this.s = false
    } else if (e.keyCode == 65) {
        this.a = false
    } else if (e.keyCode == 68) {
        this.d = false
    } else if (e.keyCode == 77) {
        this.m = false
    } else if (e.keyCode == 9) {
        this.tab = false;
        e.preventDefault()
    }
}
;
ControlHandler.prototype.mouseDownEvent = function(e) {
    if (e.button == 0) {
        this.mouseLeft = true
    }
}
;
ControlHandler.prototype.mouseUpEvent = function(e) {
    if (this.mouseLeft) {
        if (this.main.state == 'menuScreen' || this.main.state == 'gameOverScreen') {
            this.main.startGame()
        }
    }
    if (e.button == 0) {
        this.mouseLeft = false
    }
}
;
ControlHandler.prototype.mouseMoveEvent = function(e) {
    var rect = this.canvas.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top
}
;
ControlHandler.prototype.contextMenuEvent = function(e) {
    e.preventDefault()
}
;
function CreateLevel(main) {
    var levelWidth = main.levelWidth;
    var levelHeight = main.levelHeight;
    var i, x, y;
    for (i = 0; i < 1000; i++) {
        x = Math.random() * (levelWidth - 20) + 10;
        y = Math.random() * (levelHeight - 40) + 30;
        main.wallHandler.create(x, y, 0, Math.random() * 10 + 8)
    }
    for (i = 0; i < 35; i++) {
        x = Math.random() * (levelWidth - 20) + 10;
        y = Math.random() * (levelHeight - 40) + 30;
        main.pickupHandler.create(x, y)
    }
    for (i = 0; i < 7; i++) {
        x = Math.random() * (levelWidth - 200) + 100;
        y = Math.random() * (levelHeight - 220) + 120;
        main.fortressHandler.create(x, y, 0)
    }
    for (i = 0; i < 6; i++) {
        x = Math.random() * (levelWidth - 200) + 100;
        y = Math.random() * (levelHeight - 220) + 120;
        main.fortressHandler.create(x, y, 1)
    }
    for (i = 0; i < 5; i++) {
        x = Math.random() * (levelWidth - 200) + 100;
        y = Math.random() * (levelHeight - 220) + 120;
        main.fortressHandler.create(x, y, 2)
    }
    for (i = 0; i < 3; i++) {
        x = Math.random() * (levelWidth - 200) + 100;
        y = Math.random() * (levelHeight - 220) + 120;
        main.fortressHandler.create(x, y, 3)
    }
    for (i = 0; i < 2; i++) {
        x = Math.random() * (levelWidth - 200) + 100;
        y = Math.random() * (levelHeight - 220) + 120;
        main.fortressHandler.create(x, y, 4)
    }
    x = Math.random() * (levelWidth - 200) + 100;
    y = Math.random() * (levelHeight - 220) + 120;
    main.fortressHandler.create(x, y, 5)
}
function DebrisHandler(main) {
    this.list = [];
    this.pool = []
}
DebrisHandler.prototype.init = function(main) {
    this.list.length = 0
}
;
DebrisHandler.prototype.enterFrame = function() {
    if (this.list.length > 0) {
        var obj;
        for (var i = this.list.length - 1; i >= 0; i--) {
            obj = this.list[i];
            obj.x += obj.vX;
            obj.y += obj.vY;
            obj.vX *= 0.96;
            obj.vY *= 0.96;
            obj.radius -= 0.1;
            if (obj.radius <= 0) {
                this.pool.push(obj);
                this.list.splice(i, 1);
                continue
            }
        }
    }
}
;
DebrisHandler.prototype.create = function(x, y, vX, vY, radius) {
    var obj = this.pool.length > 0 ? this.pool.pop() : new Object();
    obj.x = x;
    obj.y = y;
    obj.vX = vX;
    obj.vY = vY;
    obj.radius = radius;
    this.list.push(obj)
}
;
function EnemyHandler(main) {
    this.speed = 0.9;
    this.spawnMax = 300;
    this.shotSpeed = 3.0;
    this.list = [];
    this.pool = []
}
EnemyHandler.prototype.init = function(main) {
    this.list.length = 0;
    this.debrisHandler = main.debrisHandler;
    this.playerHandler = main.playerHandler;
    this.playerShotHandler = main.playerShotHandler;
    this.enemyShotHandler = main.enemyShotHandler;
    this.pickupHandler = main.pickupHandler;
    this.levelWidth = main.levelWidth;
    this.levelHeight = main.levelHeight
}
;
EnemyHandler.prototype.enterFrame = function() {
    var player = this.playerHandler;
    var i, j, enemy, shot, dist, dist2, vX, vY;
    for (i = this.list.length - 1; i >= 0; i--) {
        enemy = this.list[i];
        enemy.reload--;
        enemy.delay--;
        if (enemy.delay <= 0) {
            vX = player.x - enemy.x;
            vY = player.y - enemy.y;
            dist2 = vX * vX + vY * vY;
            if (dist2 < 144) {
                dist = 8
            } else if (dist2 < 576) {
                dist = 16
            } else if (dist2 < 2304) {
                dist = 32
            } else if (dist2 < 9216) {
                dist = 64
            } else if (dist2 < 36864) {
                dist = 128
            } else if (dist2 < 147456) {
                dist = 256
            } else if (dist2 < 589824) {
                dist = 512
            } else if (dist2 < 2359296) {
                dist = 1024
            } else {
                dist = 2048
            }
            dist = 0.5 * (dist2 / dist + dist);
            dist = 0.5 * (dist2 / dist + dist);
            if (dist - player.radius - enemy.radius > Math.max(200 + enemy.level * 50, 350)) {
                enemy.delay = Math.floor((dist - player.radius - enemy.radius - Math.max(200 + enemy.level * 50, 350)) / (player.speed + this.speed))
            }
            if (dist - player.radius - enemy.radius <= 0) {
                player.vX = vX * 0.06;
                player.vY = vY * 0.06
            }
            if (dist - player.radius - enemy.radius <= 200 + enemy.level * 50) {
                if (enemy.reload <= 0) {
                    this.enemyShotHandler.create(enemy.x, enemy.y, vX / dist * this.shotSpeed + Math.random() * 4 - 2, vY / dist * this.shotSpeed + Math.random() * 4 - 2, enemy.shotRadius, enemy.shotDamage);
                    enemy.reload = enemy.reloadRate
                }
                vX = vX / dist * this.speed;
                vY = vY / dist * this.speed
            } else {
                vX = 0;
                vY = 0
            }
            if (dist - player.radius - enemy.radius <= 350) {
                for (j = this.playerShotHandler.list.length - 1; j >= 0; j--) {
                    shot = this.playerShotHandler.list[j];
                    dist2 = (shot.x - enemy.x) * (shot.x - enemy.x) + (shot.y - enemy.y) * (shot.y - enemy.y);
                    if (dist2 < 144) {
                        dist = 8
                    } else if (dist2 < 576) {
                        dist = 16
                    } else if (dist2 < 2304) {
                        dist = 32
                    } else if (dist2 < 9216) {
                        dist = 64
                    } else if (dist2 < 36864) {
                        dist = 128
                    } else if (dist2 < 147456) {
                        dist = 256
                    } else if (dist2 < 589824) {
                        dist = 512
                    } else if (dist2 < 2359296) {
                        dist = 1024
                    } else {
                        dist = 2048
                    }
                    dist = 0.5 * (dist2 / dist + dist);
                    dist = 0.5 * (dist2 / dist + dist) - shot.radius - enemy.radius;
                    if (dist <= 0) {
                        this.playerShotHandler.hit(j);
                        this.damage(i, player.damage);
                        this.debrisHandler.create(shot.x, shot.y, Math.random() * 2 - 1, Math.random() * 2 - 1, 3)
                    }
                }
            }
        } else {
            vX = 0;
            vY = 0
        }
        enemy.vX = (enemy.vX * 19 + vX) * 0.05;
        enemy.vY = (enemy.vY * 19 + vY) * 0.05;
        enemy.vX += Math.random() * 0.2 - 0.1;
        enemy.vY += Math.random() * 0.2 - 0.1;
        enemy.x += enemy.vX;
        enemy.y += enemy.vY;
        if (enemy.x < enemy.radius) {
            enemy.x = enemy.radius;
            enemy.vX *= -1
        } else if (enemy.x > this.levelWidth - enemy.radius) {
            enemy.x = this.levelWidth - enemy.radius;
            enemy.vX *= -1
        }
        if (enemy.y < 20 + enemy.radius) {
            enemy.y = 20 + enemy.radius;
            enemy.vY *= -1
        } else if (enemy.y > this.levelHeight - enemy.radius) {
            enemy.y = this.levelHeight - enemy.radius;
            enemy.vY *= -1
        }
    }
}
;
EnemyHandler.prototype.create = function(x, y, level) {
    if (this.list.length >= this.spawnMax) {
        return
    }
    var enemy = this.pool.length > 0 ? this.pool.pop() : new Object();
    enemy.x = x;
    enemy.y = y;
    enemy.vX = 0;
    enemy.vY = 0;
    enemy.level = level;
    enemy.reload = 0;
    enemy.delay = 5;
    enemy.radius = 8 + level * 0.6;
    enemy.hp = 4 + level * 5;
    enemy.reloadRate = 27 - level * 3 + Math.random() * 10;
    enemy.shotRadius = 3;
    enemy.shotDamage = 1 + level;
    this.list.push(enemy)
}
;
EnemyHandler.prototype.damage = function(i, dmg) {
    this.list[i].hp -= dmg;
    if (this.list[i].hp <= 0) {
        enemy = this.list[i];
        this.playerHandler.kills++;
        if (Math.random() < 0.05) {
            this.pickupHandler.create(enemy.x, enemy.y)
        }
        for (var j = 0; j < 25; j++) {
            this.debrisHandler.create(enemy.x, enemy.y, Math.random() - 0.5, Math.random() - 0.5, 4);
            this.debrisHandler.create(enemy.x, enemy.y, Math.random() * 6 - 3, Math.random() * 6 - 3, 3)
        }
        this.pool.push(enemy);
        this.list.splice(i, 1)
    }
}
;
function EnemyShotHandler(main) {
    this.list = [];
    this.pool = []
}
EnemyShotHandler.prototype.init = function(main) {
    this.list.length = 0;
    this.playerHandler = main.playerHandler;
    this.debrisHandler = main.debrisHandler;
    this.speed = main.enemyHandler.shotSpeed
}
;
EnemyShotHandler.prototype.enterFrame = function() {
    var player = this.playerHandler;
    var shot, i, j, k, closest, dist, dist2;
    for (i = this.list.length - 1; i >= 0; i--) {
        shot = this.list[i];
        shot.x += shot.vX;
        shot.y += shot.vY;
        shot.delay--;
        if (shot.delay <= 0) {
            dist2 = (player.x - shot.x) * (player.x - shot.x) + (player.y - shot.y) * (player.y - shot.y);
            if (dist2 < 144) {
                dist = 8
            } else if (dist2 < 576) {
                dist = 16
            } else if (dist2 < 2304) {
                dist = 32
            } else if (dist2 < 9216) {
                dist = 64
            } else if (dist2 < 36864) {
                dist = 128
            } else if (dist2 < 147456) {
                dist = 256
            } else if (dist2 < 589824) {
                dist = 512
            } else if (dist2 < 2359296) {
                dist = 1024
            } else if (dist2 < 9437184) {
                dist = 2048
            } else {
                dist = 5096
            }
            dist = 0.5 * (dist2 / dist + dist);
            dist = 0.5 * (dist2 / dist + dist) - player.radius - shot.radius;
            if (dist <= 0) {
                player.hp -= shot.damage;
                if (player.hp < 0) {
                    player.hp = 0
                }
                this.debrisHandler.create(shot.x, shot.y, Math.random() * 2 - 1, Math.random() * 2 - 1, 4);
                this.debrisHandler.create(shot.x, shot.y, Math.random() * 2 - 1, Math.random() * 2 - 1, 3);
                shot.radius = 0
            }
            shot.delay = dist / (player.speed + this.speed)
        }
        shot.radius -= 0.03;
        if (shot.radius <= 1) {
            this.pool.push(shot);
            this.list.splice(i, 1);
            continue
        }
    }
}
;
EnemyShotHandler.prototype.create = function(x, y, vX, vY, radius, damage) {
    var shot = this.pool.length > 0 ? this.pool.pop() : new Object();
    shot.x = x;
    shot.y = y;
    shot.vX = vX;
    shot.vY = vY;
    shot.delay = 0;
    shot.radius = radius;
    shot.damage = damage;
    this.list.push(shot)
}
;
function Fortresses() {
    this.levels = [{
        radius: 130,
        walls: [[60, 4, 0.7854]],
        turrets: [[60, 2, 0]]
    }, {
        radius: 140,
        walls: [[80, 8, 0.3927], [110, 4, 0.7854]],
        turrets: [[80, 4, 0.7854]]
    }, {
        radius: 210,
        walls: [[60, 8, 0.3927], [130, 16, 0]],
        turrets: [[100, 8, 0]]
    }, {
        radius: 240,
        walls: [[65, 8, 0.3927], [130, 16, 0]],
        turrets: [[75, 8, 0], [146, 8, 1.37445]]
    }, {
        radius: 270,
        walls: [[130, 16, 0], [175, 32, 0]],
        turrets: [[75, 8, 0], [100, 8, 1.1781], [146, 8, 1.37445]]
    }, {
        radius: 340,
        walls: [[80, 32, 0], [100, 8, 1.1781], [200, 16, 0.58905], [205, 16, 0.294525], [225, 64, 0]],
        turrets: [[70, 16, 0], [140, 8, 0], [170, 16, 0.58905], [185, 8, 0]]
    }]
}
function FortressHandler(main) {
    this.speed = 0;
    this.shotSpeed = 2.5;
    this.levels = new Fortresses().levels;
    this.list = [];
    this.pool = []
}
FortressHandler.prototype.init = function(main) {
    this.list.length = 0;
    this.main = main;
    this.playerHandler = main.playerHandler;
    this.playerShotHandler = main.playerShotHandler;
    this.debrisHandler = main.debrisHandler;
    this.wallHandler = main.wallHandler;
    this.turretHandler = main.turretHandler;
    this.enemyHandler = main.enemyHandler;
    this.enemyShotHandler = main.enemyShotHandler;
    this.pickupHandler = main.pickupHandler
}
;
FortressHandler.prototype.enterFrame = function() {
    var player = this.playerHandler;
    var i, fortress, dist, vX, vY;
    for (i = this.list.length - 1; i >= 0; i--) {
        fortress = this.list[i];
        if (Math.random() < fortress.spawnRate) {
            this.enemyHandler.create(fortress.x, fortress.y, fortress.level)
        }
        fortress.reload--;
        fortress.delay--;
        if (fortress.delay <= 0) {
            vX = player.x - fortress.x;
            vY = player.y - fortress.y;
            dist2 = vX * vX + vY * vY;
            if (dist2 < 144) {
                dist = 8
            } else if (dist2 < 576) {
                dist = 16
            } else if (dist2 < 2304) {
                dist = 32
            } else if (dist2 < 9216) {
                dist = 64
            } else if (dist2 < 36864) {
                dist = 128
            } else if (dist2 < 147456) {
                dist = 256
            } else if (dist2 < 589824) {
                dist = 512
            } else if (dist2 < 2359296) {
                dist = 1024
            } else {
                dist = 2048
            }
            dist = 0.5 * (dist2 / dist + dist);
            dist = 0.5 * (dist2 / dist + dist);
            if (dist - player.radius - fortress.radius > 350 + fortress.level * 50) {
                fortress.delay = Math.floor((dist - player.radius - fortress.radius - (350 + fortress.level * 50)) / player.speed)
            }
            if (dist - player.radius - fortress.radius <= 350 + fortress.level * 50) {
                if (fortress.reload <= 0) {
                    this.enemyShotHandler.create(fortress.x, fortress.y, vX / dist * this.shotSpeed + Math.random() * 4 - 2, vY / dist * this.shotSpeed + Math.random() * 4 - 2, fortress.shotRadius, fortress.shotDamage);
                    fortress.reload = fortress.reloadRate
                }
            }
            if (dist - player.radius - fortress.radius <= 0) {
                player.vX = vX * 0.06;
                player.vY = vY * 0.06
            }
            if (dist - player.radius - fortress.radius <= 350) {
                for (j = this.playerShotHandler.list.length - 1; j >= 0; j--) {
                    shot = this.playerShotHandler.list[j];
                    dist2 = (shot.x - fortress.x) * (shot.x - fortress.x) + (shot.y - fortress.y) * (shot.y - fortress.y);
                    if (dist2 < 144) {
                        dist = 8
                    } else if (dist2 < 576) {
                        dist = 16
                    } else if (dist2 < 2304) {
                        dist = 32
                    } else if (dist2 < 9216) {
                        dist = 64
                    } else if (dist2 < 36864) {
                        dist = 128
                    } else if (dist2 < 147456) {
                        dist = 256
                    } else if (dist2 < 589824) {
                        dist = 512
                    } else if (dist2 < 2359296) {
                        dist = 1024
                    } else {
                        dist = 2048
                    }
                    dist = 0.5 * (dist2 / dist + dist);
                    dist = 0.5 * (dist2 / dist + dist) - shot.radius - fortress.radius;
                    if (dist <= 0) {
                        this.playerShotHandler.hit(j);
                        this.damage(i, player.damage);
                        this.debrisHandler.create(shot.x, shot.y, Math.random() * 2 - 1, Math.random() * 2 - 1, 3)
                    }
                }
            }
        }
    }
}
;
FortressHandler.prototype.create = function(x, y, level) {
    var fortress = this.pool.length > 0 ? this.pool.pop() : new Object();
    fortress.x = x;
    fortress.y = y;
    fortress.level = level;
    fortress.reload = 0;
    fortress.delay = Math.ceil(Math.random() * 60);
    fortress.radius = 15 + level * 10;
    fortress.hp = 40 + level * 155;
    fortress.spawnRate = 0.002 + level * 0.003;
    fortress.reloadRate = 25 - level * 2;
    fortress.shotRadius = 5 + level;
    fortress.shotDamage = 4 + level * 2;
    this.addTurretsAndWalls(x, y, level);
    this.list.push(fortress)
}
;
FortressHandler.prototype.addTurretsAndWalls = function(x, y, level) {
    var fortress = this.levels[level];
    var radius, count, interval, start, i, j, X, Y;
    this.wallHandler.clearRadius(x, y, fortress.radius);
    for (i = 0; i < fortress.walls.length; i++) {
        radius = fortress.walls[i][0];
        count = fortress.walls[i][1];
        start = fortress.walls[i][2];
        interval = 6.2832 / count;
        for (j = 0; j < count; j++) {
            X = Math.cos(start + interval * j) * radius;
            Y = Math.sin(start + interval * j) * radius;
            this.wallHandler.create(x + X, y + Y, level)
        }
    }
    for (i = 0; i < fortress.turrets.length; i++) {
        radius = fortress.turrets[i][0];
        count = fortress.turrets[i][1];
        start = fortress.turrets[i][2];
        interval = 6.2832 / count;
        for (j = 0; j < count; j++) {
            X = Math.cos(start + interval * j) * radius;
            Y = Math.sin(start + interval * j) * radius;
            this.turretHandler.create(x + X, y + Y, level)
        }
    }
}
;
FortressHandler.prototype.damage = function(i, dmg) {
    this.list[i].hp -= dmg;
    if (this.list[i].hp <= 0) {
        var fortress = this.list[i];
        this.playerHandler.kills++;
        for (var j = 0; j < 1 + fortress.level * 3; j++) {
            this.pickupHandler.create(fortress.x + Math.random() * 10 - 5, fortress.y + Math.random() * 10 - 5)
        }
        var blast = fortress.level + 8;
        for (j = 0; j < 125 + fortress.level * 50; j++) {
            this.debrisHandler.create(fortress.x, fortress.y, Math.random() - 0.5, Math.random() - 0.5, 4);
            this.debrisHandler.create(fortress.x, fortress.y, Math.random() * blast - blast * 0.5, Math.random() * blast - blast * 0.5, 3)
        }
        this.pool.push(fortress);
        this.list.splice(i, 1)
    }
}
;
function GameOverScreen(main) {
    main.state = 'gameOverScreen';
    main.controlHandler.mouseLeft = false;
    main.context.fillStyle = 'rgba(255,255,255,0.8)';
    main.context.fillRect(0, 20, main.canvas.width, main.canvas.height - 20);
    var hW = main.canvas.width * 0.5;
    var hH = main.canvas.height * 0.5;
    var dark = 'rgba(0,0,0,0.9)';
    var medium = 'rgba(0,0,0,0.5)';
    var light = 'rgba(0,0,0,0.3)';
    new Text(main.context,'Game Over',hW,hH - 20,'normal 21px/1 ' + main.fontFamily,dark);
    new Text(main.context,'Click to Play Again',hW,hH + 20,'normal 17px/1 ' + main.fontFamily,dark);
    new Text(main.context,'www.nickvogt.com',9,main.canvas.height - 14,'normal 13px/1 ' + main.fontFamily,light,'left')
}
function Main() {
    this.fontFamily = '"Segoe UI",Arial,sans-serif';
    this.handlers = ['control', 'enemy', 'wall', 'turret', 'fortress', 'player', 'playerShot', 'enemyShot', 'debris', 'view', 'pickup', 'render'];
    this.levelWidth = 6000;
    this.levelHeight = 6000;
    this.state = 'loading';
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.processTime = new ProcessTime();
    this.processCount = 0;
    for (var i = 0; i < this.handlers.length; i++) {
        var name = this.handlers[i] + 'Handler';
        this[name] = new window[name.charAt(0).toUpperCase() + name.slice(1)](this)
    }
    setInterval(this.enterFrame.bind(this), 16.6667);
    new MenuScreen(this)
}
Main.prototype.startGame = function() {
    for (var i = 0; i < this.handlers.length; i++) {
        this[this.handlers[i] + 'Handler'].init(this)
    }
    new CreateLevel(this);
    this.state = 'game'
}
;
Main.prototype.enterFrame = function() {
    if (this.state != 'game') {
        return
    }
    for (var i = 0; i < this.handlers.length; i++) {
        this[this.handlers[i] + 'Handler'].enterFrame()
    }
    if (this.playerHandler.hp <= 0) {
        new GameOverScreen(this)
    }
}
;
function MenuScreen(main) {
    main.state = 'menuScreen';
    main.controlHandler.mouseLeft = false;
    main.context.clearRect(0, 0, main.canvas.width, main.canvas.height);
    var hW = main.canvas.width * 0.5;
    var hH = main.canvas.height * 0.5;
    var dark = 'rgba(0,0,0,0.9)';
    var medium = 'rgba(0,0,0,0.5)';
    var light = 'rgba(0,0,0,0.3)';
    new Text(main.context,'Shooter 1',9,18,'normal 21px/1 ' + main.fontFamily,light,'left');
    new Text(main.context,'Click to Start',hW,hH - 50,'normal 17px/1 ' + main.fontFamily,dark);
    new Text(main.context,'Use "WASD" to move and "Left Click" to shoot.',hW,hH - 20,'normal 15px/1 ' + main.fontFamily,medium);
    new Text(main.context,'"Tab" or "M" shows the minimap. Larger dots are harder fortresses.',hW,hH,'normal 15px/1 ' + main.fontFamily,medium);
    new Text(main.context,'Enemies and fortresses drop blue orbs,which increase your power.',hW,hH + 20,'normal 15px/1 ' + main.fontFamily,medium);
    new Text(main.context,'www.nickvogt.com',9,main.canvas.height - 14,'normal 13px/1 ' + main.fontFamily,light,'left')
}
function Object() {}
function PickupHandler(main) {
    this.radius = 7;
    this.damage = 0.4;
    this.reloadRate = 0.95;
    this.hp = 3;
    this.list = [];
    this.pool = []
}
PickupHandler.prototype.init = function(main) {
    this.list.length = 0;
    this.playerHandler = main.playerHandler;
    this.playerShotHandler = main.playerShotHandler
}
;
PickupHandler.prototype.enterFrame = function() {
    var player = this.playerHandler;
    var dist;
    for (var i = this.list.length - 1; i >= 0; i--) {
        var pickup = this.list[i];
        pickup.delay--;
        if (pickup.delay <= 0) {
            dist = Math.sqrt((player.x - pickup.x) * (player.x - pickup.x) + (player.y - pickup.y) * (player.y - pickup.y)) - player.radius - pickup.radius;
            if (dist <= 0) {
                player.maxHp += Math.ceil(Math.random() * 10) + 7;
                player.hp += 5;
                player.damage += Math.random() * 0.03 + 0.03;
                if (player.reloadRate > 3.0) {
                    player.reloadRate *= 0.99
                }
                for (var j = 0; j < 9; j++) {
                    this.playerShotHandler.create(pickup.x, pickup.y, Math.random() * 2 - 1, Math.random() * 2 - 1)
                }
                this.pool.push(pickup);
                this.list.splice(i, 1)
            } else if (dist <= 40) {
                pickup.x += (player.x - pickup.x) * (160 - dist * 4) * 0.001;
                pickup.y += (player.y - pickup.y) * (160 - dist * 4) * 0.001
            }
            pickup.delay = (dist - 40) / player.speed
        }
    }
}
;
PickupHandler.prototype.create = function(x, y) {
    var pickup = this.pool.length > 0 ? this.pool.pop() : new Object();
    pickup.x = x;
    pickup.y = y;
    pickup.delay = 0;
    pickup.radius = this.radius;
    this.list.push(pickup)
}
;
function PlayerHandler(main) {
    this.radius = 12.0;
    this.accel = 0.3;
	//2
    this.speed = 2.0;
	//100
    this.startHp = 100.0;
	//12
    this.startReloadRate = 12.0;
	//5
    this.shotSpeed = 5.0;
	//5
    this.startDamage = 5.0;
    this.turretRadius = this.radius * 0.6;
    this.hp;
    this.maxHp;
    this.kills;
    this.damage;
    this.reloadRate;
    this.list = [this]
}
PlayerHandler.prototype.init = function(main) {
    this.canvas = main.canvas;
    this.controlHandler = main.controlHandler;
    this.viewHandler = main.viewHandler;
    this.levelWidth = main.levelWidth;
    this.levelHeight = main.levelHeight;
    this.playerShotHandler = main.playerShotHandler;
    this.processTime = main.processTime;
    this.x = main.levelWidth * 0.5;
    this.y = main.levelHeight * 0.5;
    this.vX = 0;
    this.vY = 0;
    this.hp = this.startHp;
    this.maxHp = this.startHp;
    this.kills = 0;
    this.damage = this.startDamage;
    this.reload = 0;
    this.reloadRate = this.startReloadRate;
    this.tick = false
}
;
PlayerHandler.prototype.enterFrame = function() {
    var obj, i, vX, vY;
    vX = this.controlHandler.a ? -this.accel : (this.controlHandler.d ? this.accel : 0);
    vY = this.controlHandler.w ? -this.accel : (this.controlHandler.s ? this.accel : 0);
    if (vX != 0 && vY != 0) {
        vX *= 0.7071;
        vY *= 0.7071
    } else if (vX == 0 && vY == 0) {
        this.vX *= 0.7;
        this.vY *= 0.7
    }
    this.vX += vX;
    this.vY += vY;
    dist = Math.sqrt(this.vX * this.vX + this.vY * this.vY);
    if (dist > this.speed) {
        dist = this.speed / dist;
        this.vX *= dist;
        this.vY *= dist
    }
    this.x += this.vX;
    this.y += this.vY;
    if (this.x < this.radius) {
        this.x = this.radius
    } else if (this.x > this.levelWidth - this.radius) {
        this.x = this.levelWidth - this.radius
    }
    if (this.y < 20 + this.radius) {
        this.y = 20 + this.radius
    } else if (this.y > this.levelHeight - this.radius) {
        this.y = this.levelHeight - this.radius
    }
    if (this.hp < this.maxHp) {
        this.hp += this.maxHp * 0.0003;
        if (this.hp > this.maxHp) {
            this.hp = this.maxHp
        }
    }
    this.reload--;
    if (this.controlHandler.mouseLeft && this.reload <= 0) {
        vX = this.controlHandler.mouseX + this.viewHandler.x - this.canvas.width * 0.5 - this.x;
        vY = this.controlHandler.mouseY + this.viewHandler.y - this.canvas.height * 0.5 - this.y;
        dist = Math.sqrt(vX * vX + vY * vY);
        vX /= dist;
        vY /= dist;
        this.tick = !this.tick;
        if (this.tick) {
            this.playerShotHandler.create(this.x + vY * this.turretRadius, this.y - vX * this.turretRadius, vX * this.shotSpeed + Math.random() * 0.6 - 0.3, vY * this.shotSpeed + Math.random() * 0.6 - 0.3)
        } else {
            this.playerShotHandler.create(this.x - vY * this.turretRadius, this.y + vX * this.turretRadius, vX * this.shotSpeed + Math.random() * 0.6 - 0.3, vY * this.shotSpeed + Math.random() * 0.6 - 0.3)
        }
        this.reload = this.reloadRate
    }
}
;
function PlayerShotHandler(main) {
    this.radius = 3;
    this.list = [];
    this.pool = []
}
PlayerShotHandler.prototype.init = function(main) {
    this.list.length = 0;
    this.playerHandler = main.playerHandler;
    this.debrisHandler = main.debrisHandler;
    this.speed = main.playerHandler.shotSpeed
}
;
PlayerShotHandler.prototype.enterFrame = function() {
    var shot, i;
    for (i = this.list.length - 1; i >= 0; i--) {
        shot = this.list[i];
        shot.x += shot.vX;
        shot.y += shot.vY;
        shot.radius -= 0.045;
        if (shot.radius <= 1) {
            this.pool.push(shot);
            this.list.splice(i, 1);
            continue
        }
    }
}
;
PlayerShotHandler.prototype.create = function(x, y, vX, vY) {
    var shot = this.pool.length > 0 ? this.pool.pop() : new Object();
    shot.x = x;
    shot.y = y;
    shot.vX = vX;
    shot.vY = vY;
    shot.radius = this.radius;
    this.list.push(shot)
}
;
PlayerShotHandler.prototype.hit = function(i) {
    this.pool.push(this.list[i]);
    this.list.splice(i, 1)
}
;
function ProcessTime() {
    this.log = {}
}
ProcessTime.prototype.logTime = function(name, processTime) {
    if (name in this.log) {
        if (processTime > this.log[name]) {
            this.log[name] = processTime
        }
    } else {
        this.log[name] = processTime
    }
}
;
ProcessTime.prototype.outputLog = function() {
    console.clear();
    for (var name in this.log) {
        console.log(name + ' ' + (new Array(18 - name.length).join(' ')) + '   max:' + (this.log[name] > 0 ? this.log[name] : ''));
        this.log[name] = 0
    }
}
;
function RenderHandler(main) {
    this.mapSize = 200;
    this.mapX = this.mapSize / main.levelWidth;
    this.mapY = this.mapSize / main.levelHeight;
    this.main = main;
    this.canvas = main.canvas;
    this.context = main.context
}
RenderHandler.prototype.init = function(main) {
    this.drawList = [{
        color: 'rgba(0,0,0,0.75)',
        handler: main.playerHandler
    }, {
        color: 'rgba(0,147,169,0.8)',
        handler: main.pickupHandler
    }, {
        color: 'rgba(0,0,0,0.5)',
        handler: main.wallHandler
    }, {
        color: 'rgba(90,31,31,0.6)',
        handler: main.turretHandler
    }, {
        color: 'rgba(90,31,31,0.8)',
        handler: main.fortressHandler
    }, {
        color: 'rgba(158,0,0,0.5)',
        handler: main.enemyHandler
    }, {
        color: 'rgba(0,0,0,0.8)',
        handler: main.playerShotHandler
    }, {
        color: 'rgba(158,0,0,0.75)',
        handler: main.enemyShotHandler
    }, {
        color: 'rgba(0,0,0,0.4)',
        handler: main.debrisHandler,
        paint: true
    }];
    this.fortressHandler = main.fortressHandler;
    this.playerHandler = main.playerHandler;
    this.controlHandler = main.controlHandler;
    this.viewHandler = main.viewHandler;
    this.bgCanvas = document.createElement('canvas');
    this.bgCanvas.width = main.levelWidth;
    this.bgCanvas.height = main.levelHeight;
    this.bgContext = this.bgCanvas.getContext('2d');
    for (var i = 0; i < 500; i++) {
        this.bgContext.fillStyle = 'rgba(0,0,0,' + (Math.random() * 0.1) + ')';
        this.bgContext.beginPath();
        this.bgContext.arc(Math.random() * main.levelWidth, Math.random() * main.levelHeight, Math.random() * 100, 0, 6.2832);
        this.bgContext.fill();
        this.bgContext.closePath()
    }
    this.bgContext.fillStyle = 'rgba(70,70,70,0.15)'
}
;
RenderHandler.prototype.enterFrame = function() {
    var context = this.context;
    var obj, x, y, i, j;
    var offsetX = this.canvas.width * 0.5 - this.viewHandler.x;
    var offsetY = this.canvas.height * 0.5 - this.viewHandler.y;
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    context.drawImage(this.bgCanvas, offsetX, offsetY);
    for (i = 0; i < this.drawList.length; i++) {
        context.fillStyle = this.drawList[i].color;
        for (j = this.drawList[i].handler.list.length - 1; j >= 0; j--) {
            obj = this.drawList[i].handler.list[j];
            x = obj.x + offsetX;
            y = obj.y + offsetY;
            if (x > -obj.radius && x < this.canvas.width + obj.radius && y > -obj.radius && y < this.canvas.height + obj.radius) {
                if (i > 5) {
                    context.fillRect(x - obj.radius, y - obj.radius, obj.radius * 2, obj.radius * 2);
                    if (Math.random() < 0.2 && typeof this.drawList[i].paint !== 'undefined') {
                        this.bgContext.fillRect(obj.x, obj.y, 2, 2)
                    }
                } else {
                    context.beginPath();
                    context.arc(x, y, obj.radius, 0, 6.2832);
                    context.fill();
                    context.closePath()
                }
            }
        }
    }
    context.fillStyle = '#444444';
    context.fillRect(0, 0, this.canvas.width, 20);
    context.textAlign = 'left';
    context.font = 'bold 11px/1 Arial';
    context.fillStyle = '#AAAAAA';
    context.fillText('Health', 5, 10);
    context.fillText('Damage', 145, 10);
    context.fillText('Fire Rate', 240, 10);
    context.fillText('Kills', 355, 10);
    context.fillText('DPS', 450, 10);
    context.font = 'bold 15px/1 Arial';
    context.fillStyle = '#DDDDDD';
    context.fillText(Math.round(this.playerHandler.hp) + '/' + this.playerHandler.maxHp, 43, 10);
    context.fillText(Math.round(this.playerHandler.damage * 10) / 10, 193, 10);
    context.fillText((Math.round(60 / this.playerHandler.reloadRate * 10) / 10) + '/s', 292, 10);
    context.fillText(this.playerHandler.kills, 382, 10);
    context.fillText((Math.round(60 / this.playerHandler.reloadRate * this.playerHandler.damage * 10) / 10), 476, 10);
    if (this.controlHandler.tab || this.controlHandler.m) {
        context.fillStyle = 'rgba(255,255,255,0.85)';
        context.fillRect(0, 20, this.mapSize, this.mapSize);
        context.fillStyle = 'rgba(158,0,0,0.5)';
        for (i = this.fortressHandler.list.length - 1; i >= 0; i--) {
            obj = this.fortressHandler.list[i];
            j = 3 + obj.level * 2;
            x = Math.round(obj.x * this.mapX - j * 0.5);
            y = 20 + Math.round(obj.y * this.mapY - j * 0.5);
            context.fillRect(x, y, j, j)
        }
        context.fillStyle = 'rgba(0,0,0,0.7)';
        x = Math.round(this.playerHandler.x * this.mapX - 3);
        y = 20 + Math.round(this.playerHandler.y * this.mapY - 3);
        context.fillRect(x, y, 6, 6)
    }
}
;
function Text(context, text, x, y, font, style, align, baseline) {
    context.font = typeof font === 'undefined' ? 'normal 16px/1 Arial' : font;
    context.fillStyle = typeof style === 'undefined' ? '#000000' : style;
    context.textAlign = typeof align === 'undefined' ? 'center' : align;
    context.textBaseline = typeof baseline === 'undefined' ? 'middle' : baseline;
    context.fillText(text, x, y)
}
function TurretHandler(main) {
    this.speed = 0;
    this.shotSpeed = 2.5;
    this.list = [];
    this.pool = []
}
TurretHandler.prototype.init = function(main) {
    this.list.length = 0;
    this.playerHandler = main.playerHandler;
    this.playerShotHandler = main.playerShotHandler;
    this.debrisHandler = main.debrisHandler;
    this.enemyShotHandler = main.enemyShotHandler;
    this.pickupHandler = main.pickupHandler
}
;
TurretHandler.prototype.enterFrame = function() {
    var player = this.playerHandler;
    var i, j, turret, shot, dist, dist2, vX, vY;
    for (i = this.list.length - 1; i >= 0; i--) {
        turret = this.list[i];
        turret.reload--;
        turret.delay--;
        if (turret.delay <= 0) {
            vX = player.x - turret.x;
            vY = player.y - turret.y;
            dist2 = vX * vX + vY * vY;
            if (dist2 < 144) {
                dist = 8
            } else if (dist2 < 576) {
                dist = 16
            } else if (dist2 < 2304) {
                dist = 32
            } else if (dist2 < 9216) {
                dist = 64
            } else if (dist2 < 36864) {
                dist = 128
            } else if (dist2 < 147456) {
                dist = 256
            } else if (dist2 < 589824) {
                dist = 512
            } else if (dist2 < 2359296) {
                dist = 1024
            } else {
                dist = 2048
            }
            dist = 0.5 * (dist2 / dist + dist);
            dist = 0.5 * (dist2 / dist + dist);
            if (dist - player.radius - turret.radius > Math.max(250 + turret.level * 50, 350)) {
                turret.delay = Math.floor((dist - player.radius - turret.radius - Math.max(250 + turret.level * 50, 350)) / player.speed)
            }
            if (dist - player.radius - turret.radius <= 250 + turret.level * 50) {
                if (turret.reload <= 0) {
                    this.enemyShotHandler.create(turret.x, turret.y, vX / dist * this.shotSpeed + Math.random() * 4 - 2, vY / dist * this.shotSpeed + Math.random() * 4 - 2, turret.shotRadius, turret.shotDamage);
                    turret.reload = turret.reloadRate
                }
            }
            if (dist - player.radius - turret.radius <= 0) {
                player.vX = vX * 0.06;
                player.vY = vY * 0.06
            }
            if (dist - player.radius - turret.radius <= 350) {
                for (j = this.playerShotHandler.list.length - 1; j >= 0; j--) {
                    shot = this.playerShotHandler.list[j];
                    dist2 = (shot.x - turret.x) * (shot.x - turret.x) + (shot.y - turret.y) * (shot.y - turret.y);
                    if (dist2 < 144) {
                        dist = 8
                    } else if (dist2 < 576) {
                        dist = 16
                    } else if (dist2 < 2304) {
                        dist = 32
                    } else if (dist2 < 9216) {
                        dist = 64
                    } else if (dist2 < 36864) {
                        dist = 128
                    } else if (dist2 < 147456) {
                        dist = 256
                    } else if (dist2 < 589824) {
                        dist = 512
                    } else if (dist2 < 2359296) {
                        dist = 1024
                    } else {
                        dist = 2048
                    }
                    dist = 0.5 * (dist2 / dist + dist);
                    dist = 0.5 * (dist2 / dist + dist) - shot.radius - turret.radius;
                    if (dist <= 0) {
                        this.playerShotHandler.hit(j);
                        this.damage(i, player.damage);
                        this.debrisHandler.create(shot.x, shot.y, Math.random() * 2 - 1, Math.random() * 2 - 1, 3)
                    }
                }
            }
        }
    }
}
;
TurretHandler.prototype.create = function(x, y, level) {
    var turret = this.pool.length > 0 ? this.pool.pop() : new Object();
    turret.x = x;
    turret.y = y;
    turret.level = level;
    turret.reload = 0;
    turret.delay = Math.ceil(Math.random() * 60);
    turret.radius = Math.min(12 + level * 3, 15);
    turret.hp = 30 + level * 45;
    turret.reloadRate = 17 - level * 2 + Math.random() * 10;
    turret.shotRadius = 3.5 + level * 0.5;
    turret.shotDamage = 3 + level * 2;
    this.list.push(turret)
}
;
TurretHandler.prototype.damage = function(i, dmg) {
    this.list[i].hp -= dmg;
    if (this.list[i].hp <= 0) {
        var turret = this.list[i];
        this.playerHandler.kills++;
        this.pickupHandler.create(turret.x, turret.y);
        for (var j = 0; j < 30; j++) {
            this.debrisHandler.create(turret.x, turret.y, Math.random() - 0.5, Math.random() - 0.5, 4);
            this.debrisHandler.create(turret.x, turret.y, Math.random() * 8 - 4, Math.random() * 8 - 4, 3)
        }
        this.pool.push(turret);
        this.list.splice(i, 1)
    }
}
;
function ViewHandler(main) {
    this.x;
    this.y
}
ViewHandler.prototype.init = function(main) {
    this.x = main.levelWidth * 0.5;
    this.y = main.levelHeight * 0.5;
    this.canvas = main.canvas;
    this.playerHandler = main.playerHandler;
    this.levelWidth = main.levelWidth;
    this.levelHeight = main.levelHeight
}
;
ViewHandler.prototype.enterFrame = function() {
    this.x += (this.playerHandler.x - this.x) * 0.05;
    if (this.x < this.playerHandler.x + 1 && this.x > this.playerHandler.x - 1) {
        this.x = this.playerHandler.x
    }
    this.y += (this.playerHandler.y - this.y) * 0.05;
    if (this.y < this.playerHandler.y + 1 && this.y > this.playerHandler.y - 1) {
        this.y = this.playerHandler.y
    }
    if (this.x < this.canvas.width * 0.5) {
        this.x = this.canvas.width * 0.5
    } else if (this.x > this.levelWidth - this.canvas.width * 0.5) {
        this.x = this.levelWidth - this.canvas.width * 0.5
    }
    if (this.y < this.canvas.height * 0.5) {
        this.y = this.canvas.height * 0.5
    } else if (this.y > this.levelHeight - this.canvas.height * 0.5) {
        this.y = this.levelHeight - this.canvas.height * 0.5
    }
}
;
function WallHandler(main) {
    this.speed = 0;
    this.list = [];
    this.pool = []
}
WallHandler.prototype.init = function(main) {
    this.list.length = 0;
    this.playerHandler = main.playerHandler;
    this.playerShotHandler = main.playerShotHandler;
    this.debrisHandler = main.debrisHandler;
    this.pickupHandler = main.pickupHandler
}
;
WallHandler.prototype.enterFrame = function() {
    var player = this.playerHandler;
    var i, j, wall, shot, dist, dist2, vX, vY;
    for (i = this.list.length - 1; i >= 0; i--) {
        wall = this.list[i];
        wall.delay--;
        if (wall.delay <= 0) {
            vX = player.x - wall.x;
            vY = player.y - wall.y;
            dist2 = vX * vX + vY * vY;
            if (dist2 < 144) {
                dist = 8
            } else if (dist2 < 576) {
                dist = 16
            } else if (dist2 < 2304) {
                dist = 32
            } else if (dist2 < 9216) {
                dist = 64
            } else if (dist2 < 36864) {
                dist = 128
            } else if (dist2 < 147456) {
                dist = 256
            } else if (dist2 < 589824) {
                dist = 512
            } else if (dist2 < 2359296) {
                dist = 1024
            } else {
                dist = 2048
            }
            dist = 0.5 * (dist2 / dist + dist);
            dist = 0.5 * (dist2 / dist + dist);
            if (dist - player.radius - wall.radius > 350) {
                wall.delay = Math.floor((dist - player.radius - wall.radius - 350) / player.speed)
            }
            if (dist - player.radius - wall.radius <= 0) {
                player.vX = vX * 0.06;
                player.vY = vY * 0.06
            }
            if (dist - player.radius - wall.radius <= 350) {
                for (j = this.playerShotHandler.list.length - 1; j >= 0; j--) {
                    shot = this.playerShotHandler.list[j];
                    dist2 = (shot.x - wall.x) * (shot.x - wall.x) + (shot.y - wall.y) * (shot.y - wall.y);
                    if (dist2 < 144) {
                        dist = 8
                    } else if (dist2 < 576) {
                        dist = 16
                    } else if (dist2 < 2304) {
                        dist = 32
                    } else if (dist2 < 9216) {
                        dist = 64
                    } else if (dist2 < 36864) {
                        dist = 128
                    } else if (dist2 < 147456) {
                        dist = 256
                    } else if (dist2 < 589824) {
                        dist = 512
                    } else if (dist2 < 2359296) {
                        dist = 1024
                    } else {
                        dist = 2048
                    }
                    dist = 0.5 * (dist2 / dist + dist);
                    dist = 0.5 * (dist2 / dist + dist) - shot.radius - wall.radius;
                    if (dist <= 0) {
                        this.playerShotHandler.hit(j);
                        this.damage(i, player.damage);
                        this.debrisHandler.create(shot.x, shot.y, Math.random() * 2 - 1, Math.random() * 2 - 1, 3)
                    }
                }
            }
        }
    }
}
;
WallHandler.prototype.create = function(x, y, level, radius) {
    var wall = this.pool.length > 0 ? this.pool.pop() : new Object();
    wall.x = x;
    wall.y = y;
    wall.delay = Math.round(Math.random() * 30);
    wall.radius = typeof radius === 'undefined' ? 9 : radius;
    wall.hp = 25 + level * 45;
    this.list.push(wall)
}
;
WallHandler.prototype.clearRadius = function(x, y, radius) {
    var i, wall, dist;
    for (i = this.list.length - 1; i >= 0; i--) {
        wall = this.list[i];
        dist = Math.sqrt((x - wall.x) * (x - wall.x) + (y - wall.y) * (y - wall.y));
        if (dist <= radius) {
            this.list.splice(i, 1)
        }
    }
}
;
WallHandler.prototype.damage = function(i, dmg) {
    this.list[i].hp -= dmg;
    if (this.list[i].hp <= 0) {
        var wall = this.list[i];
        if (Math.random() < 0.01) {
            this.pickupHandler.create(wall.x, wall.y)
        }
        for (var j = 0; j < 10; j++) {
            this.debrisHandler.create(wall.x, wall.y, Math.random() - 0.5, Math.random() - 0.5, 3);
            this.debrisHandler.create(wall.x, wall.y, Math.random() * 4 - 2, Math.random() * 4 - 2, 3)
        }
        this.pool.push(wall);
        this.list.splice(i, 1)
    }
}
;
window.onload = function() {
    new Main()
}
;
