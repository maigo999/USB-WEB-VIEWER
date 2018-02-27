'use strict';
 
const auth = () => {
    navigator.usb.requestDevice({ 'filters': []
    }).then(device => {

        var fixvendorId = ( '0000' + device.vendorId.toString(16).toUpperCase() ).slice(-4);
        var fixproductId = ( '0000' + device.productId.toString(16).toUpperCase() ).slice(-4);
        alert('0x' + fixvendorId + '\n' + '0x' + fixproductId + '\n' + device.serialNumber)
    }).catch(error => {
    console.log(error);
    });
}