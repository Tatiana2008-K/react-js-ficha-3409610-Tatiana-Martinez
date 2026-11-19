function ProductoCard({ productos }) {
    const estado = productos.stock > 0 ? 'Disponible' : 'Agotado';
    return (
        <article className="producto-card">
            <h2>{ productos.nombre }</h2>
            <p>Categoria: { productos.categoria }</p>
            <p>Precio: ${ productos.precio }</p>
            <p>Stock: { productos.stock }</p>
            <strong>{ estado }</strong>
        </article>
    );
}
export default ProductoCard;