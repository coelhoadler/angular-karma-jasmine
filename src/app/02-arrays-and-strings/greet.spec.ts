import { greet } from './greet';

describe('Greet component', () => {

  it('should return a greet', () => {
    const str = greet('Adler');
    expect(str).toContain('Adler');
  });

});
