import { PersistencyProtocol } from '../classes/interfaces';

class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
}

export default Persistency;
