window.onload = function() {
    new Main()
};

function BloodHandler() {
    this.radius = 7.0;
    this.startHp = 33;
    this.slow = 0.94;
    this.color = 'rgba(190,40,40,0.1)';
    this.list = [];
    this.pool = []
}
BloodHandler.prototype.init = function(main) {
    this.levelWidth = main.levelWidth;
    this.levelHeight = main.levelHeight;
    this.list.length = 0
};
BloodHandler.prototype.enterFrame = function() {
    var levelWidth = this.levelWidth;
    var levelHeight = this.levelWidth;
    var list = this.list;
    var pool = this.pool;
    var radius = this.radius;
    var slow = this.slow;
    for (var i = list.length - 1; i >= 0; i--) {
        unit = list[i];
        if (unit.hp <= 0 || unit.x < radius || unit.y < radius || unit.x > levelWidth - radius || unit.y > levelHeight - radius) {
            pool[pool.length] = list[i];
            list.splice(i, 1);
            continue
        }
        unit.x += unit.vX;
        unit.y += unit.vY;
        unit.vX *= slow;
        unit.vY *= slow;
        unit.hp--
    }
};
BloodHandler.prototype.create = function(x, y, vX, vY, splatter) {
    for (var i = 0; i < splatter; i++) {
        if (this.pool.length > 0) {
            var unit = this.pool.pop()
        } else {
            var unit = new Object()
        }
        unit.x = x;
        unit.y = y;
        unit.vX = vX * Math.random() * 0.6;
        unit.vY = vY * Math.random() * 0.6;
        unit.hp = this.startHp;
        this.list[this.list.length] = unit
    }
};

function BulletHandler() {
    this.radius = 2.0;
    this.splatter = 5;
    this.startHp = 50;
    this.slow = 0.98;
    this.color = '#555555';
    this.list = [];
    this.pool = []
}
BulletHandler.prototype.init = function(main) {
    this.levelWidth = main.levelWidth;
    this.levelHeight = main.levelHeight;
    this.treeList = main.treeHandler.list;
    this.treeRadius = main.treeHandler.radius;
    this.enemyList = main.enemyHandler.list;
    this.enemyRadius = main.enemyHandler.radius;
    this.enemySpeed = main.enemyHandler.speed;
    this.playerHandler = main.playerHandler;
    this.speed = main.playerHandler.bulletSpeed;
    this.createBlood = main.bloodHandler.create.bind(main.bloodHandler);
    this.list.length = 0
};
BulletHandler.prototype.enterFrame = function() {
    var levelWidth = this.levelWidth;
    var levelHeight = this.levelHeight;
    var list = this.list;
    var pool = this.pool;
    var radius = this.radius;
    var slow = this.slow;
    var adjustedEnemySpeed = this.enemySpeed + this.playerHandler.kills * 0.00005;
    MainLoop: for (var i = list.length - 1; i >= 0; i--) {
        var unit = list[i];
        if (unit.hp < 1 || unit.x < radius || unit.y < radius || unit.x > levelWidth || unit.y > levelHeight) {
            pool[pool.length] = list[i];
            list.splice(i, 1);
            continue
        }
        unit.x += unit.vX;
        unit.y += unit.vY;
        unit.vX *= slow;
        unit.vY *= slow;
        unit.hp--;
        unit.delay--;
        if (unit.delay <= 0 && Math.random() < 0.2) {
            var closest = 9999;
            for (var j = this.treeList.length - 1; j >= 0; j--) {
                var unit2 = this.treeList[j];
                var dist = Math.sqrt((unit2.x - unit.x) * (unit2.x - unit.x) + (unit2.y - unit.y) * (unit2.y - unit.y)) - this.treeRadius - radius;
                if (dist <= 0) {
                    pool[pool.length] = list[i];
                    list.splice(i, 1);
                    continue MainLoop
                }
                if (dist < closest) {
                    closest = dist
                }
            }
            unit.delay = closest / this.speed
        }
        unit.delay2--;
        if (unit.delay2 <= 0) {
            var closest = 9999;
            for (var j = this.enemyList.length - 1; j >= 0; j--) {
                var unit2 = this.enemyList[j];
                var dist = Math.sqrt((unit2.x - unit.x) * (unit2.x - unit.x) + (unit2.y - unit.y) * (unit2.y - unit.y)) - this.enemyRadius - radius;
                if (dist <= 0) {
                    unit2.hp--;
                    unit2.vX = unit.vX * 0.5;
                    unit2.vY = unit.vY * 0.5;
                    this.createBlood(unit.x, unit.y, unit.vX, unit.vY, this.splatter);
                    pool[pool.length] = list[i];
                    list.splice(i, 1);
                    continue MainLoop
                }
                if (dist < closest) {
                    closest = dist
                }
            }
            unit.delay2 = closest / (adjustedEnemySpeed + this.speed)
        }
    }
};
BulletHandler.prototype.create = function(sX, sY, vX, vY) {
    if (this.pool.length > 0) {
        var unit = this.pool.pop()
    } else {
        var unit = new Object()
    }
    unit.x = sX;
    unit.y = sY;
    unit.vX = vX;
    unit.vY = vY;
    unit.hp = this.startHp;
    unit.delay = Math.random() * 3;
    unit.delay2 = Math.random() * 3;
    this.list[this.list.length] = unit
};

function Controls(main) {
    this.a = false;
    this.d = false;
    this.w = false;
    this.s = false;
    this.mouseDown = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.main = main;
    this.canvas = main.canvas;
    window.addEventListener('keydown', this.keyDownEvent.bind(this));
    window.addEventListener('keyup', this.keyUpEvent.bind(this));
    this.canvas.addEventListener('mousedown', this.mouseDownEvent.bind(this));
    this.canvas.addEventListener('mouseup', this.mouseUpEvent.bind(this));
    window.addEventListener('mousemove', this.mouseMoveEvent.bind(this));
    this.canvas.addEventListener('contextmenu', this.contextMenuEvent.bind(this))
}
Controls.prototype.keyDownEvent = function(e) {
    if (e.keyCode == 87) {
        this.w = true
    } else if (e.keyCode == 83) {
        this.s = true
    } else if (e.keyCode == 65) {
        this.a = true
    } else if (e.keyCode == 68) {
        this.d = true
    }
};
Controls.prototype.keyUpEvent = function(e) {
    if (e.keyCode == 87) {
        this.w = false
    } else if (e.keyCode == 83) {
        this.s = false
    } else if (e.keyCode == 65) {
        this.a = false
    } else if (e.keyCode == 68) {
        this.d = false
    } else if (e.keyCode == 73) {
        this.main.performance = !this.main.performance
    } else if (e.keyCode == 72 && this.main.gameMenu) {
        new RulesScreen(this.main)
    } else if (e.keyCode == 80 && !this.main.gameMenu && !this.main.paused) {
        new PauseScreen(this.main)
    } else if (e.keyCode >= 48 && e.keyCode <= 57 && this.main.gameMenu && this.mouseDown) {
        this.main.playerHandler.startingEnergy = (e.keyCode - 48) * 1000;
        this.main.playerHandler.startingKills = this.main.playerHandler.startingEnergy * 0.85
    }
};
Controls.prototype.mouseDownEvent = function(e) {
    this.mouseDown = true
};
Controls.prototype.mouseUpEvent = function(e) {
    if (this.mouseDown) {
        if (this.main.gameMenu) {
            this.main.startGame()
        } else if (this.main.paused) {
            this.main.paused = false
        }
    }
    this.mouseDown = false
};
Controls.prototype.mouseMoveEvent = function(e) {
    var rect = this.canvas.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top
};
Controls.prototype.contextMenuEvent = function(e) {
    e.preventDefault()
};

function EnemyHandler() {
    this.radius = 7;
    this.startHp = 4;
    this.accel = 0.01;
    this.speed = 0.4;
    this.spawnRate = 0.035;
    this.max = 600;
    this.congregate = 0.2;
    this.color = '#AA1111';
    this.list = [];
    this.pool = []
}
EnemyHandler.prototype.init = function(main) {
    this.levelWidth = main.levelWidth;
    this.levelHeight = main.levelHeight;
    this.player = main.playerHandler;
    this.playerRadius = this.player.radius;
    this.playerSpeed = this.player.speed;
    this.treeList = main.treeHandler.list;
    this.treeRadius = main.treeHandler.radius;
    this.createBlood = main.bloodHandler.create.bind(main.bloodHandler);
    this.list.length = 0;
    this.spawnX = 0;
    this.spawnY = 0
};
EnemyHandler.prototype.enterFrame = function() {
    var levelWidth = this.levelWidth;
    var levelHeight = this.levelHeight;
    var radius = this.radius;
    var player = this.player;
    var playerRadius = this.playerRadius;
    var treeList = this.treeList;
    var treeRadius = this.treeRadius;
    var adjustedSpeed = this.speed + player.kills * 0.00005;
    var i, j, unit, unit2, dist, dist2, closest, vX, vY, aX, aY, ratio;
    if (this.list.length < this.max) {
        var adjustedSpawnRate = this.spawnRate + player.kills * 0.0003;
        while (adjustedSpawnRate > 1) {
            adjustedSpawnRate--;
            this.create()
        }
        if (Math.random() < adjustedSpawnRate) {
            this.create()
        }
    }
    for (i = this.list.length - 1; i >= 0; i--) {
        unit = this.list[i];
        if (unit.hp <= 0) {
            player.kills++;
            player.energy += 2;
            this.pool[this.pool.length] = this.list[i];
            this.list.splice(i, 1)
        } else {
            dist2 = (player.x - unit.x) * (player.x - unit.x) + (player.y - unit.y) * (player.y - unit.y);
            if (dist2 < (playerRadius + radius) * (playerRadius + radius)) {
                player.vX = (player.x - unit.x) * Math.random() / 2;
                player.vY = (player.y - unit.y) * Math.random() / 2;
                player.hp -= 2;
                this.createBlood(player.x, player.y, player.vX, player.vY, 9);
                player.energy = player.energy > 2 ? player.energy - 2 : 0
            }
            if (dist2 < (200 + playerRadius + radius) * (200 + playerRadius + radius) || Math.random() < 0.2) {
                vX = player.x - unit.x;
                vY = player.y - unit.y;
                aX = Math.abs(vX);
                aY = Math.abs(vY);
                ratio = 1 / Math.max(aX, aY);
                ratio = ratio * (1.29289 - (aX + aY) * ratio * 0.29289) * adjustedSpeed;
                vX *= ratio;
                vY *= ratio
            } else {
                vX = 0;
                vY = 0
            }
            unit.vX = (unit.vX * 19 + vX) * 0.05;
            unit.vY = (unit.vY * 19 + vY) * 0.05;
            unit.vX += Math.random() * 0.2 - 0.1;
            unit.vY += Math.random() * 0.2 - 0.1;
            unit.x += unit.vX;
            unit.y += unit.vY;
            if (unit.x < radius) {
                unit.x = radius
            } else if (unit.x > levelWidth - radius) {
                unit.x = levelWidth - radius
            }
            if (unit.y < radius) {
                unit.y = radius
            } else if (unit.y > levelHeight - radius) {
                unit.y = levelHeight - radius
            }
            if (dist2 < (400 + playerRadius + radius) * (400 + playerRadius + radius)) {
                unit.delay--;
                if (unit.delay <= 0) {
                    closest = 9999;
                    for (j = treeList.length - 1; j >= 0; j--) {
                        unit2 = treeList[j];
                        dist2 = (unit2.x - unit.x) * (unit2.x - unit.x) + (unit2.y - unit.y) * (unit2.y - unit.y);
                        if (dist2 < (treeRadius + radius) * (treeRadius + radius)) {
                            dist = 0;
                            if (Math.abs(unit.vX) + Math.abs(unit.vY) > 0.5) {
                                unit.vX = (unit.x - unit2.x) * 0.04;
                                unit.vY = (unit.y - unit2.y) * 0.04
                            } else {
                                if (unit.x > unit2.x && unit.vX < 0 || unit.x < unit2.x && unit.vX > 0) {
                                    unit.vX *= 0.8
                                }
                                if (unit.y > unit2.y && unit.vY < 0 || unit.y < unit2.y && unit.vY > 0) {
                                    unit.vY *= 0.8
                                }
                            }
                        } else {
                            dist = Math.sqrt(dist2) - treeRadius - radius
                        }
                        if (dist < closest) {
                            closest = dist
                        }
                    }
                    unit.delay = closest / adjustedSpeed
                }
            }
        }
    }
};
EnemyHandler.prototype.create = function() {
    var list, unit;
    if (Math.random() < this.congregate || this.spawnX == 0 || this.spawnY == 0) {
        list = Math.random() < 0.5 && this.list.length > 0 ? this.list : this.treeList;
        unit = list[Math.floor(Math.random() * list.length)];
        this.spawnX = unit.x;
        this.spawnY = unit.y
    }
    if (this.pool.length > 0) {
        unit = this.pool.pop()
    } else {
        unit = new Object()
    }
    unit.x = this.spawnX + Math.random() * 20 - 10;
    unit.y = this.spawnY + Math.random() * 20 - 10;
    unit.vX = 0;
    unit.vY = 0;
    unit.hp = this.startHp;
    unit.delay = Math.random() * 3;
    this.list[this.list.length] = unit
};

function GameOverScreen(main) {
    main.gameMenu = true;
    main.controls.mouseDown = false;
    main.context.clearRect(0, 0, main.canvas.width, main.canvas.height);
    var hW = main.canvas.width * 0.5;
    var hH = main.canvas.height * 0.5;
    var dark = 'rgba(0,0,0,0.9)';
    var medium = 'rgba(0,0,0,0.5)';
    var light = 'rgba(0,0,0,0.3)';
    var totalScore = Math.round(main.playerHandler.kills * 0.5 + main.playerHandler.energy * 2);
    new Text(main.context, 'Roguelike 3', 9, 18, 'normal 21px/1 ' + main.fontFamily, light, 'left');
    new Text(main.context, 'Game Over!', hW, hH - 90, 'normal 22px/1 ' + main.fontFamily, dark);
    new Text(main.context, 'Kills:' + main.playerHandler.kills, hW, hH - 50, 'normal 16px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'Energy:' + main.playerHandler.energy, hW, hH - 30, 'normal 16px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'Total Score:' + totalScore, hW, hH - 10, 'normal 16px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'Click to Restart', hW, hH + 30, 'normal 17px/1 ' + main.fontFamily, dark);
    new Text(main.context, 'Press "H" for game rules.', hW, hH + 50, 'normal 15px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'www.H3XED.com', 9, main.canvas.height - 14, 'normal 13px/1 ' + main.fontFamily, light, 'left')
}

function Main() {
    this.performance = false;
    this.gameMenu = true;
    this.paused = false;
    this.runningSlow = 0;
    this.levelWidth = 1000;
    this.levelHeight = 800;
    this.handlers = ['blood', 'enemy', 'bullet', 'player', 'tree', 'render'];
    this.fontFamily = '"Segoe UI",Arial,sans-serif';
    this.canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    this.controls = new Controls(this);
    this.totalTimeAverage = 0;
    for (var i = 0; i < this.handlers.length; i++) {
        var handlerName = this.handlers[i] + 'Handler';
        var className = handlerName.charAt(0).toUpperCase() + handlerName.slice(1);
        this[handlerName] = new window[className]
    }
    setInterval(this.enterFrame.bind(this), 1000 / 60);
    new StartScreen(this)
}
Main.prototype.startGame = function() {
    for (var i = 0; i < this.handlers.length; i++) {
        this[this.handlers[i] + 'Handler'].init(this)
    }
    this.gameMenu = false;
    this.paused = false
};
Main.prototype.enterFrame = function() {
    if (this.gameMenu == false && this.paused == false) {
        if (this.playerHandler.hp <= 0) {
            new GameOverScreen(this)
        } else {
            if (this.performance) {
                var info = new Object();
                var totalStartTime = Date.now();
                var enemyHandler = this.enemyHandler;
                var playerHandler = this.playerHandler;
                info.DelayMS = '';
                for (var i = 0; i < this.handlers.length; i++) {
                    var startTime = Date.now();
                    this[this.handlers[i] + 'Handler'].enterFrame(info);
                    var endTime = Date.now();
                    info[this.handlers[i]] = endTime - startTime
                }
                var totalEndTime = Date.now();
                info.total = totalEndTime - totalStartTime;
                info[' '] = '';
                info.Attributes = '';
                info.spawn = Math.round((enemyHandler.spawnRate + playerHandler.kills * 0.0003) * 1000) / 1000;
                info.shots = Math.round(playerHandler.bulletShots + playerHandler.energy * 0.002);
                info.reload = Math.round(playerHandler.reloadRate - playerHandler.energy * (0.01 - playerHandler.energy * 0.000001));
                info.reload = info.reload < 3 ? 3 : (info.reload > 26 ? 26 : info.reload);
                info.bulletC = this.bulletHandler.list.length;
                info.bulletP = this.bulletHandler.pool.length;
                info.bloodC = this.bloodHandler.list.length;
                info.bloodP = this.bloodHandler.pool.length;
                info.enemyC = enemyHandler.list.length;
                info.enemyP = enemyHandler.pool.length;
                info.enemySp = Math.round((enemyHandler.speed + playerHandler.kills * 0.00005) * 1000) / 1000;
                var context = this.context;
                context.fillStyle = '#FAFAFA';
                context.fillRect(0, 20, 102, this.canvas.height - 20);
                i = 0;
                for (var each in info) {
                    context.font = 'normal 12px/1 Arial';
                    context.fillStyle = '#777777';
                    context.fillText(each, 5, 31 + 17 * i);
                    context.font = 'normal 12px/1 Arial';
                    context.fillStyle = '#444444';
                    context.fillText(info[each], 63, 31 + 17 * i);
                    i++
                }
            } else {
                var totalStartTime = Date.now();
                for (var i = 0; i < this.handlers.length; i++) {
                    this[this.handlers[i] + 'Handler'].enterFrame()
                }
                var totalEndTime = Date.now()
            }
            this.totalTimeAverage = ((this.totalTimeAverage * 59) + (totalEndTime - totalStartTime)) / 60;
            if (this.totalTimeAverage > 11) {
                this.runningSlow++;
                this.totalTimeAverage *= 0.7
            } else if (this.totalTimeAverage < 5 && this.runningSlow > 0) {
                this.runningSlow--;
                this.totalTimeAverage /= 0.7
            }
        }
    }
};

function Object() {}

function PauseScreen(main) {
    main.paused = true;
    main.controls.mouseDown = false;
    main.context.fillStyle = 'rgba(255,255,255,0.8)';
    main.context.fillRect(0, 0, main.canvas.width, main.canvas.height);
    var totalScore = Math.round(main.playerHandler.kills * 0.5 + main.playerHandler.energy * 2);
    var hW = main.canvas.width * 0.5;
    var hH = main.canvas.height * 0.5;
    var dark = 'rgba(0,0,0,0.9)';
    var medium = 'rgba(0,0,0,0.5)';
    var light = 'rgba(0,0,0,0.3)';
    new Text(main.context, 'Paused', hW, hH - 15, 'normal 22px/1 ' + main.fontFamily, dark);
    new Text(main.context, 'Click to Continue', hW, hH + 15, 'normal 17px/1 ' + main.fontFamily, dark)
}

function PlayerHandler() {
    this.radius = 6;
    this.color = '#222222';
    this.regen = 0.005;
    this.accel = 0.3;
    this.speed = 1.5;
    this.startHp = 100.0;
    this.reloadRate = 26.0;
    this.bulletShots = 7.0;
    this.bulletSpeed = 5.3;
    this.startingKills = 0;
    this.startingEnergy = 0;
    this.list = [this]
}
PlayerHandler.prototype.init = function(main) {
    this.levelWidth = main.levelWidth;
    this.levelHeight = main.levelHeight;
    this.controls = main.controls;
    this.canvas = document.getElementById('canvas');
    this.treeList = main.treeHandler.list;
    this.treeRadius = main.treeHandler.radius;
    this.shoot = main.bulletHandler.create.bind(main.bulletHandler);
    this.offsetX = canvas.width * 0.5;
    this.offsetY = canvas.height * 0.5;
    this.x = this.levelWidth * 0.5;
    this.y = this.levelHeight * 0.5;
    this.vX = 0;
    this.vY = 0;
    this.hp = this.startHp;
    this.delay = 1;
    this.kills = this.startingKills;
    this.reload = 0;
    this.energy = this.startingEnergy
};
PlayerHandler.prototype.enterFrame = function() {
    var controls = this.controls;
    var radius = this.radius;
    var accel = this.accel;
    var speed = this.speed;
    var vX = controls.a ? -accel : (controls.d ? accel : 0);
    var vY = controls.w ? -accel : (controls.s ? accel : 0);
    if (vX != 0 && vY != 0) {
        vX *= 0.7071;
        vY *= 0.7071
    } else if (vX == 0 && vY == 0) {
        this.vX *= 0.7;
        this.vY *= 0.7
    }
    this.vX += vX;
    this.vY += vY;
    var dist = Math.sqrt(this.vX * this.vX + this.vY * this.vY);
    if (dist > speed) {
        var ratio = speed / dist;
        this.vX *= ratio;
        this.vY *= ratio
    }
    this.x += this.vX;
    this.y += this.vY;
    if (this.x < radius) {
        this.x = radius
    } else if (this.x > this.levelWidth - radius) {
        this.x = this.levelWidth - radius
    }
    if (this.y < radius) {
        this.y = radius
    } else if (this.y > this.levelHeight - radius) {
        this.y = this.levelHeight - radius
    }
    this.hp = this.hp > this.startHp ? this.startHp : this.hp + this.regen;
    this.reload--;
    if (controls.mouseDown && this.reload <= 0) {
        var vX = controls.mouseX - this.offsetX;
        var vY = controls.mouseY - this.offsetY;
        var dist = Math.sqrt(vX * vX + vY * vY);
        vX = vX / dist * this.bulletSpeed;
        vY = vY / dist * this.bulletSpeed;
        var adjustedBulletShots = Math.round(this.bulletShots + this.energy * 0.002);
        for (var i = adjustedBulletShots - 1; i >= 0; i--) {
            this.shoot(this.x, this.y, vX + Math.random() - 0.5, vY + Math.random() - 0.5)
        }
        this.energy = this.energy > 0 ? this.energy - 1 : 0;
        var adjustedReloadRate = Math.round(this.reloadRate - this.energy * (0.01 - this.energy * 0.000001));
        this.reload = adjustedReloadRate < 3 ? 3 : (adjustedReloadRate > 26 ? 26 : adjustedReloadRate)
    }
    this.delay--;
    if (this.delay <= 0) {
        var closest = 9999;
        for (var i = this.treeList.length - 1; i >= 0; i--) {
            var unit2 = this.treeList[i];
            var dist = Math.sqrt((unit2.x - this.x) * (unit2.x - this.x) + (unit2.y - this.y) * (unit2.y - this.y)) - this.treeRadius - radius;
            if (dist <= 0) {
                if (Math.abs(this.vX) + Math.abs(this.vY) > 1.5) {
                    this.vX = (this.x - unit2.x) * 0.08;
                    this.vY = (this.y - unit2.y) * 0.08
                } else {
                    if (this.x > unit2.x && this.vX < 0 || this.x < unit2.x && this.vX > 0) {
                        this.vX *= 0.4
                    }
                    if (this.y > unit2.y && this.vY < 0 || this.y < unit2.y && this.vY > 0) {
                        this.vY *= 0.4
                    }
                }
            }
            if (dist < closest) {
                closest = dist
            }
        }
        this.delay = closest / speed
    }
};

function RenderHandler() {
    this.bloodColor = 'rgba(190,70,70,0.15)'
}
RenderHandler.prototype.init = function(main) {
    this.main = main;
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.player = main.playerHandler;
    this.levelWidth = main.levelWidth;
    this.levelHeight = main.levelHeight;
    this.offsetX = this.canvas.width * 0.5;
    this.offsetY = this.canvas.height * 0.5;
    this.bgCanvas = document.createElement('canvas');
    this.bgCanvas.width = this.levelWidth;
    this.bgCanvas.height = this.levelHeight;
    this.bgContext = this.bgCanvas.getContext('2d');
    this.bgContext.fillStyle = this.bloodColor
};
RenderHandler.prototype.enterFrame = function() {
    var canvasWidth = this.canvas.width;
    var canvasHeight = this.canvas.height;
    var context = this.context;
    var bgContext = this.bgContext;
    var offsetX = this.offsetX - this.player.x;
    var offsetY = this.offsetY - this.player.y;
    var runningSlow = this.main.runningSlow;
    var i, list, radius, unit, adjRadius, unitX, unitY;
    context.clearRect(0, 20, canvasWidth, canvasHeight - 20);
    context.drawImage(this.bgCanvas, offsetX, offsetY);
    context.strokeStyle = '#777777';
    context.lineWidth = 1;
    context.strokeRect(offsetX, offsetY, this.levelWidth, this.levelHeight);
    list = this.main.enemyHandler.list;
    radius = this.main.enemyHandler.radius;
    context.fillStyle = this.main.enemyHandler.color;
    if (runningSlow == 0) {
        for (i = list.length - 1; i >= 0; i--) {
            unit = list[i];
            unitX = unit.x + offsetX;
            unitY = unit.y + offsetY;
            if (unitX > -radius && unitX < canvasWidth + radius && unitY > 20 - radius && unitY < canvasHeight + radius) {
                context.beginPath();
                context.arc(unitX, unitY, radius, 0, 6.2832);
                context.fill()
            }
        }
    } else if (runningSlow == 1) {
        for (i = list.length - 1; i >= 0; i--) {
            unit = list[i];
            unitX = unit.x + offsetX | 0;
            unitY = unit.y + offsetY | 0;
            if (unitX > -radius && unitX < canvasWidth + radius && unitY > 20 - radius && unitY < canvasHeight + radius) {
                context.fillRect(unitX - radius + 2, unitY - radius, radius * 2 - 4, radius * 2);
                context.fillRect(unitX - radius, unitY - radius + 2, radius * 2, radius * 2 - 4)
            }
        }
    } else {
        for (i = list.length - 1; i >= 0; i--) {
            unit = list[i];
            unitX = unit.x + offsetX | 0;
            unitY = unit.y + offsetY | 0;
            if (unitX > -radius && unitX < canvasWidth + radius && unitY > 20 - radius && unitY < canvasHeight + radius) {
                context.fillRect(unitX - radius, unitY - radius, radius * 2, radius * 2)
            }
        }
    }
    list = this.main.bulletHandler.list;
    radius = this.main.bulletHandler.radius;
    context.fillStyle = this.main.bulletHandler.color;
    for (i = list.length - 1; i >= 0; i--) {
        unit = list[i];
        adjRadius = radius * unit.hp * 0.02;
        context.fillRect((unit.x + offsetX | 0) - adjRadius, (unit.y + offsetY | 0) - adjRadius, adjRadius * 2, adjRadius * 2)
    }
    radius = this.main.playerHandler.radius;
    context.fillStyle = this.main.playerHandler.color;
    if (runningSlow == 0) {
        context.beginPath();
        context.arc(this.offsetX, this.offsetY, radius, 0, 6.2832);
        context.fill()
    } else if (runningSlow == 1) {
        context.fillRect(this.offsetX - radius + 2, this.offsetY - radius, radius * 2 - 4, radius * 2);
        context.fillRect(this.offsetX - radius, this.offsetY - radius + 2, radius * 2, radius * 2 - 4)
    } else {
        context.fillRect(this.offsetX - radius, this.offsetY - radius, radius * 2, radius * 2)
    }
    list = this.main.bloodHandler.list;
    radius = this.main.bloodHandler.radius;
    context.fillStyle = this.main.bloodHandler.color;
    if (runningSlow == 0) {
        for (i = list.length - 1; i >= 0; i--) {
            unit = list[i];
            adjRadius = radius * unit.hp * 0.02;
            context.fillRect(unit.x + offsetX - adjRadius, unit.y + offsetY - adjRadius, adjRadius * 2, adjRadius * 2);
            if (Math.random() < 0.3) {
                bgContext.fillRect(unit.x, unit.y, 1, 1)
            }
        }
    } else {
        for (i = list.length - 1; i >= 0; i--) {
            unit = list[i];
            adjRadius = radius * unit.hp * 0.02;
            context.fillRect((unit.x + offsetX | 0) - adjRadius, (unit.y + offsetY | 0) - adjRadius, adjRadius * 2, adjRadius * 2);
            if (Math.random() < 0.25) {
                bgContext.fillRect(unit.x, unit.y, 1, 1)
            }
        }
    }
    list = this.main.treeHandler.list;
    radius = this.main.treeHandler.radius;
    context.fillStyle = this.main.treeHandler.color;
    if (runningSlow == 0) {
        for (i = list.length - 1; i >= 0; i--) {
            unit = list[i];
            unitX = unit.x + offsetX;
            unitY = unit.y + offsetY;
            if (unitX > -radius && unitX < canvasWidth + radius && unitY > 20 - radius && unitY < canvasHeight + radius) {
                context.beginPath();
                context.arc(unitX, unitY, radius, 0, 6.2832);
                context.fill()
            }
        }
    } else if (runningSlow == 1) {
        for (i = list.length - 1; i >= 0; i--) {
            unit = list[i];
            unitX = unit.x + offsetX | 0;
            unitY = unit.y + offsetY | 0;
            if (unitX > -radius && unitX < canvasWidth + radius && unitY > 20 - radius && unitY < canvasHeight + radius) {
                context.fillRect(unitX - radius + 4, unitY - radius, radius * 2 - 8, radius * 2);
                context.fillRect(unitX - radius, unitY - radius + 4, radius * 2, radius * 2 - 8)
            }
        }
    } else {
        for (i = list.length - 1; i >= 0; i--) {
            unit = list[i];
            unitX = unit.x + offsetX | 0;
            unitY = unit.y + offsetY | 0;
            if (unitX > -radius && unitX < canvasWidth + radius && unitY > 20 - radius && unitY < canvasHeight + radius) {
                context.fillRect(unitX - radius + 1, unitY - radius + 1, radius * 2 - 2, radius * 2 - 2)
            }
        }
    }
    context.fillStyle = '#444444';
    context.fillRect(0, 0, canvasWidth, 20);
    context.textAlign = 'left';
    context.font = 'bold 11px/1 Arial';
    context.fillStyle = '#AAAAAA';
    context.fillText('H', 5, 10);
    context.fillText('E', 85, 10);
    context.fillText('K', 165, 10);
    context.font = 'bold 15px/1 Arial';
    context.fillStyle = '#DDDDDD';
    context.fillText(Math.round(this.player.hp), 15, 10);
    context.fillText(Math.round(this.player.energy), 95, 10);
    context.fillText(Math.round(this.player.kills), 175, 10)
};

function RulesScreen(main) {
    main.gameMenu = true;
    main.controls.mouseDown = false;
    main.context.clearRect(0, 0, main.canvas.width, main.canvas.height);
    var hW = main.canvas.width * 0.5;
    var hH = main.canvas.height * 0.5;
    var dark = 'rgba(0,0,0,0.9)';
    var medium = 'rgba(0,0,0,0.5)';
    var light = 'rgba(0,0,0,0.3)';
    new Text(main.context, 'Roguelike 3', 9, 18, 'normal 21px/1 ' + main.fontFamily, light, 'left');
    new Text(main.context, 'Rules and Controls', hW, hH - 90, 'normal 17px/1 ' + main.fontFamily, dark);
    new Text(main.context, 'Use "WASD" to move, "Left Click" to shoot, and "P" to pause.', hW, hH - 50, 'normal 15px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'Shooting uses energy. Destroying enemies increases it.', hW, hH - 30, 'normal 15px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'Touching enemies depletes your health and energy.', hW, hH - 10, 'normal 15px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'Energy increases your weapon strength and fire rate.', hW, hH + 10, 'normal 15px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'More kills increases enemy spawn rate and speed.', hW, hH + 30, 'normal 15px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'Your score is based on your energy and kills.', hW, hH + 50, 'normal 15px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'Trees block some movement and bullets.', hW, hH + 70, 'normal 15px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'Click to Start', hW, hH + 110, 'normal 17px/1 ' + main.fontFamily, dark);
    new Text(main.context, 'www.H3XED.com', 9, main.canvas.height - 14, 'normal 13px/1 ' + main.fontFamily, light, 'left')
}

function StartScreen(main) {
    main.gameMenu = true;
    main.controls.mouseDown = false;
    main.context.clearRect(0, 0, main.canvas.width, main.canvas.height);
    var hW = main.canvas.width * 0.5;
    var hH = main.canvas.height * 0.5;
    var dark = 'rgba(0,0,0,0.9)';
    var medium = 'rgba(0,0,0,0.5)';
    var light = 'rgba(0,0,0,0.3)';
    new Text(main.context, 'Roguelike 3', 9, 18, 'normal 21px/1 ' + main.fontFamily, light, 'left');
    new Text(main.context, 'Click to Start', hW, hH - 10, 'normal 17px/1 ' + main.fontFamily, dark);
    new Text(main.context, 'Press "H" for game rules.', hW, hH + 10, 'normal 15px/1 ' + main.fontFamily, medium);
    new Text(main.context, 'www.H3XED.com', 9, main.canvas.height - 14, 'normal 13px/1 ' + main.fontFamily, light, 'left')
}

function Text(context, text, x, y, font, style, align, baseline) {
    context.font = typeof font === 'undefined' ? 'normal 16px/1 Arial' : font;
    context.fillStyle = typeof style === 'undefined' ? '#000000' : style;
    context.textAlign = typeof align === 'undefined' ? 'center' : align;
    context.textBaseline = typeof baseline === 'undefined' ? 'middle' : baseline;
    context.fillText(text, x, y)
}

function TreeHandler() {
    this.radius = 9;
    this.startCount = 250;
    this.congregate = 0.25;
    this.color = '#558866';
    this.list = []
}
TreeHandler.prototype.init = function(main) {
    this.list.length = 0;
    var targetX = 0;
    var targetY = 0;
    for (var i = 0; i < this.startCount; i++) {
        var unit = new Object();
        unit.x = Math.round(targetX + Math.random() * 100 - 50);
        unit.y = Math.round(targetY + Math.random() * 100 - 50);
        if (unit.x < this.radius) {
            unit.x = this.radius
        } else if (unit.x > main.levelWidth - this.radius) {
            unit.x = main.levelWidth - this.radius
        }
        if (unit.y < this.radius) {
            unit.y = this.radius
        } else if (unit.y > main.levelHeight - this.radius) {
            unit.y = main.levelHeight - this.radius
        }
        this.list[this.list.length] = unit;
        if (Math.random() < this.congregate) {
            targetX = Math.random() * main.levelWidth;
            targetY = Math.random() * main.levelHeight
        }
    }
};
TreeHandler.prototype.enterFrame = function() {};