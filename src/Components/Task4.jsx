import React, { useState } from 'react';

export default function Task4() {
  
  const UserGreeting = () => <h1>Welcome back, User!</h1>;

  const GuestGreeting = () => <h1>Please sign up.</h1>;
  
  const Greeting = ({ isLoggedIn }) =>
    isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
  
  const ConditionalRendering = () => {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    return (
      <div>
         <Greeting isLoggedIn={userIsLoggedIn} />
      </div>
    );
  };

  return <ConditionalRendering />;
}
