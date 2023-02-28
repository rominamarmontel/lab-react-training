import React from 'react';

const Greetings = ({ lang }) => {
  return (
    <div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
};

export default Greetings;
