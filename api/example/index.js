import express from 'express';
import ExampleModel from './example.model';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('ok');
  // ExampleModel.find({}, (err, items) => {
  //   res.send(items);
  // })
});

router.post('/add', (req, res) => {
  const item = new ExampleMode({
    title: 'New Item'
  })
  item.save();
});

router.put('/:id', (req, res) => {
  ExampleModel.findById(req.params.id, (err, item) => {
    // Update here
  })
});

router.delete('/:id', (req, res) => {
  ExampleModel.delete(req.params.id);
})

export default router;
