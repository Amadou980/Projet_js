
/*on importe les dépendances expresse et mongoose*/
const express = require('express'); //pour htpp
const mongoose = require('mongoose');//pour a base de donnée


/* Configurer la base de donnée
Cela connectera le serveur à une base de données locale nommée products-db.*/
mongoose.connect('mongodb://localhost/products-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//port utiliser 3000 
const port = 3000;

/*Le serveur ecoute sur le port 3000*/
app.listen(port, () => {
    console.log(`Le serveur ecoute sur le port ${port}`);
});


/*creer les routes pour l'API*/
const app = express();

/*revvoie la liste des produits*/
app.get('/products', (req, res) => {
    res.send('Voici le liste des produits');
});


/* creer un modéle de produit
Cela définira un modèle de produit qui pourra être stocké dans la base de données.*/
/*Autrement dit c'est la structure d'un produit*/
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const Product = mongoose.model('Product', productSchema);


/*trouver un produit */
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/*trouver un produit a l'aide de son identifiant*/
app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

/*ajoute un produit a la base de données*/
app.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

/*met a jpur les details d'un produit un produit*/
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.json(product);
});

/*supprimer un produit*/
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.json({ message: 'le produit est supprimer avec succés' });
});

