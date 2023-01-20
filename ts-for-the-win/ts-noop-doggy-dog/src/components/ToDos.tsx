import React from 'react';

const ToDos: React.FC<{ items: string[]; children?: React.ReactNode }> = (
  props
) => {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {props.children}
    </>
  );
};

export default ToDos;
