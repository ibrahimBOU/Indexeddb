import {Router} from "./router.js";

const menus = document.querySelectorAll('a[class="nav-link"]')
const contentContainer = document.querySelector('#contentApp')

const router = new Router(menus, contentContainer)
router.start()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ibrahimbounab:9BP2LeaOfA6b9nQg@cluster0.zlwvxyx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});