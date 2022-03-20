//import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['razzaq', 'jasim', 'Alomgir', 'Salman', 'Shakib','shuvo','rubel']
  const products = [
    {name:'Photoshop', price:'$90.89'},
    {name:'Illustrator ', price:'$60.89'},
    {name:'Pdf Reader', price:'$23.89'},
]
  const productNames = products.map(product => product.name)
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
          {products.map(product => <li>{product.name}: {product.price}</li>)}
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
      <Person name="Abdullah" occupation="software Engineer"></Person>
      <Person name= "Bakibillah bin Firoz bin rashid" occupation= "Programmer"></Person>
      
      {/* <Product product = {products[0]}> </Product>
      <Product product = {products[1]}> </Product>
      <Product product = {products[2]}> </Product> */}


      {/* <Product></Product> */}
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'}
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>

    </div>
  )
};

function Person(props) {
  const personStyle ={
    border:'2px solid red',
    margin: '10px'
  }
  console.log(props);
  return(
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>{props.occupation}</h3>
    </div>
  );
  
}

export default App;
