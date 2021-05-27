import { InidividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): InidividualCustomer => {
  return new InidividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName and cpf', () => {
    //? System under test
    const sut = createIndividualCustomer(
      'Vinicius',
      'Pinheiro',
      '000.000.000-00',
    );

    expect(sut).toHaveProperty('firstName', 'Vinicius');
    expect(sut).toHaveProperty('lastName', 'Pinheiro');
    expect(sut).toHaveProperty('cpf', '000.000.000-00');
  });

  it('should have methods to get name and idn', () => {
    //? System under test
    const sut = createIndividualCustomer(
      'Vinicius',
      'Pinheiro',
      '000.000.000-00',
    );

    expect(sut.getName()).toBe('Vinicius Pinheiro');
    expect(sut.getIDN()).toBe('000.000.000-00');
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have name and cnpj', () => {
    //? System under test
    const sut = createEnterpriseCustomer('Vini Corp', '000.000.000-00');

    expect(sut).toHaveProperty('name', 'Vini Corp');
    expect(sut).toHaveProperty('cnpj', '000.000.000-00');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    //? System under test
    const sut = createEnterpriseCustomer('Vini Corp', '000.000.000-00');

    expect(sut.getName()).toBe('Vini Corp');
    expect(sut.getIDN()).toBe('000.000.000-00');
  });
});
