# Pathfinding.js (WIP)

Modified version of [Pathfinding.js](https://github.com/qiao/PathFinding.js) by qiao, adding weighted nodes funcionality, for better understanding how algorithms (particularly A*) behave.

It also adds webpack to the project, so that's fun too.

Visit https://f-matos.github.io/Pathfinding/ for demo!

# Installation & Usage
Install it as normal. Something like:

`yarn install` or `npm install` and then

`yarn start` or `npm start`

You might have to change `--host` parameter from `0.0.0.0`  to `localhost` in `package.json`.


# Features

By default you have 5 types of node. Wall (unwalkable), White (default, weight 1), Pink (weight 3), Blue (weight 5), and Brown (weight 10). Select one (single click) and on the grid, drag it around (exactly like you do with the Walls in the original version).

Support for heuristic weights between 0 in 1, meaning you can play around with superestimating or underestimating the heuristic function.


# Initial Results

A* tries for a bit to dodge the slightly costilier Pink tiles but soon decides to cross it
![Medium pathing](https://github.com/f-matos/Pathfinding/blob/master/docs/example1.png)

A* wants nothing to do with that expensive brick and goes to great lenghts to avoid it.
![Heavy pathing](https://github.com/f-matos/Pathfinding/blob/master/docs/example2.png)
