const products = require('../static-products/products');

exports.getAllProducts = (request, response, next) => {
    response.status(200).json({
        data: products
    })
}

exports.addProduct = (request, response, next) => {
    const newProduct = {
        id: uuid(),
        productName: request.body.productName,
        price: request.body.price,
        description: request.body.description,
        stockCount: request.body.stockCount,
        instructionForUse: request.body.instructionForUse
    };
    products.push(newProduct);

    response.status(201).json({
        product: newProduct,
        message: "Product has been added."
    });

}

exports.getSingleProduct = (request, response, next) => {
    const id = request.params.productId;
    const selectedProduct = products.find((item) => {
        return item.id == id
    });
    console.log(selectedProduct);
    if (selectedProduct !== undefined) {
        response.status(200).json({
            data: selectedProduct,
            message: `The product with ${id} has been fetched.`
        })
    }
    const error = new Error(`Item with that id:${id} couldnt found.`);
    error.status = 404
    next(error)
}

exports.updateProduct = (request, response, next) => {
    const id = request.params.productId;
    const editedProduct = {
        id: id,
        productName: request.body.productName,
        price: request.body.price,
        description: request.body.description,
        stockCount: request.body.stockCount,
        instructionForUse: request.body.instructionForUse
    };
    const selectedProductIndex = products.findIndex((item) => {
        return item.id == id
    });
    if (selectedProductIndex > -1) {
        products[selectedProductIndex] = editedProduct
        response.status(200).json({
            id: products[selectedProductIndex],
            message: `The product with ${id} has been updated.`
        })
    }
    const error = new Error("Item with that id couldnt updated.");
    error.status = 404
    next(error)
},

    exports.deleteProduct = (request, response, next) => {
        const id = request.params.productId;
        const index = products.findIndex((item) => {
            return item.id === id;
        })
        if (index > -1) {
            products.splice(index, 1);
            response.status(200).json({
                message: `The product with ${id} has been deleted.`
            })
        }
        const error = new Error("Item with that id couldnt deleted.");
        error.status = 404
        next(error)
    }