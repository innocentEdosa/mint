import {
  Server, Model, Factory,
} from 'miragejs';
import faker from 'faker';


const makeServer = ({ environment = 'development' } = {}) => {
  const paymentStatus = ['reconciled', 'un-reconciled', 'pending'];
  const orderStatus = ['reconciled', 'pending'];

  const server = new Server({
    environment,

    models: {
      payment: Model,
      order: Model,
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
    },

    seeds(server) {
      server.createList('payment', 100);
      server.createList('order', 100);
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
