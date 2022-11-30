# JSX Limitations
    - +Problem:* You can't return more than 1 root JSX element
    return (
        <Component1 />
        <Component2 valid=false>
    );
    - *Solution:* add a <div> or custom component as wrapper
    return (
        <div>
            <Component1 />
            <Component2 valid=true>
        </div>
    )
    - *New Problem:* <div> soup
        <div>
            <div>
                <div>
                    <p> This can happen </p>
                </div>
            </div>
        </div>
    - *New Solution:* Wrapper component
        <Wrapper>
            <p>We typically don't build our own wrappers </>
        </Wrapper>

        - it's a built-in method in React :)
        <React.Fragment> </React.Fragment>
                    OR simply
        <></>

# Portals
    - You can also bring a component / fragment back to the root of the DOM by using portals!
        import ReactDOM from react-dom;
    - Good so you don't create <div/> soup
    - You simply need to create a custom root element in index.html and then use the method ReactDOM.createPortal
        index.html:
            <body>
                <div id="component-root"></div>
            </body>
        Component.js:
            return (
                <React.Fragment> 
                    {ReactDOM.createPortal(<Component/>, document.getElementById('component-root'))}
                <React.Fragment/>
            )

# Refs
    - Refs give us access to other DOM elements and let us work with them
    - Set up connection between HTML element and JavaScript code
        import { useState, useRef } from 'react';
    - Instantiate it in your code within a functional component
        const nameInputRef = useRef();
    - Add instantiated ref to any HTML element as a prop
        <input
            id='username'
            type='text' 
            ref={nameInputRef}
        >
    - Ref always returns an object and always has a current key in it, referencing the DOM node
    - Great for reading data
        const enteredName = nameInputRef.current.value
    - You can use refs to manipulate the DOM, IF (only IF) you want to reset a value for a user. it's rarely OK
        props.onAddUser(enteredName);
        nameInputRef.current.value = '';

# What is an "Effect" ? 
    - React's main job = render UI, react to user input, re-render UI
        -- Evaluate and render JSX
        -- Manage state and props
        -- React to user events / inputs
        -- Re-evaluate components upon state and prop changes
        ** This is all baked into React via "tools" native to React
    - Effects (or Side Effects) are everything else!
        -- Persist data in browser storage
        -- Send https:// requests to backend servers
        -- Set and manage timers
        ** These tasks must happen outside of the normal component evaluation and render cycle -- esp. since they might block or delay rendering (e.g. https:// request) 
    - Handling Effects with the useEffect() Hook
        -- useEffect( () => {...}, [ dependencies ]);
        ** parameter 1: the function
            --- React should evaluate this function after every component evaluation IF the specified dependencies change
        ** parameter 2: the dependencies array
            --- An array of dependencies that (when changed) trigger this function to run
            --- Generally, you add every var / function you use in your useEffect function
            --- Exceptions include:
                *** state updating functions (e.g. setUsername)
                *** built-in API's or functions (e.g. localStorage, fetch())
                *** variables defined outside of a component
    -- Use useEffect() whenever you have an action that should be exected in response to another action
    -- useEffect() runs AFTER every component render cycle
    -- useEffect() also can return a function. This function is called the "clean up" function and will run before the useState function runs (except for the first time ;))

# What is "useReducer()?"
    - Sometimes you have a more complex state than you can manage with useState()...
        -- e.g. multiple states, state updates that depend on other states, multiple ways to update state, etc.
    - useReducer() is a more powerful replacement to useState()


