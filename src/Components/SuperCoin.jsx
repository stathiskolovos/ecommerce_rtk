import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const SuperCoins = () => {

    // initialize
    const [superCoins, setSuperCoins] = useState(0);

    // retrieve # of items in cart
    const cartItems = useSelector(state => state.cart.cartItems);

    // calculate total sum
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // update the superCoins state based on the totalAmount setting it to 10, 20, or 30 coins for different ranges of the total amount, 
    // and to 0 if the amount is below 100

    useEffect(() => {
        setSuperCoins(parseInt(totalAmount / 100) * 10);
        // if (totalAmount >= 100 && totalAmount < 200) {
        //     setSuperCoins(10);
        // } else if (totalAmount >= 200 && totalAmount < 300) {
        //     setSuperCoins(20);
        // } else if (totalAmount >= 300) {
        //     setSuperCoins(30);
        // } else {
        //     setSuperCoins(0);
        // }
    }, [totalAmount]);

    return (
        <div className="super-coins" style={{textAlign:'center'}}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
      </div>
    );

};

export default SuperCoins;
