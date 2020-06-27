import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Input from './input';

const Controls = () => {
  const [availableInputs, setAvailableInputs] = useState([]);
  const { emoji } = useSelector((state) => state);

  useEffect(() => {
    const inputs = Object.keys(emoji).filter((em) => emoji[em] !== null);
    setAvailableInputs(inputs);
  }, [emoji]);

  const inputs = availableInputs.map((each) => (
    <Input
      key={each}
      part={each}
      position={emoji[each]?.position || null}
    />
  ));

  return inputs;
};

export default Controls;
