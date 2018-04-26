import Raphael from "raphael";
import Controller from "./src/visual/controller";
import View from "./src/visual/view";
import Panel from "./src/visual/panel";
/* global $*/
if (!Raphael.svg) {
    window.location = './notsupported.html';
}

function begin(){
    Panel.init();
    Controller.init();
}

let i = 1
$(document).ready(() => {
    begin();
    $("#btnNewType").click(() => {
        $("#tile_edit #name").val("Type" + i);
        i++;
        $("#tile_edit").css("display", "block");
    });
    $("#btnSaveType").click(() => {
        let name = $("#tile_edit #name").val();
        let color = $("#tile_edit #color").val();
        let weight = $("#tile_edit #weight").val();
        //console.log(name, color, weight);
        View.nodeStyle[name] = {
            fill: color,
            'stroke-opacity': 0.2
        }
        $("#tile_edit").css("display", "none");
        let el = $("#rect-"+name);
        if(el.length){
            el.css("backgroundColor", color);
            el.attr("node", name);
            el.attr("weight", weight);
        }else{
            let div = document.createElement('div')
            div.classList = "rect"
            div.setAttribute("id", "rect-" + name);
            div.style.backgroundColor = color
            div.setAttribute("node", name)
            div.setAttribute("weight", weight)
            document.getElementById('tile_panel').appendChild(div)
        }
    });
    $("#tile_panel").click(function(e){
        let el = $(e.target)
        if(el.hasClass("rect")){
            $("#active_style").html(el.attr("node"));
            $("#active_style").attr("weight", el.attr("weight"));
        }
    })
    $('#draw_area').mouseover(function(e){
        if (e.target.tagName !== 'rect') {
            return;
        }
        let popup = $('#node_data')
        let pageX = e.target.getAttribute('x')
        let pageY = e.target.getAttribute('y')
        let coord = View.toGridCoordinate(pageX, pageY);
        let node = Controller.grid.nodes[coord[0]][coord[1]];
        //console.log(node)
        let data = "";
        if (node.values !== undefined) {
            data = `g(x):${node.values.g} </br>h(x):${node.values.h} </br> f(x):${node.values.f}`
        } else {
            data = `g(x):</br>h(x):</br> f(x):`
        }
        popup.html(data);
    })
});

// suppress select events
$(window).bind('selectstart', function(event) {
    event.preventDefault();
});

if (module.hot) {
    module.hot.accept((err) => {
        if (err) {
            console.error('Cannot apply HMR update.', err);
        }else{
            //TODO move Controller to none state somehow
            //Maybe refactoring controller.js to return a function.
            //It will probably break stuff. A lot.
        }
    });
}