
/*
setTimeout(function () {


    const pane = new Tweakpane.Pane({
        container: document.getElementById("tweakpane")
    });


    const PARAMS = {
        factor: 123,
        title: 'hello',
        color: '#ff0055',
    };

    pane.addInput(PARAMS, 'factor');
    pane.addInput(PARAMS, 'title');
    pane.addInput(PARAMS, 'color');
}, 500);
*/



function setCmdPanel(o) {

    let html = `<h1 contenteditable>${o.title}</h1><div class="vmenu">`;
    //html = `<div class="vmenu">`;

    for (let section of o.sections) {

        html += `
        <div class="vmenu-block">
        <div class="vmenu-category">${section.name}</div>
        <div class="vmenu-content">
        `;

        for (let item of section.content) {
            html += `<div text="${item}" class="vmenu-item">${item}</div>
            `;
        }
        html += `</div></div>`;
    }

    html += `</div>`;

    document.getElementById("left-panel").innerHTML = html;
}



setCmdPanel({
    title: "Semantify3D",
    sections: [
        {
            name: "clipboard",
            content: [
                "paste",
                "copy",
                "cut",
                "reproduce style"
            ]
        },
        {
            name: "font",
            content: [
                "font family",
                "font size",
                "increase font size",
                "decrease font size",
                "bold",
                "italic",
                "underline",
                "background color",
                "font color"
            ]
        },
        {
            name: "text alignment",
            content: [
                "align left",
                "center",
                "align right",
                "wrap line",
                "fusion cells"
            ]
        },
        {
            name: "format",
            content: [
                "monetary",
                "percent",
                "increase decimals",
                "decrease decimals"
            ]
        }
    ]
})



function addSpace(name, col, type, content) {

    let html = `
    <div class="space ${col}" space-type="${type}">
    <div class="space-title"><h2>${name}</h2></div>
    <div class="space-top-line"></div>
    <div class="space-content">${content}</div>
    <div class="space-bottom-line"></div>
    <div class="space-buttons">
        <span class="space-button">change width</span> · <span class="space-button">move up</span> · <span class="space-button">move down</span> · <span class="space-button">close</span>
    </div>
    </div>
    `;

    document.getElementById("workspace").innerHTML += html;
}


addSpace("overview", "one-col", "markdown", `
<p>Io is a dynamic prototype-based programming language. The ideas in Io are mostly inspired by Smalltalk[1] (all values are objects), Self[2] (prototype-based), NewtonScript[3] (differential inheritance), Act1[4] (actors and futures for concurrency), Lisp[5] (code is a runtime inspectable / modifiable tree) and Lua[6] (small, embeddable).</p>
`);

for (let i = 0; i < 10; i++)
addSpace("perspective "+i, Math.random()<0.75 ? "one-col" : "two-col", "markdown", `
<p>The focus of programming language research for the last thirty years has been to combine the expressive power of high level languages like Smalltalk and the performance of low level languages like C. The results have neither been as fast as C or as expressive as Smalltalk. Io's purpose is to refocus attention on expressiveness by exploring higher level dynamic programming features with greater levels of runtime flexibility combined with simplified programming syntax and semantics.</p>
<p>${"In Io, all values are objects (of which, anything can change at runtime, including slots, methods and inheritance), all code is made up of expressions (which are runtime inspectable and modifiable) and all expressions are made up of dynamic message sends (including assignment and control structures). Execution contexts themselves are objects and activatable objects such as methods/blocks and functions are unified into blocks with assignable scope. Concurrency is made more easily manageable through actors and implemented using coroutines for scalability.".substring(0, Math.floor(500*Math.random())).repeat(Math.floor(5*Math.random()))} </p>
`);


var sortable;

setTimeout(() => {
    
    sortable = new Sortable(document.getElementById("workspace"), {
        handle: ".space-title h2",
        easing: "cubic-bezier(1, 0, 0, 1)",
        animation: 300,
        direction: function(evt, target, dragEl) {
            if (target !== null && target.className.includes('two-col') && dragEl.className.includes('two-col')) {
                return 'horizontal';
            }
            return 'vertical';
        }
    })

}, 500);