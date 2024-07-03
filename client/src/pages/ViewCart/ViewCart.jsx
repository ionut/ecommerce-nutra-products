import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../redux/cartReducer';
import { useFetch } from '../../hooks/useFetch';

export const ViewCart = () => {
    const { baseUrl } = useFetch("products?populate=*");
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch()

    const handleAddToCart = (e) => {
        ProductTotal(e.target.value);
    }

    const subTotal = () => {
        let total = 0;
        products.forEach(product => total += product.quantity * product.price)
        return total.toFixed(2);
    }

    const ProductTotal = (quantity) => {
        let total = 0;
        products.forEach(product => product.price + quantity)
    }

    const totalTransport = () => {
        let total = Number(subTotal())
        const transportFee = 6

        if (total <= 50) {
            return (total + transportFee).toFixed(2)
        } else {
            return total.toFixed(2)
        }
    }



    return (
        <>
            <main className='bg-darkWhite'>
                <section className='container mx-auto py-20 min-h-[70vh]'>
                    <div className="grid grid-cols-3 gap-5">
                        <div className='col-span-2'>
                            <h4 className="text-dark text-xl font-bold">My Cart</h4>
                            {products.map(product => (
                                <div key={product.id} className="flex flex-row justify-between items-center bg-white mb-2 px-4">
                                    <div className="flex flex-row items-center">
                                        <span className='cursor-pointer' onClick={() => dispatch(removeProduct(product.id))}>X</span>
                                        <img src={baseUrl + product.image} alt="image" className='w-24 col-span-2' />
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-5">
                                        <p className="text-pumpkinOrange font-medium">{product.price.toFixed(2)}</p>
                                        <input type="number" className='bg-darkWhite w-9 h-14 border-dark border-[1px] color-dark text-right' placeholder={product.quantity} onChange={handleAddToCart} />
                                        <h4>{subTotal()}</h4>
                                    </div>
                                </div>))}
                        </div>
                        <div className="">
                            <h4 className="text-dark text-xl font-bold">My Total</h4>
                            <div className="flex flex-col bg-white">
                                <h6>Subtotal {subTotal()}€</h6>
                                <h6>Shipping Flat rate: 6.00€</h6>
                                <h6>Total {totalTransport()}€</h6>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
