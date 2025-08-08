// const heading = React.createElement(
//             "h1",
//             { id: "title", key: "h1" },
//             "Hello Namaste from React"
//         );

//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);


const parent = React.createElement(
            "div", {id: "parent", key: "div1"},
            [
                React.createElement("div", {id: "child1", key: "div2"}, [
                    React.createElement("h1", {key: "h2"}, "I am an h1 tag"),
                    React.createElement("h2", {key: "h3"}, "I am an h2 tag")
                ]),
                React.createElement("div", {id: "child2", key: "div3"}, [
                    React.createElement("h1", {key: "h4"}, "I am an h1 tag"),
                    React.createElement("h2", {key: "h5"}, "I am an h2 tag")
                ])
            ]);
        const parentInRoot = ReactDOM.createRoot(document.getElementById("root"));
        parentInRoot.render(parent);