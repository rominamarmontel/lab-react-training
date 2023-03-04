import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  const { lang, children } = props;
  return (
    <div className="greeting">
      {lang === 'de' && <p>Hello! {children}</p>}
      {lang === 'fr' && <p>Bonjour! {children}</p>}
    </div>
  );
};

export default Greetings;
