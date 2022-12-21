import React from 'react';

const DummyOutput = (props) => {
    console.log('HEY YOU BIG DUMMY!! I\'m running!')
    return (
        <p>{props.show ? 'this is new.': ''}</p>
    )
};

export default React.memo(DummyOutput);