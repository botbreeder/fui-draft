

var ui = {
    tweakpanes: {},
    spaces: {}
};



document.onkeypress = function (e) {
    e = e || window.event;

    if (e.code == "Space")
        if (document.activeElement.tagName != "INPUT")
            document.getElementById("cmdline").focus();
};



function addCmdPanel(name, o) {

    let html = `
        <div class="vmenu-block">
            <div class="vmenu-category">${name}</div>
                <div class="vmenu-content">
                    <div class="tweakpane" id="tp-${name}">
                    </div>
                </div>
            </div>
        </div>
    `;

    setTimeout(function () {

        ui.tweakpanes[name] = new Tweakpane.Pane({
            container: document.getElementById("tp-" + name)
        });

        if (o.preset) ui.tweakpanes[name].importPreset(o.preset);

        if (o.callback) o.callback(ui.tweakpanes[name]);

    }, 0);

    document.querySelector("#left-panel .vmenu").innerHTML += html;
}






function addSpace(name, col, type, content) {

    let html = `
    <div class="space ${col}" space-type="${type}" space-name="${name}">
    <div class="space-title"><h2>${name}</h2></div>
    <div class="space-top-line"></div>
    <div class="space-content">${content}</div>
    <div class="space-bottom-line"></div>
    <div class="space-buttons">
        <span class="space-button" onclick="changeSpaceWidth(this)">change width</span> · 
        <span class="space-button" onclick="moveSpace(this, -1)">move up</span> · 
        <span class="space-button" onclick="moveSpace(this, +1)">move down</span>
    </div>
    </div>
    `;

    document.getElementById("workspace").innerHTML += html;

    ui.spaces[name] = { name, col, type, content };
}



function changeSpaceWidth(e) {
    let el = e.parentElement.parentElement;

    el.className = el.className == "space one-col" ? "space two-col" : "space one-col";

}


function moveSpace(e, direction) {

    let name = e.parentElement.parentElement.getAttribute("space-name");

    let list = sortable.toArray();

    let index = list.indexOf(name);
    let replacementIndex = index + direction;

    if (replacementIndex>=0 && replacementIndex<list.length) {
        list[index] = list[replacementIndex];
        list[replacementIndex] = sortable.toArray()[index];
        sortable.sort(list);
    }
}



var sortable;

setTimeout(() => {

    sortable = new Sortable(document.getElementById("workspace"), {
        handle: ".space-title h2",
        easing: "cubic-bezier(1, 0, 0, 1)",
        animation: 300,
        dataIdAttr: "space-name",
        direction: function (evt, target, dragEl) {
            if (target !== null && target.className.includes('two-col') && dragEl.className.includes('two-col')) {
                return 'horizontal';
            }
            return 'vertical';
        }
    })

}, 500);