var todo = {
    title: "Hey",
    description: "foobar"
};
//@ts-ignore
todo.title = "Hello"; // Error: cannot reassign a readonly property
//@ts-ignore
todo.description = "barFoo"; // Error: cannot reassign a readonly property
export {};
