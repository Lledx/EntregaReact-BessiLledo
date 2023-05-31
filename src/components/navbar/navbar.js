import CartWidget from "../CartWidget/CartWidget"
const navbar = () => {
    return (
    <nav>
     <h3>Ecommerce</h3>
    <div>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooks</button>
    </div>
    <CartWidget/>
</nav>
)
}

export default navbar