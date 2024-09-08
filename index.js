"use strict";
//
var drawSquareDefault = function (squareData) {
    //
    var divBlack = null;
    var divFrame = null;
    var divNetwork = null;
    var divNetworkHeight = 0;
    var divNetworkTop = 0;
    var divPower = null;
    var divPowerHeight = 0;
    var divPowerTop = 0;
    var divSpace = null;
    var divSpaceHeight = 0;
    var divSpaceTop = 0;
    //
    //
    // the square div that contains everything and is returned at the end of the function
    // do not change this section in any way
    divFrame = document.createElement('div');
    divFrame.id = "divFrame_".concat(squareData.sysId);
    divFrame.style.height = "".concat(squareData.squareSide, "px");
    divFrame.style.position = 'absolute';
    divFrame.style.width = "".concat(squareData.squareSide, "px");
    //
    // black background
    // i am using a black square to demonstrate the info placement more clearly
    // this does not have to be a style rule for all overlays
    divBlack = document.createElement('div');
    divBlack.id = "divBlack_".concat(squareData.sysId);
    divBlack.style.backgroundColor = 'black';
    divBlack.style.height = '100%';
    divBlack.style.left = '0%';
    divBlack.style.position = 'absolute';
    divBlack.style.top = '0%';
    divBlack.style.width = '100%';
    divFrame.appendChild(divBlack);
    //
    // if network data exists, draw a bar
    if (squareData.statNetwork !== null) {
        //
        divNetworkHeight = Math.ceil(90 * squareData.statNetwork);
        divNetworkTop = 95 - divNetworkHeight;
        //
        divNetwork = document.createElement('div');
        divNetwork.id = "divNetwork_".concat(squareData.sysId);
        divNetwork.style.backgroundColor = 'blue';
        divNetwork.style.height = "".concat(divNetworkHeight, "%");
        divNetwork.style.left = '5%';
        divNetwork.style.position = 'absolute';
        divNetwork.style.top = "".concat(divNetworkTop, "%");
        divNetwork.style.width = '26%';
        divFrame.appendChild(divNetwork);
    }
    //
    // if power data exists, draw a bar
    if (squareData.statPower !== null) {
        divPowerHeight = Math.ceil(90 * squareData.statPower);
        divPowerTop = 95 - divPowerHeight;
        //
        divPower = document.createElement('div');
        divPower.id = "divPower_".concat(squareData.sysId);
        divPower.style.backgroundColor = 'green';
        divPower.style.height = "".concat(divPowerHeight, "%");
        divPower.style.left = '37%';
        divPower.style.position = 'absolute';
        divPower.style.top = "".concat(divPowerTop, "%");
        divPower.style.width = '26%';
        divFrame.appendChild(divPower);
    }
    //
    // if space data exists, draw a bar
    if (squareData.statSpace !== null) {
        divSpaceHeight = Math.ceil(90 * squareData.statSpace);
        divSpaceTop = 95 - divSpaceHeight;
        //
        divSpace = document.createElement('div');
        divSpace.id = "divSpace_".concat(squareData.sysId);
        divSpace.style.backgroundColor = 'red';
        divSpace.style.height = "".concat(divSpaceHeight, "%");
        divSpace.style.left = '69%';
        divSpace.style.position = 'absolute';
        divSpace.style.top = "".concat(divSpaceTop, "%");
        divSpace.style.width = '26%';
        divFrame.appendChild(divSpace);
    }
    return divFrame;
};
//
var main = function () {
    //
    var border = 100;
    var squareSide = 1800;
    //
    var spongebob = document.getElementById('spongebob');
    if (spongebob !== null) {
        //
        // generate the square report
        var report = drawSquareDefault({
            border: border,
            statNetwork: 0.8,
            statPower: 0.6,
            statSpace: 0.4,
            squareSide: squareSide,
            sysId: 'abcdefghijk',
        });
        //
        // adjust the square report to work with borders
        report.style.left = "".concat(border, "px");
        report.style.top = "".concat(border, "px");
        //
        // attach the report to the webpage
        spongebob.appendChild(report);
    }
};
//
main();
