import { compute } from './compute';

describe('Compute', () => {

  it('should return (0) if input negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should return (input + 1) if positive', () => {
    let input = 1;
    const result = compute(input);
    expect(result).toBe(++input);
  });

});
