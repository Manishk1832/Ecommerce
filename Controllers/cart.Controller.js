const Cart = require('../Models/CartModel');

const CreateCart = async (req, res) => {
    const { user, products, quantity } = req.body;

    try {

        if (!user || !products || !quantity) {
            return res.status(400).json({ message: "Cart details are required" })
        }

        const ifExistingCart = await Cart.findOne({ user });

        if (!ifExistingCart) {
               await Cart.create({
                user,
                products,
                quantity
            });
        }

         await Cart.findOneAndUpdate({ user }, {
         $push: {
                products,
                quantity
                }
            })
        
       return res.status(200).json({ message: "Cart added successfully" })



    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }


}

const DeleteCart = async (req, res) => {
    
}




module.exports = CartDetials;