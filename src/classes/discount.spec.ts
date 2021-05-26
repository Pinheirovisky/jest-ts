import {
  Discount,
  FiftyPercentDiscount,
  NoPercentDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    //? System under test
    const sut = createSut(NoPercentDiscount);

    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    //? System under test
    const sut = createSut(FiftyPercentDiscount);

    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    //? System under test
    const sut = createSut(TenPercentDiscount);

    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
