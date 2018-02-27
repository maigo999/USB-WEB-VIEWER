'use strict';
 
const auth = () => {
    navigator.usb.requestDevice({ 'filters': []
    }).then(device => {
        var fixvendorId = ('0000' + device.vendorId.toString(16).toUpperCase() ).slice(-4);
        var fixproductId = ('0000' + device.productId.toString(16).toUpperCase() ).slice(-4);
        var target1 = document.getElementById("Vendorid");
        var target2 = document.getElementById("Productid");
        var target3 = document.getElementById("Serialnumber");
        console.log('0x' + fixvendorId);
        console.log('0x' + fixproductId);
        console.log(device.serialNumber);
        target1.innerHTML = '0x' + fixvendorId;
        target2.innerHTML = '0x' + fixproductId;
        
        if (!device.serialNumber){
            target3.innerHTML = "シリアルナンバーがありません";
        }else{
            target3.innerHTML = device.serialNumber;
        }
        }).catch(error => {
            console.log(error);
        });
    }
