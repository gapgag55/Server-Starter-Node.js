import cors from 'cors';
import bodyParser from 'body-parser';

export default (app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
};