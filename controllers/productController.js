
"use strict";
const Models = require("../models");

const getProducts = (res) => {
  Models.Product.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const getCustomerFromProduct = (req, res) => {
  Models.Product.findOne({
    where: {
      id: req.params.id,
    },
    include: Models.Customer,
  })
    .then(function (data) {
      res.send({ result: 200, data: data.students });
    })
    .catch((err) => {
      throw err;
    });
};

const createProduct = (data, res) => {
  Models.Product.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getProducts,
  getCustomerFromProduct,
  createProduct,
};




// "use strict";

// const getProducts = (req, res) => {
//   fetch("https://dummyjson.com/products")
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//       res.send({ result: 200, data: json });
//     })

//     .catch((err) => {
//       console.log(err);
//       res.json({ result: 500, error: err.message });
//     });
// };

// // const getProducts = (req, res) => {
// //   fetch("https://dummyjson.com/products")
// //     .then((data) => data.json())
// //     .then((json) => console.log(json))
// //     .then((data) => res.send({ result: 200, data }))

// //     .catch((err) => {
// //       console.log(err);
// //       res.json({ result: 500, error: err.message });
// //     });
// // };

// const getProductByID = (req, res) => {
//   const productId = req.params.id;
//   console.log("Prams", req.params.id);
//   //creates a new user using JSON data POSTed in request body
//   fetch(`https://dummyjson.com/products/${productId}`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//       res.send({ result: 200, data: json });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

// const getProductByName = (req, res) => {
//   const filterName = req.query.name;
//   console.log("req query", req.query.name);
//   fetch(`https://dummyjson.com/products/search?q=${filterName}`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//       res.send({ result: 200, data: json });
//     })

//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

// const postProduct = (req, res) => {
//   //updates the user matching the ID from the param using
//   //JSON data POSTed in request body
//   fetch("https://dummyjson.com/products/add", {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify(req.body),
//   })
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//       res.send({ result: 200, data: json });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

// const updateProduct = (req, res) => {
//   console.log("PUT param", req.params.id);
//   //updates the user matching the ID from the param using
//   //JSON data POSTed in request body
//   fetch(`https://dummyjson.com/products/${req.params.id}`, {
//     method: "PUT",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify(req.body),
//   })
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//       res.send({ result: 200, data: json });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

// const deleteProduct = (req, res) => {
//   console.log("DELETE prams", req.params.id);
//   //deletes the user matching the ID from the param
//   fetch(`https://dummyjson.com/products/${req.params.id}`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//       res.send({ result: 200, data: json });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

// module.exports = {
//   getProducts,
//   getProductByID,
//   getProductByName,
//   postProduct,
//   updateProduct,
//   deleteProduct,
// };
