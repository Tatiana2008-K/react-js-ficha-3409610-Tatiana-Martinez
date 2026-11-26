import ProductoCard from "./components/ProductoCard";
import { productos } from "./data/productos";
import './App.css';
function App() {
  const disponibles = productos.filter(productos => productos.stock > 0);
  const valorInventario = productos.reduce(
    (total, productos) => total + productos.precio * productos.stock,0
  );
  //productos agotados
  const existeAgotado = productos.some( productos => productos.stock === 0);

  return (
    <main  className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${ valorInventario.toLocaleString("es-CO") }</p>
      
      <p className="estado-inventario">¿Hay productos agotados? <strong> {existeAgotado ? "Si" : "No"}</strong></p>

      <section className="productos">
        {productos.map(productos => (
          <ProductoCard
          key={productos.id}
          productos={productos}
          />
        ))}
      </section>
      
            <h2>Productos disponibles</h2>

      <section className="disponibles">
        {disponibles.map(producto => (
          <ProductoCard
            key={producto.id}
            productos={producto}
          />
        ))}
      </section>

    </main>
  );
}
export default App;