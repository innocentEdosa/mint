import {
  Server, Model, Factory,
} from 'miragejs';
import faker from 'faker';


const makeServer = ({ environment = 'development' } = {}) => {
  const paymentStatus = ['Reconciled', 'Un-Reconciled', 'Pending'];
  const orderStatus = ['reconciled', 'pending'];

  const server = new Server({
    environment,

    models: {
      payment: Model,
      order: Model,
      transaction: Model,
    },

    factories: {
      payment: Factory.extend({
        itemType() {
          return faker.commerce.productName();
        },
        price() {
          return faker.random.number();
        },
        transactionNo() {
          return faker.finance.account();
        },
        date() {
          return faker.date.recent();
        },
        status() {
          return paymentStatus[Math.floor(Math.random() * (3 - 0)) + 0];
        },
      }),
      order: Factory.extend({
        status() {
          return orderStatus[Math.floor(Math.random() * (2 - 0)) + 0];
        },
      }),
      transaction: Factory.extend({
        dailyTransactionVolume() {
          return faker.finance.mask();
        },
        dailyTransactionValue() {
          return faker.finance.amount() * 3;
        },
        totalTransactionValue() {
          return faker.finance.amount() * 10;
        },
        totalTransactionVolume() {
          return faker.finance.mask() * 3;
        },
      }),
    },

    seeds(server) {
      server.createList('payment', 20);
      server.createList('order', 20);
    },

    routes() {
      this.namespace = 'api';

      this.get('/payments', (schema) => schema.payments.all(), { timing: 2000 });
      this.get('/orders', (schema) => schema.orders.all(), { timing: 1000 });
    },
  });

  return server;
};

export default makeServer;
