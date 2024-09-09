"use strict";
//
var drawSquareDefault = function (squareData) {
    //
    var divBlack = null;
    var divFrame = null;
    var divApple = null;
    var divAppleTitle = null;
    var divBanana = null;
    var divBananaTitle = null;
    var divCardTitle = null;
    var divCarrot = null;
    var divCarrotTitle = null;
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
    divCardTitle.id = "divTitle_".concat(squareData.sysId);
    divCardTitle.style.color = 'white';
    divCardTitle.style.left = '5%';
    divCardTitle.style.position = 'absolute';
    divCardTitle.style.top = '2%';
    divCardTitle.style.fontSize = "".concat(fontSize, "px");
    divCardTitle.style.fontFamily = 'monospace';
    divCardTitle.innerText = squareData.cardName;
    divFrame.appendChild(divCardTitle);
    //
    // apple message
    divAppleTitle = document.createElement('div');
    divAppleTitle.id = "divMessageApple_".concat(squareData.sysId);
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
    divApple = document.createElement('div');
    divApple.id = "divApple_".concat(squareData.sysId);
    divApple.classList.add('gojira');
    divApple.style.backgroundColor = '#000000';
    divApple.style.height = '5%';
    divApple.style.left = '5%';
    divApple.style.position = 'absolute';
    divApple.style.top = '85%';
    divApple.style.width = '26%';
    divFrame.appendChild(divApple);
    //
    // banana message
    divBananaTitle = document.createElement('div');
    divBananaTitle.id = "divMessageBanana_".concat(squareData.sysId);
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
    divBanana = document.createElement('div');
    divBanana.id = "divBanana_".concat(squareData.sysId);
    divBanana.classList.add('gojira');
    divBanana.style.backgroundColor = '#000000';
    divBanana.style.height = '5%';
    divBanana.style.left = '37%';
    divBanana.style.position = 'absolute';
    divBanana.style.top = '85%';
    divBanana.style.width = '26%';
    divFrame.appendChild(divBanana);
    //
    // carrot message
    divCarrotTitle = document.createElement('div');
    divCarrotTitle.id = "divMessageCarrot_".concat(squareData.sysId);
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
    divCarrot = document.createElement('div');
    divCarrot.id = "divCarrot_".concat(squareData.sysId);
    divCarrot.classList.add('gojira');
    divCarrot.style.backgroundColor = '#000000';
    divCarrot.style.height = '5%';
    divCarrot.style.left = '69%';
    divCarrot.style.position = 'absolute';
    divCarrot.style.top = '85%';
    divCarrot.style.width = '26%';
    divFrame.appendChild(divCarrot);
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
    var divApple = null;
    var divAppleHeight = 0;
    var divAppleTop = 0;
    //
    var divBanana = null;
    var divBananaHeight = 0;
    var divBananaTop = 0;
    //
    var divCarrot = null;
    var divCarrotHeight = 0;
    var divCarrotTop = 0;
    //
    var targetColor = '';
    //
    divFrame = document.getElementById("divFrame_".concat(sysId));
    if (divFrame !== null) {
        //
        divApple = document.getElementById("divApple_".concat(sysId));
        if (divApple !== null) {
            // default big blue bar means there was a null
            divAppleHeight = 70;
            divAppleTop = 20;
            targetColor = 'blue';
            if (appleFloat !== null) {
                // calculate size and color
                divAppleHeight = Math.ceil(70 * appleFloat);
                divAppleTop = 90 - divAppleHeight;
                targetColor = calculateColor(appleFloat);
            }
            divApple.style.backgroundColor = targetColor;
            divApple.style.height = "".concat(divAppleHeight, "%");
            divApple.style.top = "".concat(divAppleTop, "%");
        }
        //
        divBanana = document.getElementById("divBanana_".concat(sysId));
        if (divBanana !== null) {
            // default big blue bar means there was a null
            divBananaHeight = 70;
            divBananaTop = 20;
            targetColor = 'blue';
            if (bananaFloat !== null) {
                // calculate size and color
                divBananaHeight = Math.ceil(70 * bananaFloat);
                divBananaTop = 90 - divBananaHeight;
                targetColor = calculateColor(bananaFloat);
            }
            divBanana.style.backgroundColor = targetColor;
            divBanana.style.height = "".concat(divBananaHeight, "%");
            divBanana.style.top = "".concat(divBananaTop, "%");
        }
        //
        divCarrot = document.getElementById("divCarrot_".concat(sysId));
        if (divCarrot !== null) {
            // default big blue bar means there was a null
            divCarrotHeight = 70;
            divCarrotTop = 20;
            targetColor = 'blue';
            if (carrotFloat !== null) {
                // calculate size and color
                divCarrotHeight = Math.ceil(70 * carrotFloat);
                divCarrotTop = 90 - divCarrotHeight;
                targetColor = calculateColor(carrotFloat);
            }
        }
        divCarrot.style.backgroundColor = targetColor;
        divCarrot.style.height = "".concat(divCarrotHeight, "%");
        divCarrot.style.top = "".concat(divCarrotTop, "%");
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
