const express = require("express");
const productRouter = require("./resources/product/productRouter")
const supplierRouter = require("./resources/supplier/supplierRouter")
const PORT = 8000;
const server = express();


server.use(express.json())

server.use("/api/products", productRouter);
server.use("/api/suppliers", productRouter);
const start = () => {
    server.listen(PORT, () => {
        console.log(`--Server is listening on ${POST}--`)
    })
}


module.exports = start;