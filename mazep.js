let maze = {
    map:[
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],
        [0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],
        [0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,]

    ],

    player: {
        x: 0,
        y: 0
    },
    goal: {
        x: 43,
        y: 21
    },
    theme: 'default'
};
/*
 *  The Game Object.
 * 
 * @param {String} id - the id of the dom element.
 * @param {Object} maze - the initial maze being passed in.
 */
function Game(id, maze) {

    this.el = document.getElementById(id);

    this.tileTypes = ['wall', 'floor'];

    this.tileDim = 20;

    // inherit the maze's properties: map, player start, goal start.
    this.map = maze.map;
    this.theme = maze.theme;
    this.player = { ...maze.player };
    this.goal = { ...maze.goal };
}
/*
 *  Populates the map with a nested loop.
 */
Game.prototype.populateMap = function () {

    this.el.className = 'game-container ' + this.theme;

    let tiles = document.getElementById('tiles');

    for (var y = 0; y < this.map.length; ++y) {

        for (var x = 0; x < this.map[y].length; ++x) {

            let tileCode = this.map[y][x];

            let tileType = this.tileTypes[tileCode];

            let tile = this.createEl(x, y, tileType);

            tiles.appendChild(tile); // add to tile layer
        }
    }
}
/*
 * Creates a tile or sprite element.
 * 
 * @param {Number} x - The x coordinate.
 * @param {Number} y - The y coordinate.
 */
Game.prototype.createEl = function (x, y, type) {
    // create one tile.
    let el = document.createElement('div');

    // two class names: one for tile, one or the tile type.
    el.className = type;

    // set width and height of tile based on the passed-in dimensions.
    el.style.width = el.style.height = this.tileDim + 'px';

    // set left positions based on x coordinate.
    el.style.left = x * this.tileDim + 'px';

    // set top position based on y coordinate.
    el.style.top = y * this.tileDim + 'px';

    return el;
}
Game.prototype.createspEl = function (x, y, type) {
    // create one tile.
    let spel = document.createElement('div');

    // two class names: one for tile, one or the tile type.
    spel.className = type;

    // set width and height of tile based on the passed-in dimensions.
    spel.style.width = spel.style.height = this.tileDim * 2.5 + 'px';

    // set left positions based on x coordinate.
    spel.style.left = x * this.tileDim + 'px';

    // set top position based on y coordinate.
    spel.style.top = y * this.tileDim + 'px';

    return spel;
}
/*
 *  Places a player or goal sprite.
 * 
 *  @param {String} type - The type of sprite or tile.
 */
Game.prototype.placeSprite = function (type) {

    // syntactic sugar
    let x = this[type].x

    let y = this[type].y;

    // reuse the createTile function
    let sprite = this.createspEl(x, y, type);

    sprite.id = type;

    // set the border radius of the sprite.
    sprite.style.borderRadius = this.tileDim + 'px';

    // get half the difference between tile and sprite.

    // grab the layer
    let layer = this.el.querySelector('#sprites');

    layer.appendChild(sprite);

    return sprite;
}
/*
 *  Sizes up map.
 */
Game.prototype.sizeUp = function () {

    // inner container so that text can be below it
    let map = this.el.querySelector('.game-map');

    // inner container, height. Need this.map
    map.style.height = this.map.length * this.tileDim + 'px';

    map.style.width = this.map[0].length * this.tileDim + 'px';
}
/* 
 *  Moves the player.
 *  @param {Object} event - The event object.
 */
Game.prototype.movePlayer = function (event) {

    event.preventDefault();


    switch (event.keyCode) {
        case 13:
            this.solvemaze();
            break;

        case 37:
            this.moveLeft();
            break;

        case 38:
            this.moveUp();
            break;

        case 39:
            this.moveRight();
            break;

        case 40:
            this.moveDown();
            break;

    }
}
/*
 *  Checks for the goal.
 */
Game.prototype.checkGoal = function () {

    let body = document.querySelector('body');
    let usi=document.getElementById('success-image');
    let gamecont=document.getElementById('game-container-1');


    if (this.player.y == this.goal.y &&
        this.player.x == this.goal.x) {
        body.className = 'success';
        gamecont.style.display="none";
        usi.style.display="flex";
        

    }
    else {
        body.className = '';
    }

}
/*
 *  Listens for keyboard input.
 */
Game.prototype.keyboardListener = function () {

    document.addEventListener('keydown', event => {

        this.movePlayer(event);

        this.checkGoal();
    });
}

/*
 * Move player left.
 */

Game.prototype.moveLeft = function () {

    if (this.player.x == 0) {
        return;
    }

    let nextTile = this.map[this.player.y][this.player.x - 1];
    if (nextTile == 0) {
        return;
    }

    this.player.x -= 1;

    this.updateHoriz();
}
Game.prototype.moveUp = function () {

    if (this.player.y == 0) {
        return;
    }

    let nextTile = this.map[this.player.y - 1][this.player.x];
    if (nextTile == 0) {
        return;
    }

    this.player.y -= 1;

    this.updateVert();
}
/*
 *  Moves the player right.
 */
Game.prototype.moveRight = function () {

    if (this.player.x == this.map[this.player.y].length - 1) {
        return;
    }
    let nextTile = this.map[this.player.y][this.player.x + 1];

    if (nextTile == 0) {
        return;
    }

    this.player.x += 1;

    this.updateHoriz();
}
/*
 * Moves the player down.
 */
function shortestPath(n, m, matrix) {
    // Create a stack for storing the nodes along with distances
    // in the form of a pair { dist, node }.
    let pq = [];
    let dirrow = [0, 1, 0, -1];
    let dircol = [1, 0, -1, 0];

    // Create a dist array for storing the updated distances and a parent array
    // for storing the nodes from where the current nodes represented by indices of
    // the parent array came from.
    let dist = Array.from({ length: n }, () => Array(m).fill(1000));
    let parent = Array.from({ length: n }, () => Array(m));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            parent[i][j] = [i, j];
        }
    }

    dist[0][0] = 1;

    // Push the source node to the stack.
    pq.push([0, 0]);
    while (pq.length > 0) {
        // Topmost element of the stack is with minimum distance value.
        let it = pq.pop();
        let crow = it[0];
        let ccol = it[1];
        let dis1 = dist[crow][ccol];

        for (let dir = 0; dir < 4; dir++) {
            let dx = crow + dirrow[dir];
            let dy = ccol + dircol[dir];
            if (dx >= 0 && dx < n && dy >= 0 && dy < m && matrix[dx][dy] === 1) {
                let dis2 = dist[dx][dy];
                if (dis1 + 1 < dis2) {
                    dis2 = dis1 + 1;
                    pq.push([dx, dy]);
                    dist[dx][dy] = dis2;
                    parent[dx][dy] = [crow, ccol];
                }
            }
        }
        // Iterate through the adjacent nodes of the current popped node.
    }

    // Store the final path in the ‘path’ array.
    let path = [];
    let endr = n - 1, endc = m - 1;

    // Iterate backwards from destination to source through the parent array.
    while (parent[endr][endc][0] !== endr || parent[endr][endc][1] !== endc) {
        path.push([endr, endc]);
        let nendr = parent[endr][endc][0];
        let nendc = parent[endr][endc][1];
        endr = nendr;
        endc = nendc;
    }
    path.push([0, 0]);

    // Since the path stored is in a reverse order, we reverse the array
    // to get the final answer and then return the array.
    path.reverse();
    return path;
}
Game.prototype.solvemaze = async function () {


    const path = shortestPath(this.map.length, this.map[0].length, this.map);


    var c = 0;
    for (var i = 1; i < path.length; i++) {

        var ypos = path[i][0];
        var xpos = path[i][1];

        if (this.player.x != xpos) this.player.x = xpos;
        else if (this.player.y != ypos) this.player.y = ypos;

        this.updateHoriz();
        this.updateVert();

        this.checkGoal();
        await delay(100);




    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
   
}

Game.prototype.btnlistener = function () {
    var solvebtn = document.getElementById("solve");

    solvebtn.addEventListener("click", event => { this.solvemaze() });
    this.checkGoal();
}




Game.prototype.moveDown = function () {

    if (this.player.y == this.map.length - 1) {
        return;
    }
    let nextTile = this.map[this.player.y + 1][this.player.x];

    if (nextTile == 0) {
        return;
    }

    this.player.y += 1;

    this.updateVert();
}

/* 
 * Update helpers for player movement.
 */

Game.prototype.updateHoriz = function () {
    this.player.el.style.left = this.player.x * this.tileDim + 'px';
};

Game.prototype.updateVert = function () {
    this.player.el.style.top = this.player.y * this.tileDim + 'px';
};

/* 
 * Initialization.
 */

function init() {
    let myGame = new Game('game-container-1', maze);

    myGame.populateMap();

    myGame.sizeUp();

    myGame.placeSprite('goal');

    let playerSprite = myGame.placeSprite('player');

    myGame.player.el = playerSprite;

    myGame.keyboardListener();


}

init();