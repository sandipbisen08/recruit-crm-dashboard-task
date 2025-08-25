import React from 'react';

interface HelloWorldProps {
  message?: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ message = 'Hello World' }) => {
  return <div>{message}</div>;
};

export default HelloWorld;
