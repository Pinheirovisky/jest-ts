describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeCloseTo(10.001);
  });
});

describe('Objects', () => {
  it('should test jest assetions with objects', () => {
    const person = { name: 'Vinicius', age: 21 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 21);

    expect(person.name).toBe('Vinicius');
  });
});
