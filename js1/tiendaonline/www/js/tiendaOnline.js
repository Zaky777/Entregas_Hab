"use strict";

class Tienda {
  constructor(name, inventario) {
    this.name = name;
    this.inventario = inventario;
  }
}

const zara = new Tienda("Zara", [
  {
    name: "calcetines",
    price: 13,
  },
  { name: "chaquetas", price: 30 },
  { name: "camisetas", price: 20 },
]);

class Persona {
  constructor(name) {
    this.name = name;
  }
}

// MY User

const paco = new Persona("paco");

class Product {
  units = 1;

  constructor(product) {
    this.product = product;
  }

  // Incrementar el número de unidades
  increaseUnits() {
    this.units++;
  }
}

class Ecomerce {
  tiendas = [];
  users = [];
  userId = 1;
  tiendaId = 1;

  constructor(name) {
    this.name = name;
  }

  // ####--- Método que permite registrar nuevas tiendas ---####
  addTienda(tienda) {
    const idTienda = this.tiendaId;
    this.tiendaId++;
    this.tiendas.push({ tienda: tienda, id: idTienda });
  }
  addUser(user) {
    const idUser = this.userId;
    this.userId++;
    this.users.push({ user: user, id: idUser });
  }
  //función para pillar la tienda
  getProductosTienda(idTienda) {
    const myProducto = this.tiendas.filter((value) => idTienda === value.id);
    return myProducto[0].tienda.inventario;
  }

  // ####--- Método para comprobar si un producto que vamos a agregar está repetido ---####
  static isRepeat(orderArray, producto, idUser) {
    // Si el array "myOrder" está vacío pushea directamente el nuevo producto.
    if (orderArray === undefined || orderArray.length === 0) {
      return false;
    }

    // Si el array "myOrder" no está vacío vamos a recorrerlo.
    else {
      // Recorremos el array "myOrder".
      for (let product of orderArray) {
        // Si el nombre del producto que voy a agregar ya existe devolvemos un "true".
        if (producto.name == product.product.name) {
          return true;
        }
      }

      // De lo contrario delvolvemos "false".
      return false;
    }
  }

  // ####--- Método que devuelve el índex de un producto en un array ---####
  static getIndexOfAnExistentProducto(orderArray, producto) {
    for (let i = 0; i < orderArray.length; i++) {
      if (orderArray[i].product.name === producto.name) {
        return i;
      }
    }
  }

  // ####--- Método que permite realizar una nueva compra---####
  orderCarro(limit, productoTienda, idUser) {
    // Esta variable será "false" si el usuario no existe y viceversa.
    let userExist = false;

    // Compruebo que el usuario que va a realizar la compra existe.
    for (const user of this.users) {
      if (user.id === idUser) {
        userExist = true;
      }
    }

    // Si el usuario existe:
    if (userExist) {
      // Array en el que se almacenarán los diferentes productos que se compre.
      const myOrder = [];

      // Agregamos tantos ítems como veces se repita "limit".
      for (let i = 0; i < limit; i++) {
        // Vamos a agregar un producto aleatorio del inventario.
        const randomIndex = Math.round(
          Math.random() * (productoTienda.length - 1)
        );

        // Almaceno una variable el producto seleccionado aleatoriamente.
        const myProductos = productoTienda[randomIndex];

        // El método estático "isRepeat()" devuelve "true" si el producto está repetido y viceversa.
        const repeated = Ecomerce.isRepeat(myOrder, myProductos);

        // Si el producto no está repetido pushealo en "myOrder"
        if (!repeated) {
          myOrder.push(new Product(productoTienda[randomIndex]));
        }

        // Si está repetido vamos a llamar al método "increaseUnits".
        else {
          // Localizamos el índex del producto repetido empleando un método estático
          const index = Intermediario.getIndexOfAnExistentProducto(
            myOrder,
            myProductos
          );
          // Llamamos al método "increaseUnits()" del producto.
          myOrder[index].increaseUnits();
        }
      }

      // Si todo ha ido bien devuelvo un array con mi compra.
      return myOrder;
    }

    // Si el ID del usuario no existe:
    else {
      console.log("El ID del usuario introducido no existe.");
    }
  }

  // ####--- Método que devuelve la factura ---####

  getTicket(order) {
    // Aquí voy almacenando el valor total del compra.
    let total = 0;

    // Recorremos el array con el pedido.
    for (const producto of order) {
      // Muestro el nombre del producto, las unidades del mismo, y el total.
      console.log(
        `${producto.product.name} x${producto.units}: ${
          producto.units * producto.product.price
        }€`
      );
      // Voy sumando el valor de cada producto al total.
      total += producto.units * producto.product.price;
    }

    // Muestro el total.
    console.log(`Total: ${total}€`);
  }
}

//nuestro Ecomerce
const ecomerce = new Ecomerce("ecomerce");

ecomerce.addTienda(zara);

ecomerce.addUser(paco);

const myProctosTienda = ecomerce.getProductosTienda(1);

const myCompra = ecomerce.orderCarro(2, myProctosTienda, 1);

ecomerce.getTicket(myCompra);
