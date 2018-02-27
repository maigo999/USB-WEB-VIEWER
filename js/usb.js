'use strict';
 
const auth = () => {
    navigator.usb.requestDevice({ 'filters': []
    }).then(device => {
        var fixvendorId = ('0000' + device.vendorId.toString(16).toUpperCase() ).slice(-4);
        var fixproductId = ('0x' + '0000' + device.productId.toString(16).toUpperCase() ).slice(-4);
        console.log('0x' + fixvendorId);
        console.log('0x' + fixproductId);
        console.log(device.serialNumber);
    }).catch(error => {
    console.log(error);
    });
}
