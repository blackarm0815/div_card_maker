"use strict";
//
var drawSquareDefault = function (squareData) {
    //
    var divAppleBar = null;
    var divAppleTitle = null;
    var divBananaTitle = null;
    var divBananaBar = null;
    var divBlack = null;
    var divCardTitle = null;
    var divCarrotBar = null;
    var divCarrotTitle = null;
    var divFrame = null;
    var fontSize = 0;
    //
    // calculate font size
    fontSize = Math.ceil(squareData.squareSide * 0.07);
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
    // card title
    divCardTitle = document.createElement('div');
    divCardTitle.id = "divCardTitle_".concat(squareData.sysId);
    divCardTitle.style.color = 'white';
    divCardTitle.style.left = '5%';
    divCardTitle.style.position = 'absolute';
    divCardTitle.style.top = '2%';
    divCardTitle.style.fontSize = "".concat(fontSize, "px");
    divCardTitle.style.fontFamily = 'monospace';
    divCardTitle.innerText = squareData.cardName;
    divFrame.appendChild(divCardTitle);
    //
    // apple title
    divAppleTitle = document.createElement('div');
    divAppleTitle.id = "divAppleTitle_".concat(squareData.sysId);
    divAppleTitle.style.color = 'white';
    divAppleTitle.className = 'whiteText';
    divAppleTitle.style.left = '5%';
    divAppleTitle.style.position = 'absolute';
    divAppleTitle.style.top = '92%';
    divAppleTitle.style.fontSize = "".concat(Math.ceil(squareData.squareSide * 0.03), "px");
    divAppleTitle.style.fontFamily = 'monospace';
    divAppleTitle.innerText = 'apple';
    divFrame.appendChild(divAppleTitle);
    //
    // apple bar
    divAppleBar = document.createElement('div');
    divAppleBar.id = "divAppleBar_".concat(squareData.sysId);
    divAppleBar.style.backgroundColor = '#000000';
    divAppleBar.style.height = '5%';
    divAppleBar.style.left = '5%';
    divAppleBar.style.position = 'absolute';
    divAppleBar.style.top = '85%';
    divAppleBar.style.width = '26%';
    divAppleBar.style.transitionDuration = '500ms';
    divAppleBar.style.transitionProperty = 'background-color, height, top';
    divFrame.appendChild(divAppleBar);
    //
    // banana title
    divBananaTitle = document.createElement('div');
    divBananaTitle.id = "divBananaTitle_".concat(squareData.sysId);
    divBananaTitle.style.color = 'white';
    divBananaTitle.style.left = '37%';
    divBananaTitle.style.position = 'absolute';
    divBananaTitle.style.top = '92%';
    divBananaTitle.style.fontSize = "".concat(Math.ceil(squareData.squareSide * 0.03), "px");
    divBananaTitle.style.fontFamily = 'monospace';
    divBananaTitle.innerText = 'banana';
    divFrame.appendChild(divBananaTitle);
    //
    // banana bar
    divBananaBar = document.createElement('div');
    divBananaBar.id = "divBananaBar_".concat(squareData.sysId);
    divBananaBar.style.backgroundColor = '#000000';
    divBananaBar.style.height = '5%';
    divBananaBar.style.left = '37%';
    divBananaBar.style.position = 'absolute';
    divBananaBar.style.top = '85%';
    divBananaBar.style.width = '26%';
    divBananaBar.style.transitionDuration = '500ms';
    divBananaBar.style.transitionProperty = 'background-color, height, top';
    divFrame.appendChild(divBananaBar);
    //
    // carrot title
    divCarrotTitle = document.createElement('div');
    divCarrotTitle.id = "divCarrotTitle_".concat(squareData.sysId);
    divCarrotTitle.style.color = 'white';
    divCarrotTitle.style.left = '69%';
    divCarrotTitle.style.position = 'absolute';
    divCarrotTitle.style.top = '92%';
    divCarrotTitle.style.fontSize = "".concat(Math.ceil(squareData.squareSide * 0.03), "px");
    divCarrotTitle.style.fontFamily = 'monospace';
    divCarrotTitle.innerText = 'carrot';
    divFrame.appendChild(divCarrotTitle);
    //
    // carrot bar
    divCarrotBar = document.createElement('div');
    divCarrotBar.id = "divCarrotBar_".concat(squareData.sysId);
    divCarrotBar.style.backgroundColor = '#000000';
    divCarrotBar.style.height = '5%';
    divCarrotBar.style.left = '69%';
    divCarrotBar.style.position = 'absolute';
    divCarrotBar.style.top = '85%';
    divCarrotBar.style.transitionDuration = '500ms';
    divCarrotBar.style.transitionProperty = 'background-color, height, top';
    divCarrotBar.style.width = '26%';
    divFrame.appendChild(divCarrotBar);
    //
    return divFrame;
};
var calculateColor = function (floatingPoint) {
    if (floatingPoint < 0.25) {
        return '#005c00';
    }
    if (floatingPoint < 0.5) {
        return '#999900';
    }
    if (floatingPoint < 0.75) {
        return '#bd5e00';
    }
    return '#ad0000';
};
var updateStats = function (sysId, appleFloat, bananaFloat, carrotFloat) {
    //
    var divFrame = null;
    //
    var divAppleBar = null;
    var divAppleBarHeight = 0;
    var divAppleBarTop = 0;
    //
    var divBananaBar = null;
    var divBananaBarHeight = 0;
    var divBananaBarTop = 0;
    //
    var divCarrotBar = null;
    var divCarrotBarHeight = 0;
    var divCarrotBarTop = 0;
    //
    var targetColor = '';
    //
    divFrame = document.getElementById("divFrame_".concat(sysId));
    if (divFrame !== null) {
        //
        divAppleBar = document.getElementById("divAppleBar_".concat(sysId));
        if (divAppleBar !== null) {
            // default big blue bar means there was a null
            divAppleBarHeight = 70;
            divAppleBarTop = 20;
            targetColor = 'blue';
            if (appleFloat !== null) {
                // calculate size and color
                divAppleBarHeight = Math.ceil(70 * appleFloat);
                divAppleBarTop = 90 - divAppleBarHeight;
                targetColor = calculateColor(appleFloat);
            }
            divAppleBar.style.backgroundColor = targetColor;
            divAppleBar.style.height = "".concat(divAppleBarHeight, "%");
            divAppleBar.style.top = "".concat(divAppleBarTop, "%");
        }
        //
        divBananaBar = document.getElementById("divBananaBar_".concat(sysId));
        if (divBananaBar !== null) {
            // default big blue bar means there was a null
            divBananaBarHeight = 70;
            divBananaBarTop = 20;
            targetColor = 'blue';
            if (bananaFloat !== null) {
                // calculate size and color
                divBananaBarHeight = Math.ceil(70 * bananaFloat);
                divBananaBarTop = 90 - divBananaBarHeight;
                targetColor = calculateColor(bananaFloat);
            }
            divBananaBar.style.backgroundColor = targetColor;
            divBananaBar.style.height = "".concat(divBananaBarHeight, "%");
            divBananaBar.style.top = "".concat(divBananaBarTop, "%");
        }
        //
        divCarrotBar = document.getElementById("divCarrotBar_".concat(sysId));
        if (divCarrotBar !== null) {
            // default big blue bar means there was a null
            divCarrotBarHeight = 70;
            divCarrotBarTop = 20;
            targetColor = 'blue';
            if (carrotFloat !== null) {
                // calculate size and color
                divCarrotBarHeight = Math.ceil(70 * carrotFloat);
                divCarrotBarTop = 90 - divCarrotBarHeight;
                targetColor = calculateColor(carrotFloat);
            }
            divCarrotBar.style.backgroundColor = targetColor;
            divCarrotBar.style.height = "".concat(divCarrotBarHeight, "%");
            divCarrotBar.style.top = "".concat(divCarrotBarTop, "%");
        }
    }
};
var createNumberNull = function () {
    if (Math.random() > 0.90) {
        return null;
    }
    return Math.random();
};
var actionRandomize = function () {
    //
    var statApple = createNumberNull();
    var statBanana = createNumberNull();
    var statCarrot = createNumberNull();
    //
    updateStats('abcdefgh', statApple, statBanana, statCarrot);
    updateStats('ijklmnop', statApple, statBanana, statCarrot);
};
var addEventToRandomize = function () {
    //
    var divRandomize = null;
    //
    divRandomize = document.getElementById('randomize');
    if (divRandomize !== null) {
        divRandomize.addEventListener('click', actionRandomize);
    }
};
var buildSquaresEmpty = function () {
    var divMain = null;
    var reportBig = null;
    var reportSmall = null;
    //
    divMain = document.getElementById('divMain');
    if (divMain !== null) {
        //
        // generate the square report (big)
        reportBig = drawSquareDefault({
            cardName: 'div_card_maker',
            squareSide: 1800,
            sysId: 'abcdefgh',
        });
        reportBig.style.left = '100px';
        reportBig.style.top = '100px';
        divMain.appendChild(reportBig);
        //
        // generate the square report (small)
        reportSmall = drawSquareDefault({
            cardName: 'div_card_maker',
            squareSide: 150,
            sysId: 'ijklmnop',
        });
        reportSmall.style.left = '2000px';
        reportSmall.style.top = '100px';
        divMain.appendChild(reportSmall);
    }
};
//
var main = function () {
    buildSquaresEmpty();
    addEventToRandomize();
};
//
main();
