import {
  Server, Model, Factory,
} from 'miragejs';
import faker from 'faker';


const makeServer = ({ environment = 'development' } = {}) => {

  const server = new Server({
    environment,

  });

  return server;
};

export default makeServer;
