class Inmueble {
  constructor(direccion, barrio, valorPropiedad, metrosCuadrados, tipo, id) {
    this.direccion = direccion;
    this.barrio = barrio;
    this.valorPropiedad = parseInt(valorPropiedad);
    this.metrosCuadrados = parseInt(metrosCuadrados);
    this.tipo = tipo;
    this.id = id;
  }
  asignarID(array) {
    this.id = array.length;
  }
}
const inmuebles = [
  new Inmueble("AV acoyte 300", "caballito", 87500, 35, "casa", 1),
  new Inmueble("AV rivadavia 5555", "caballito", 80000, 40, "casa", 2),
  new Inmueble("AV gaona 1500", "flores", 129000, 60, "depto", 3),
  new Inmueble("gavilan 1100", "flores", 209000, 95, "depto", 4),
];

alert("Bienvenido a  tu.proximo.hagar.com!! ");
cliente = prompt("cual es tu nombre?");
alert(
  "hola " +
    cliente +
    " soy tu asistente, te estare ayudando dentro de la pagina"
);
operacion = prompt(cliente + " desea: alquilar, comprar o vender ");

if (operacion == "vender") {
  let continuar = true;
  while (continuar) {
    let ingreso = prompt(
      "Ingresa los datos de la propiedad a vender: Direccion,barrio, precio, mentros cuadrados,tipo, separados por (/). Inresa X para Finalizar"
    );

    if (ingreso.toUpperCase() == "X") {
      continuar = false;
      break;
    }

    let datos = ingreso.split("/");

    const inmueble = new Inmueble(
      datos[0],
      datos[1],
      datos[2],
      datos[3],
      datos[4]
    );

    inmuebles.push(inmueble);
    inmueble.asignarID(inmuebles);
  }
  let Criterio = prompt(
    "inmuebles disponibles actualmente, criterio de busqueda:(1)Precio Mayor a menor,(2)Precio de Menor a mayor,(3)Direccion (A a Z),(4)Direccion (Z a A )"
  );
  function ordenar(Criterio, array) {
    let arrayOrdenado = array.slice(0);
    switch (Criterio) {
      case "1":
        return arrayOrdenado.sort(
          (a, b) => b.valorPropiedad - a.valorPropiedad
        );
      case "2":
        return arrayOrdenado.sort(
          (a, b) => a.valorPropiedad - b.valorPropiedad
        );
      case "3":
        let nombreAscendente = arrayOrdenado.sort((a, b) =>
          a.barrio.localeCompare(b.barrio)
        );

        return nombreAscendente;
      case "4":
        return arrayOrdenado.sort((a, b) => b.barrio.localeCompare(a.barrio));

      default:
        alert("No ingreso una opcion valida");
        break;
    }
  }
  function StringResultado(array) {
    let info = "";
    array.forEach((element) => {
      info +=
        "Direccion: " +
        element.direccion +
        "\nBarrio: " +
        element.barrio +
        "\nValor de laPropiedad: " +
        element.valorPropiedad +
        "\nmetros Cuadrados: " +
        element.metrosCuadrados +
        "\nTipo; " +
        element.tipo +
        " \n\n";
    });
    return info;
  }
  alert(StringResultado(ordenar(Criterio, inmuebles)));
} else if (operacion == "comprar") {
  function mostrarInmuebles() {
    let mensaje = "Los inmuebles disponibles son:(selecionar por ID):\n";
    for (const inmueble of inmuebles) {
      mensaje +=
        "\n - ID:" +
        inmueble.id +
        " " +
        inmueble.direccion +
        "\n (" +
        inmueble.barrio +
        "  " +
        inmueble.metrosCuadrados +
        "m2," +
        inmueble.valorPropiedad +
        " " +
        inmueble.tipo +
        ")" +
        "\n";
    }
    let respuesta = prompt(mensaje);
    function cuentas() {
      valor = respuesta - 1;
      valorSeguro = inmuebles[valor].valorPropiedad * 0.01;
      montoTotal = inmuebles[valor].valorPropiedad + valorSeguro;
    }
    cuentas();
    switch (respuesta) {
      case "1":
        var metrosCuadrados =
          inmuebles[0].valorPropiedad / inmuebles[0].metrosCuadrados;
        alert(
          "Muchas gracias por tu compra, el Inmueble comprado es el siguiente:\n " +
            "direccion:" +
            inmuebles[0].direccion +
            " Valor metro cuadrado: " +
            metrosCuadrados
        );

        break;
      case "2":
        metrosCuadrados =
          inmuebles[1].valorPropiedad / inmuebles[1].metrosCuadrados;
        alert(
          "Muchas gracias por tu compra, el Inmueble comprado es el siguiente:\n " +
            "direccion:" +
            inmuebles[1].direccion +
            " Valor metro cuadrado: " +
            metrosCuadrados
        );
        break;
      case "3":
        metrosCuadrados =
          inmuebles[2].valorPropiedad / inmuebles[2].metrosCuadrados;
        alert(
          "Muchas gracias por tu compra, el Inmueble comprado es el siguiente:\n " +
            "direccion:" +
            inmuebles[2].direccion +
            " Valor metro cuadrado: " +
            metrosCuadrados
        );
        break;
      case "4":
        metrosCuadrados =
          inmuebles[3].valorPropiedad / inmuebles[3].metrosCuadrados;
        alert(
          "Muchas gracias por tu compra, el Inmueble comprado es el siguiente:\n " +
            "direccion:" +
            inmuebles[3].direccion +
            " Valor metro cuadrado: " +
            metrosCuadrados
        );
        break;
      default:
        alert("Opción inválida, no compro ningun inmueble");
    }

    let seguro = parseInt(
      prompt("Desea un seguro para propiedad por el 1% del valor? 1)si 2)no")
    );

    if (seguro == 1) {
      alert(
        "El valor del seguro es: " +
          valorSeguro +
          " Valor total a pagar: " +
          montoTotal
      );
    } else if (seguro == 2) {
      alert("Comprendo, muchas gracias por su compra");
    } else {
      alert("ingrese una opcion valida");
    }
  }

  mostrarInmuebles();
  /////
} else if (operacion == "alquilar") {
  alert(
    "disculpe " +
      cliente +
      " ,por el momento solo estamos vendiendo y publicando"
  );
} else {
  alert("No comprendo lo consultado por favor volve a ingresar a la pagina");
}
