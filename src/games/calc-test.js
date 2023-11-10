import { brainCalcIndex, greeting } from '../index.js';

const brainCalc = () => {
  const name = greeting();

  brainCalcIndex(name);
};

export default brainCalc;
