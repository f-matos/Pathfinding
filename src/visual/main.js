import Controller from "./controller";
import View from "./view";
import Panel from "./panel";


export default function begin(){
    Panel.init();
    //console.log(Controller.init)
    console.log(Controller)
    Controller.init();
}


begin();
$(document).ready(() => {

    $("#btnNewType").click(() => {
        View.nodeStyle['newType'] = {
            fill: 'white',
            'stroke-opacity': 0.2,
        }
    })
})