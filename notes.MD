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

    *** const [state, dispatchFn] = useReducer(reducerFn, initialState, initialFn); ***

        -- state = the state snapshot used in the component re-render / re-evaluation cycle
        -- dispatchFn = a function that triggers a state update
        -- reducerFn = a function that dispatchFn triggers --> it receives the latest state snapshot and should return the new, updated state (prevState, action) => newState
        --  initialState = the initial state
        -- initialFun = a function to programmatically initialize the state (e.g. if initial state is result of https:// request)

    - useState() vs. useReducer()
        -- generally, you'll know to use useReducer() because the state becomes so big and cumbersome that using useState() creates all sorts of unintended behaviors / bugs
        -- useState()
            ** the main state management tool --> always start w this
            ** for independent pieces of state / data
            ** if state updates are easy and limited to a few kinds of updates
        -- useReducer()
            ** great if you need more power --> more state updating logic
            ** if you have a ton of state updating logic in the component function --> good to move into reducer function
            ** if you have related pieces of state / data
            ** if you more complex state updates (e.g. different cases, actions)

# useContext() !!

    - allows you to pass state from one component to another without having to pass props up and down the component tree
    - see /simple-login/store/auth-context.js
    - limitations:
        -- context is not optimized for high frequency changes --> more into Redux later
        -- props are still best for most reusable components (e.g. Button -> login/logout). Short prop chains are OK

# Rules of Hooks

    - only call react hooks in react functions (aka a function that returns JSX code)
        -- React component functions
        -- Custom hooks (we'll get there)
    - only call react hooks at the TOP LEVEL  (e.g. you can't use a hook within a hook, or a hook in an if statement)
        -- don't call in nested functions
        -- don't call them in block statements
    - for useEffect(), make sure you always add everything you refer to in useEffect as a dependency

# React - Under the Hood

    - React.js = "a JavaScript library for building user interfaces"
        -- Components = the basic building blocks
        -- Props = data from parent components
        -- State = internal data
        -- Context = component-wide data
    - ReactDOM = "React.js uses this as an interface to the web/browser"
        -- what the user actually sees
        -- React.js reevaluates components whenever props, state, or context changes
        -- ReactDOM only executes changes to the real DOM for *differences between evaluations* ("Virtual DOM diffing")
        -- ReactDOM only touches the difference between the evaluation (e.g. adding a <p> tag)
    - Rendering in React.js
        -- export default React.memo(YourComponent); = save the props of YourComponent and only re-render it if there are diffs with the new props
            * using it is a trade-off between storage props & making comparison vs. re-rending the component every time the parent changes *
            * great if you can find a place way up the component tree to apply this, so all the children components will not re-render *
    - Summary:
        -- Components have one job - return JSX
        -- Whenever you change state (props, state, context), React re-evaluates the component where you changed state, which basically means your function runs again
        -- React takes results of latest evaluation and compares it to previous evaluation --> hands off any differences to ReactDOM, which updates the DOM in the browser
        -- You can use React.memo to prevent unnecessary re-rendering of components that have not changed
        -- BUT, if you create a function within a React.memo component function, memo's won't work because React thinks that the function has changed due to how JavaScript evaluates reference values vs. primitive values (1 === 1 but obj1 !== obj2)
        -- This is why you use useCallback(), which tells React to store a function and not re-create it when the surrounding function runs again so long as certain dependencies don't change
        -- ** You can also use the hook "useMemo()" to 'memo-ize' a function within a component! This optimizes performance if there is a particularly performance-intensive operation (e.g. sorting) within a component that React must re-render, for example, if its props change

# Custom Hooks

    - What are custom hooks?
        -- React functions that let you outsource *stateful* logic into *re-usable* functions
        -- Unlike regular functions, custom hooks can use other React hooks and React state
        -- Mechanism for re-using functions, BUT you can use React hooks and other hooks inside of them

# Redux

    - What is Redux?
        -- A state management system for cross-component // app-wide state
        -- There are different types of state:
            * Local: state that belongs to a single component (useState or useReducer)
                ** Listening to user input in an input field
                ** Toggling a "show more" details field
            * Cross-component: state that affects multiple components (useContext or prop-drilling)
                ** Open/closed state of a modal overlay
            * App-wide: state that affects the entire application (useContext or prop-drilling)
                ** User authentication status
    - Redux vs. useContext
        -- React Context has a few drawbacks:
            * Complex set-up and management for enterprise-level applications... You end up having tons of nested context provider components or a bloated single context provider component
            * Performance... Not optimized for high-frequency state changes
        -- Redux:
            * All about having one central data store (state) in your application
    - How does Redux work?
        -- SUBSCRIPTIONS: Components set up subscriptions to the central store. Whenever the store changes, it updates the components that are subscribed
            * COMPONENTS NEVER DIRECTLY MANIPULATE THE STORE DATA
            * Subscriptions never accept a parameter
            * Subscriptions call the store.getState() method to get the latest state snapshot
            * To add the subscriber, pass the subscriber function to store.subscribe(yourSubscriberFn)
        -- REDUCERS: Instead we use reducer functions --> responsible for mutating store data
            * different from useReducer --> reducer functions are functions that take some input, reduce/transform it, and spit out some new output
            * Standard JavaScript function that receives two parameters:
                ** Old State
                ** Action
            * Must return a New State object
            * Should be a "pure" function --> the same input leads to the same output (no external calls, e.g. http requests, reading from local storage, etc.)
        -- ACTIONS: Components dispatch/trigger actions.
            * Javascript objects that describe the types of actions the reducer should perform
            * Redux then forwards actions to the reducer, reads the description of the desired operation, and performs the operation with the reducer
            * Then the reducer performs the action and spits out the result of the action
            * Use store.dispatch({type: 'type'}) to dispatch an action to the state
            * Goal is to do different things inside of the reducer based on the type of action dispatched
    - Implemeting Redux
        -- NPM install redux and react-redux
        -- Create a folder within /src called /store
        -- Initialize redux store in /store/index.js
        -- Import { Provider } from 'react-redux' into the app's index.js
        -- Import the store from '/store/index.js'
        -- NEVER EVER EVER mutate the state. Always return a new state object
