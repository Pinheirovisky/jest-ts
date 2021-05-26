import Product from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    //? System under test
    const sut = createSut('Camiseta', 49.89);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.89);
  });
});
