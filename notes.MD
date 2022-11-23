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
    - IF (only IF) you want to reset a value for a user, you can use refs to manipulate the DOM. rarely OK
        props.onAddUser(enteredName);
        nameInputRef.current.value = '';

