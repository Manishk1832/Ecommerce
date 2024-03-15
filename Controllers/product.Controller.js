
const Product = require('../Models/ProductModel');
const { uploadOnCloudinary } = require('../utils/cloudinary');


const createProduct = async (req, res) => {

    try {
        const { productname, description, price, category, attributes } = req.body;

        if ([productname, description, price, category, attributes].some((field) => field?.trim().length === "")) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (price < 0) {
            return res.status(400).json({ message: "Price must be a positive number" });
        }

        if (!["Electronics", "Cameras", "Laptops", "Accessories", "Headphones", "Food", "Books", "Clothes/Shoes", "Beauty/Health", "Sports", "Outdoor", "Home"].includes(category)) {
            return res.status(400).json({ message: "Invalid category" });
        }

        const productImage = req.files?.productimage[0]?.path;

        if (!productImage) {
            return res.status(400).json({ message: "Product image is required" });

        }

        const image = await uploadOnCloudinary(productImage);

        const product = await Product.create({
            productname: productname,
            description: description,
            price: price,
            category: category,
            attributes: attributes,
            productImage: image.url

        })

        res.status(200).json({ message: "Product created successfully" })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const newCollection = async (req, res) => {
    try {
        const products = await Product.find({});
        const newCollections = products.slice(0, 8);
        if (newCollections) {
            res.status(200).json({ newCollections });
        }
        else {
            res.status(400).json({ message: "Products not found" });
        }

    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}


const findCollections = async (req, res) => {
    try {
        const { category } = req.body;
        const products = await Product.find({});
        const Collection = products.filter((product) => product.category === category);
        if (Collection) {
            res.status(200).json({ msg: "success", Collection });
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}
x




const DeleteProducts = async (req, res) => {
    try {
        const { id } = req.body;
        const deleted = await Product.findByIdAndDelete(id);
        if (deleted) {
            res.status(200).json({ message: "Product deleted successfully" });
        }
        else {
            res.status(400).json({ message: "Product not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const UpdateProducts = async (req, res) => {
    try {
        const { id, productname, description, price, category, attributes } = req.body;
        const updated = await Product.findByIdAndUpdate(id, {
            productname,
            description,
            price,
            category,
            attributes,
        })
        if (updated) {
            res.status(200).json({ message: "Product updated successfully" });
        }
        else {
            res.status(400).json({ message: "Product not found" });
        }

    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}



module.exports = {
    createProduct,
    getAllProducts,
    newCollection,
    findCollections,
    DeleteProducts,
    UpdateProducts
}