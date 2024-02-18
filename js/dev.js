








addSpace("overview", "one-col", "markdown", `
<p>Io is a dynamic prototype-based programming language. The ideas in Io are mostly inspired by Smalltalk[1] (all values are objects), Self[2] (prototype-based), NewtonScript[3] (differential inheritance), Act1[4] (actors and futures for concurrency), Lisp[5] (code is a runtime inspectable / modifiable tree) and Lua[6] (small, embeddable).</p>
<p>As an anecdote from testing (since you asked): I worked on a community site with 700k monthly visits where the main audience was non-computer savvy users. We used 12px Verdana for body type and 14px-16px Arial for titles. Occasionally we would drop to 11px Verdana in grey for less important text. When doing usability tests on the site, we received feedback not about the size of the text, but about how the surrounding colours of the design made it feel like you were staring into a lamp. We interpreted this as the site being too bright and adjusted the contrast of the entire design to be less bright. Partially due to these changes and partially due to changes in the navigational structure, we saw a significant month-on-month increase in pageviews per visitor.</p>
`);

for (let i = 0; i < 5; i++)
    addSpace("perspective " + i, Math.random() < 0.75 ? "one-col" : "two-col", "markdown", `
<p>The focus of programming language research for the last thirty years has been to combine the expressive power of high level languages like Smalltalk and the performance of low level languages like C. The results have neither been as fast as C or as expressive as Smalltalk. Io's purpose is to refocus attention on expressiveness by exploring higher level dynamic programming features with greater levels of runtime flexibility combined with simplified programming syntax and semantics.</p>
<p>${"In Io, all values are objects (of which, anything can change at runtime, including slots, methods and inheritance), all code is made up of expressions (which are runtime inspectable and modifiable) and all expressions are made up of dynamic message sends (including assignment and control structures). Execution contexts themselves are objects and activatable objects such as methods/blocks and functions are unified into blocks with assignable scope. Concurrency is made more easily manageable through actors and implemented using coroutines for scalability.".substring(0, Math.floor(500 * Math.random())).repeat(Math.floor(5 * Math.random()))} </p>
`);



setTimeout(function () {


    addCmdPanel("test pane 1", {
        callback: function (pane) {


            const PARAMS = {
                factor: 123,
                title: 'hello',
                checked: true,
            };

            for (let i = 0; i < 2; i++) {
                let f = pane.addFolder({ title: "connect" });
                f.addInput(PARAMS, 'factor');
                f.addInput(PARAMS, 'title');
                f.addInput(PARAMS, 'checked');
                f.addButton({
                    title: 'Increment',
                    label: 'counter',   // optional
                });
            }

        }
    })


    addCmdPanel("test pane 2", {
        callback: function (pane) {


            const PARAMS = {
                factor: 123,
                title: 'hello',
                checked: true,
                offset: { x: 50, y: 50 },
                theme: '',
            };

            for (let i = 0; i < 1; i++) {

                pane.addInput(PARAMS, 'theme', {
                    options: {
                        none: '',
                        dark: 'dark-theme.json',
                        light: 'light-theme.json',
                    },
                });

                pane.addButton({
                    title: 'Increment',
                    //label: 'counter',   // optional
                });
                let f = pane.addFolder({ title: "Connect folder" });
                f.addButton({
                    title: 'Increment2',
                    //label: 'counter',   // optional
                });
                f.addInput(PARAMS, 'factor');
                f.addInput(PARAMS, 'title');
                f.addInput(PARAMS, 'checked');
                f.addInput(PARAMS, 'offset', { picker: "inline", expanded: true });
            }

        }
    })

}, 500);










