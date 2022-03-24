var contenido = "<div class=\"buscador\">\r\n            <form class=\" form-inline\" id=\"formulario\">\r\n                <div class=\"form-group mx-sm-3 mb-2\">\r\n                  <label for=\"pwd\" class=\"titulo\">N\u00FAmero de Solicitud<\/label>\r\n                  <input type=\"number\" class=\"form-control\" id=\"numSolicitud\" placeholder=\"Ingrese n\u00FAmero\" required>\r\n                <\/div>\r\n                <button type=\"button\" class=\"btn btn-primary mb-2\" onclick=\"accionBtnBuscar()\">Buscar<\/a><\/button>\r\n            <\/form>\r\n        <\/div>" ;
var tabla = "<section class=\"cd-intro\">\r\n    \r\n\t\t<h1>Comparativo de cotizaciones<\/h1>\r\n\t\t<main>\r\n\r\n\t\t\t<div class=\"contenedorPrincipalTabla\">\r\n\t\t\t\t\t<table id=\"tablaComparacion\" name=\"tablaComparacion\" class=\"table table-bordered\">\r\n\t\t\t\t\t\t<thead>\r\n                        <tr id=\"copropiedad\">\r\n                        <\/tr>\r\n                        <tr id=\"infoGeneral\">\r\n                        <\/tr>\r\n\t\t\t\t\t\t<tr id=\"infoProveedor\">\r\n\t\t\t\t\t\t\t<th scope=\"col\" class=\"headTable\" style=\"width:20%\">Descripcion de la obra,bien,servicio o compra<\/th>\r\n\t\t\t\t\t\t\t<th scope=\"col\" class=\"headTable cantidadSolicitud\"  style=\"width:5%\" >Cantidad<\/th>\r\n\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t<\/thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr id=\"celdaVacia\">\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr id=\"tablaProductos\" >\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr id=\"sumaValorProductos\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" id=\"subtotal\" class=\"datos_pago costos subtotal\">SUBTOTAL<\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr id=\"iva\">\r\n\t\t\t\t\t\t\t\t<td id=\"ivaField\" colspan=\"2\" class=\"datos_pago costos\">IVA<\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td id=\"granTotal\" colspan=\"2\" class=\"datos_pago costos total\">TOTAL<\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr id=\"fechaCoti\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"detalleCotizacion\">FECHA DE COTIZACI\u00D3N:<\/td>\r\n\t\t\t\t\t\t\t<\/tr> \r\n\t\t\t\t\t\t\t<tr id=\"vigenciaCoti\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"detalleCotizacion\">VIGENCIA DE COTIZACI\u00D3N:<\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr id=\"tiempoEntrega\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"detalleCotizacion\">TIEMPO DE ENTREGA:<\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr  id=\"condiPago\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"detalleCotizacion\" >CONDICIONES DE PAGO:<\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr  id=\"condiGarantia\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"detalleCotizacion\">CONDICIONES DE GARANTIA:<\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr  id=\"tiempoGarantia\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"detalleCotizacion\">TIEMPO DE GARANTIA:<\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr id=\"beneficio\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"detalleCotizacion\">BENEFICIOS ADICIONALES:<\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr  id=\"observacion\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"detalleCotizacion\" >OBSERVACIONES DE LA PROPUESTA <\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t\t<tr  id=\"calificacion\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"detalleCotizacion\" >CALIFICACI\u00D3N DEL PROVEEDOR <\/td>\r\n\t\t\t\t\t\t\t<\/tr>\r\n\t\t\t\t\t\t<\/tbody>\r\n\t\t\t\t\t<\/table>\r\n\t\t\t\t\t<div class=\"nota\">* NOTA: Producto o servicio excluido de IVA<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div id=\"btnRegresar\">\r\n\t\t\t\t<button type=\"button\" class=\"btnRegresar btn btn-outline-primary\" onclick=\"accionBtnRegresar()\"><i class=\"bi bi-reply-all-fill\"> <\/i>Regresar al Inicio<\/button>\r\n\t\t\t\t<button type=\"button\" class=\"btnExportar btn btn-outline-primary\" onclick=\"fnExcelReport()\" id=\"btnExportar\"><i class=\"bi bi-arrow-down-circle-fill\"> <\/i>Exportar a Excel<\/button>\r\n\t\t\t<\/div>\r\n\t\t\t<div id=\"btnRegresar\" class=\"btnPdf\">\r\n\t\t\t\t<button type=\"button\" class=\"btnExportar btn btn-outline-primary\" onclick=\"window.print()\" id=\"btnExportarPdf\"><i class=\"bi bi-arrow-down-circle-fill\"> <\/i>Exportar a PDF<\/button>\r\n\t\t\t<\/div>\r\n\t\t<\/main>\r\n\t<\/section>";
$( document ).ready(function() {
    $("#main").html(contenido);
});
function accionBtnRegresar(){
    $("#main").html(contenido);
}
function accionBtnBuscar(){
    var numSolicitud = document.getElementById("numSolicitud").value;
    verificarExitenciaSolicitud(numSolicitud);
}

function verificarExitenciaSolicitud(numSolicitud){
    BX24.callMethod(
        "crm.deal.get",
            { id: numSolicitud },
        function(resultado){
        var data = resultado.data();
            if(data){
                var idCopropiedad = data.UF_CRM_1640169249;
                pintarInformacionCuadro(numSolicitud,idCopropiedad);
                
                $("#main").html(tabla);
            }
            else{
                $("#main").html(contenido);
            } 
        }
    );
}

function pintarInformacionCuadro(numSolicitud,idCopropiedad){
    BX24.callMethod(
        "crm.item.list", {entityTypeId: 180, 
            "filter": {
                "=title": numSolicitud
            }
        },
        function(result){
            var dataPropuesta=result.data();
            var infoPropuesta = clasificarInfomacionAPintar(dataPropuesta);
            obtenerProductosSolicitud(numSolicitud,infoPropuesta,idCopropiedad);
            
        }
    );        
} 
function clasificarInfomacionAPintar(dataPropuesta){
    var informacionPropuestaProveedor=[];
    const listadoPropuestaProveedores=[];
    var productosYCantidadesPropuesta=[];

    for(let propuesta of dataPropuesta.items){
        
        var propuestaProveedor={
            fechaPropuesta : propuesta.createdTime,
            vigenciaCotizacion : propuesta.ufCrm40_1644260485675,
            tiempoEntrega : propuesta.ufCrm40_1643766553076,
            condicionPago : propuesta.ufCrm40_1640695541215,
            condicionGarantia : propuesta.ufCrm40_1644898582812,
            tiempoGarantia : propuesta.ufCrm40_1644270754431,
            beneficio : propuesta.ufCrm40_1644260512042,
            observacion : propuesta.ufCrm40_1644447649383,
            nombreProducto : propuesta.ufCrm40_1640695319564,
            cantidadProducto: propuesta.ufCrm40_1640695367517,
            valorUnitarioProducto: propuesta.ufCrm40_1640695391503,
            ivaProducto :propuesta.ufCrm40_1645333632167,
            totalProducto : propuesta.ufCrm40_1644008144416,
            nombreProveedor :propuesta.ufCrm40_1640695479748,
            nitProveedor : propuesta.ufCrm40_1645535909473
        };
        for (let i = 0; i < propuesta.ufCrm40_1640695319564.length; i++) {
            var producto={
                nombreProducto :  propuesta.ufCrm40_1640695319564[i],
                cantidadProducto : Number.parseInt(propuesta.ufCrm40_1640695367517[i]),
                valorUnitarioProducto:  Number.parseInt(propuesta.ufCrm40_1640695391503[i]),
                totalProducto :  Number.parseInt(propuesta.ufCrm40_1644008144416[i])

            }
            productosYCantidadesPropuesta.push(producto);
        };
        
        listadoPropuestaProveedores.push(propuestaProveedor);
    }
    
    let nitProveedores = dataPropuesta.items.map(proveedor =>{
        return proveedor.ufCrm40_1645535909473
    });

    informacionPropuestaProveedor={listadoPropuestaProveedores,productosYCantidadesPropuesta,nitProveedores};
    
    return informacionPropuestaProveedor;
}

function obtenerProductosSolicitud(numSolicitud,infoPropuesta,idCopropiedad){
    BX24.callMethod(
        "crm.deal.productrows.get", 
            { id: numSolicitud }, 
            function(resultado) 
            {
                var dataProductos= resultado.data();
                let productosYCantidades = dataProductos.map(producto=>{
                    return  {nombreProducto : producto.PRODUCT_NAME,cantidadProducto : producto.QUANTITY}
                })
                obtenerDatosProveedores(numSolicitud,infoPropuesta,productosYCantidades,idCopropiedad);
            }
    ); 
}
function obtenerDatosProveedores(numSolicitud,infoPropuesta,productosYCantidades,idCopropiedad){
    var nitProveedor=infoPropuesta.nitProveedores;
    BX24.callMethod(
        "crm.company.list", 
        { 
            filter: { "UF_CRM_1613489520": nitProveedor,},
            select: ["TITLE","UF_CRM_1613489520","UF_CRM_1640858973795","PHONE"]
        }, 
        function(result) 
        {
            
            var infoProveedores=result.data();
            infoProveedores=infoProveedores.reduce(((acc,proveedor)=>{
                acc[proveedor.UF_CRM_1613489520]=proveedor;
                return acc;
            }),(new Map()));
            obtenerNombreCopropiedad(numSolicitud,infoPropuesta,productosYCantidades,infoProveedores,idCopropiedad)
            
        }   

    );	  
}
function obtenerNombreCopropiedad(numSolicitud,infoPropuesta,productosYCantidades,infoProveedores,idCopropiedad){
    BX24.callMethod(
        "crm.company.get", 
        { id: idCopropiedad }, 
        function(result) 
        {
            var dataCopropiedad=result.data();
            var nombreCopropiedad=dataCopropiedad.TITLE;
            recopilarInformacionAPintar(numSolicitud,infoPropuesta,productosYCantidades,infoProveedores,nombreCopropiedad);
        }
    );

    
}
function recopilarInformacionAPintar(numSolicitud,infPropuesta,productosYCantidades,infoProveedores,nombreCopropiedad){
    var numeroSolicitud = numSolicitud;
    var informacionPropuesta = infPropuesta;
    var productosSolicitud= productosYCantidades;
    var nombreCopropiedad =nombreCopropiedad;

    var listadoProductosCompleto = orderarListadoProductos(informacionPropuesta,productosSolicitud);
    let infoSolicitud = generarDataPrimeraColumna(numeroSolicitud,listadoProductosCompleto);
    let infoPropuesta = generarArrayPropuestaAPintar(infoProveedores,informacionPropuesta);
    pintarTabla(infoSolicitud,infoPropuesta,nombreCopropiedad,productosSolicitud);
    
}
function orderarListadoProductos(infoPropuesta,productosSolicitud){
    var productosPropuestaProveedores=infoPropuesta.productosYCantidadesPropuesta;
    var productosFusionados = productosSolicitud.concat(productosPropuestaProveedores.
        map(producto=> {return {nombreProducto: producto.nombreProducto, cantidadProducto:producto.cantidadProducto}}));
    
        let set= new Set( productosFusionados.map( JSON.stringify ) )
        let productosFusionadosSinRepetir = Array.from( set ).map( JSON.parse );

        
    return productosFusionadosSinRepetir;
    
}
function generarDataPrimeraColumna(numeroSolicitud,listadoProductos){
    let fechaActual = new Date();
    var informacionSolicitud={
        fechaActual : fechaActual.toLocaleDateString(),
        numeroSolicitud : numeroSolicitud,
        listadoProductos : listadoProductos
    }
    return informacionSolicitud;
}

function generarArrayPropuestaAPintar(infoProveedores,informacionPropuesta){
    let propuestasProveedores=[];
    let contadorPropuestas=informacionPropuesta.listadoPropuestaProveedores.length;
    
    for (let i = 0; i < contadorPropuestas; i++) {

        let infoCompletaProveedor=infoProveedores[informacionPropuesta.listadoPropuestaProveedores[i].nitProveedor];
        if(infoCompletaProveedor !== undefined){
            let productos =[];

            for (let j = 0; j <informacionPropuesta.listadoPropuestaProveedores[i].nombreProducto.length; j++) {
                var producto={
                    nombreProducto : informacionPropuesta.listadoPropuestaProveedores[i].nombreProducto[j],
                    cantidadProducto : Number.parseInt(informacionPropuesta.listadoPropuestaProveedores[i].cantidadProducto[j]),
                    valorUnitarioProducto:  Number.parseInt(informacionPropuesta.listadoPropuestaProveedores[i].valorUnitarioProducto[j]),
                    totalProducto :  Number.parseInt(informacionPropuesta.listadoPropuestaProveedores[i].totalProducto[j])
                }
                
                productos.push(producto);
            };

            var propuestaProveedor={
                nombreProveedor : infoCompletaProveedor.TITLE,
                telefonoProveedor :infoCompletaProveedor.PHONE[0].VALUE,
                nitProveedor :infoCompletaProveedor.UF_CRM_1613489520,
                productosProveedores : productos,
                ivaProducto: informacionPropuesta.listadoPropuestaProveedores[i].ivaProducto,
                fechaCotizacion : informacionPropuesta.listadoPropuestaProveedores[i].fechaPropuesta,
                vigenciaCotizacion :informacionPropuesta.listadoPropuestaProveedores[i].vigenciaCotizacion,
                tiempoEntrega : informacionPropuesta.listadoPropuestaProveedores[i].tiempoEntrega,
                condicionPago :informacionPropuesta.listadoPropuestaProveedores[i].condicionPago,
                condicionGarantia: informacionPropuesta.listadoPropuestaProveedores[i].condicionGarantia,
                tiempoGarantia :informacionPropuesta.listadoPropuestaProveedores[i].tiempoGarantia,
                beneficio:informacionPropuesta.listadoPropuestaProveedores[i].beneficio,
                observacion :informacionPropuesta.listadoPropuestaProveedores[i].observacion,
                calificacionProveedor: infoCompletaProveedor.UF_CRM_1640858973795

            }; 
            propuestasProveedores.push(propuestaProveedor);
        }
        
    } 
    return propuestasProveedores;
}
function pintarTabla(infoSolicitud,infoPropuesta,nombreCopropiedad,productosIniciales){
    let pintarInfoSolicitud = '<th colspan="8"  class="title" style="width:100%"> Número de Solicitud:  '+ infoSolicitud.numeroSolicitud+' -    Fecha:  '+ infoSolicitud.fechaActual+'</th>';
    let pintarNombreCopropiedad ='<th colspan="8"  class="title" style="width:100%">'+nombreCopropiedad+'</th>';
    let pintarTitleTotal='<td class="textBold sizeSubtitle center">VALOR UNITARIO </td>';
    let pintarTitleSubtotal='<td class="textBold sizeSubtitle center">TOTAL</td>';
    let pintarCeldaVacia='<td colspan="2" class="textBold sizeSubtitle center"></td>';
    $("#copropiedad").append(pintarNombreCopropiedad);
    $("#infoGeneral").append(pintarInfoSolicitud);
    $("#celdaVacia").append(pintarCeldaVacia);
    for (let i = 0; i < infoSolicitud.listadoProductos.length; i++) {
        let productosSolicitud;
        let productosPropuestas;

        let productoInicial= esProductoinicial(infoSolicitud.listadoProductos[i].nombreProducto, infoSolicitud.listadoProductos[i].cantidadProducto,productosIniciales);
        if(productoInicial){
            productosSolicitud= pintarProductoInicial(infoSolicitud.listadoProductos[i].nombreProducto, infoSolicitud.listadoProductos[i].cantidadProducto);
            productosPropuestas= infoPropuesta
                                    .map(proveedor=>buscarProductoActualEnProveedor(proveedor, infoSolicitud.listadoProductos[i]))
                                    .map(producto=> pintarProductoValoresIniciales(producto.valorUnitarioProducto, producto.totalProducto))
                                    .reduce(((acc, productoString)=> acc+productoString), "");
        }
        else{
        productosSolicitud= pintarProducto(infoSolicitud.listadoProductos[i].nombreProducto, infoSolicitud.listadoProductos[i].cantidadProducto);
        productosPropuestas= infoPropuesta
                                    .map(proveedor=>buscarProductoActualEnProveedor(proveedor, infoSolicitud.listadoProductos[i]))
                                    .map(producto=> pintarProductoValores(producto.valorUnitarioProducto, producto.totalProducto))
                                    .reduce(((acc, productoString)=> acc+productoString), "");
        }

        $("#tablaProductos").after("<tr>"+productosSolicitud+productosPropuestas+"</tr>");
        
    }

    let subTotalesProveedores= infoPropuesta.map(proveedor=>proveedor.productosProveedores)
                                .map(productos=> productos.reduce((
                                    (acc, producto)=> {
                                        acc.subtotalUnitario=acc.subtotalUnitario+producto.valorUnitarioProducto;
                                        acc.subtotalTotal=acc.subtotalTotal+producto.totalProducto;
                                        return acc;
                                    }
                                ), ({subtotalUnitario: 0, subtotalTotal:0})))
                                

        let subtotalesProveedoresAPintar= subTotalesProveedores.map(infoSubtotalesProveedor=> pintarSubtotal("$ "+infoSubtotalesProveedor.subtotalUnitario, "$ "+infoSubtotalesProveedor.subtotalTotal))
                                            .reduce(((acc, productoString)=> acc+productoString), "");

        let subtotalesIVA=subTotalesProveedores.map((infoSubtotalesProveedor, index)=> pintarIVA("%"+infoPropuesta[index].ivaProducto, "$ "+infoSubtotalesProveedor.subtotalTotal*(Number.parseInt(infoPropuesta[index].ivaProducto)/100)))
                                    .reduce(((acc, productoString)=> acc+productoString), "");

        let granTotales=subTotalesProveedores.map((infoSubtotalesProveedor, index)=> pintarTotal( "$ "+(infoSubtotalesProveedor.subtotalTotal*(Number.parseInt(infoPropuesta[index].ivaProducto)/100  )+infoSubtotalesProveedor.subtotalTotal)))

        
        $("#subtotal").after(subtotalesProveedoresAPintar);
        $("#ivaField").after(subtotalesIVA);
        $("#granTotal").after(granTotales); 
    

    
    let contador=infoPropuesta.length;
    for (let i = 0; i <contador; i++) {
        
        let pintarInfoProveedor='<th scope="col"  class="headTable" id="InfoProveedor" style="width:25%" colspan="2">'+ validarCampo(infoPropuesta[i].nombreProveedor)+' <br>'+ validarCampo(infoPropuesta[i].telefonoProveedor)+'<br>'+  validarCampo(infoPropuesta[i].nitProveedor)+'</th>';
        let pintarFechaCoti ='<td colspan="2" class="infoAdicional">'+ validarCampo(normalizarFecha(infoPropuesta[i].fechaCotizacion))+'</td>';
        let pintarVigenciaCoti ='<td colspan="2" class="infoAdicional">'+ validarCampo(infoPropuesta[i].vigenciaCotizacion)+'</td>';
        let pintarTiempoEntrega ='<td colspan="2" class="infoAdicional">'+validarCampo(infoPropuesta[i].tiempoEntrega)+'</td>';
        let pintarCondicionPago='<td colspan="2" class="infoAdicional">'+validarCampo(infoPropuesta[i].condicionPago)+'</td>';
        let pintarCondicionGarantia='<td colspan="2" class="infoAdicional">'+validarCampo(infoPropuesta[i].condicionGarantia)+'</td>';
        let pintartiempoGarantia ='<td colspan="2" class="infoAdicional">'+validarCampo(infoPropuesta[i].tiempoGarantia)+'</td>';
        let pintarBeneficio ='<td colspan="2" class="infoAdicional">'+validarCampo(infoPropuesta[i].beneficio)+'</td>';
        let pintarObservacion ='<td colspan="2" class="infoAdicional">'+validarCampo(infoPropuesta[i].observacion)+'</td>';
        let pintarCalificacionProveedor='<td colspan="2" class="infoAdicional">'+validarCampo(infoPropuesta[i].calificacionProveedor) +'</td>';

        $("#infoProveedor").append(pintarInfoProveedor);
        $("#celdaVacia").append(pintarTitleTotal);
        $("#celdaVacia").append(pintarTitleSubtotal);
        $("#fechaCoti").append(pintarFechaCoti);
        $("#vigenciaCoti").append(pintarVigenciaCoti);
        $("#tiempoEntrega").append(pintarTiempoEntrega);
        $("#condiPago").append(pintarCondicionPago);
        $("#condiGarantia").append(pintarCondicionGarantia);
        $("#tiempoGarantia").append(pintartiempoGarantia);
        $("#beneficio").append(pintarBeneficio);
        $("#observacion").append(pintarObservacion);
        $("#calificacion").append(pintarCalificacionProveedor);
    } 

}
function esProductoinicial(nombre,cantidad,productos){
    for (let i = 0; i < productos.length; i++) {
        if(nombre  == productos[i].nombreProducto && cantidad == productos[i].cantidadProducto){
            return true;
        }
    }
    return false;
}
function normalizarFecha(fecha){
   
    var fechaNormalizada = new Date(fecha).toLocaleDateString();
    return fechaNormalizada;
}
function validarCampo(dato){
    if(dato == null ){
        dato="";
    }
    return dato;
}

function pintarProducto(primerParametro, segundoParametro){
    return '<td colspan="1" class="cantidadProducto" id="cantidadProducto">'+primerParametro+'</td>'+'<td class="cantidadProducto" id="cantidadProducto">'+segundoParametro+'</td>';
}
function pintarProductoInicial(primerParametro, segundoParametro){
    return '<td colspan="1" class="cantidadProducto original" id="cantidadProducto">'+primerParametro+'</td>'+'<td class="cantidadProducto original" id="cantidadProducto">'+segundoParametro+'</td>';
}
function pintarProductoValores(primerParametro, segundoParametro){
    if(primerParametro == "" && segundoParametro ==""){
        return '<td colspan="1" class="cantidadProducto" id="cantidadProducto">'+primerParametro+'</td>'+'<td class="cantidadProducto" id="cantidadProducto">'+segundoParametro+'</td>';
    }
    return '<td colspan="1" class="cantidadProducto" id="cantidadProducto">$ '+primerParametro+'</td>'+'<td class="cantidadProducto" id="cantidadProducto">$ '+segundoParametro+'</td>';
}
function pintarProductoValoresIniciales(primerParametro, segundoParametro){
    if(primerParametro == "" && segundoParametro ==""){
        return '<td colspan="1" class="cantidadProducto original" id="cantidadProducto">'+primerParametro+'</td>'+'<td class="cantidadProducto original" id="cantidadProducto">'+segundoParametro+'</td>';
    }
    return '<td colspan="1" class="cantidadProducto original" id="cantidadProducto">$ '+primerParametro+'</td>'+'<td class="cantidadProducto original" id="cantidadProducto">$ '+segundoParametro+'</td>';
}

<<<<<<< HEAD

  function pintarIVA(primerParametro, segundoParametro){
    return '<td colspan="1" class="cantidadProducto costos" id="cantidadProducto"></td>'+'<td class="cantidadProducto costos" id="cantidadProducto">'+segundoParametro+'</td>';
=======
function pintarIVA(primerParametro, segundoParametro){
    return '<td colspan="1" class="cantidadProducto costos" id="cantidadProducto">'+primerParametro+'</td>'+'<td class="cantidadProducto costos" id="cantidadProducto">'+segundoParametro+'</td>';
>>>>>>> origin/development
}

function pintarSubtotal(segundoParametro){
    return '<td colspan="1" class="sizeTotal subtotal"></td>'+'<td class="sizeTotal subtotal">'+segundoParametro+'</td>';
}
function pintarTotal(primerParametro){
    return'<td colspan="2" class="sizeTotal total">'+ primerParametro +'</td>';
}

function buscarProductoActualEnProveedor(proveedor, productoABuscar){

    let objetoABuscar=proveedor.productosProveedores
    .filter(producto=> producto.nombreProducto==productoABuscar.nombreProducto && producto.cantidadProducto==productoABuscar.cantidadProducto);
    return objetoABuscar[0]? objetoABuscar[0]: {valorUnitarioProducto: "", totalProducto:""};
}

function fnExcelReport()
{
    console.log("imp excel");
    var table = $("#tablaComparacion");

    if(table && table.length)
    {
        console.log("print excel");
        $(table).table2excel({
            exclude: ".noExl",
            name: "Excel Document Name",
            filename: "ComparativoCotizaciones.xls",
            fileext: ".xls",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true,
            preserveColors: true
        });
    }
    
} 