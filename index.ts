interface SquareData {
  cardName: string;
  squareSide: number;
  sysId: string;
}
//
const drawSquareDefault = (
  squareData: SquareData,
) => {
  //
  let divBlack: HTMLDivElement | null = null;
  let divFrame: HTMLDivElement | null = null;
  let divApple: HTMLDivElement | null = null;
  let divAppleTitle: HTMLDivElement | null = null;
  let divBanana: HTMLDivElement | null = null;
  let divBananaTitle: HTMLDivElement | null = null;
  let divCardTitle: HTMLDivElement | null = null;
  let divCarrot: HTMLDivElement | null = null;
  let divCarrotTitle: HTMLDivElement | null = null;
  let fontSize = 0;
  //
  // calculate font size
  fontSize = Math.ceil(squareData.squareSide * 0.07);
  //
  //
  // the square div that contains everything and is returned at the end of the function
  // do not change this section in any way
  divFrame = document.createElement('div');
  divFrame.id = `divFrame_${squareData.sysId}`;
  divFrame.style.height = `${squareData.squareSide}px`;
  divFrame.style.position = 'absolute';
  divFrame.style.width = `${squareData.squareSide}px`;
  //
  // black background
  divBlack = document.createElement('div');
  divBlack.id = `divBlack_${squareData.sysId}`;
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
  divCardTitle.id = `divTitle_${squareData.sysId}`;
  divCardTitle.style.color = 'white';
  divCardTitle.style.left = '5%';
  divCardTitle.style.position = 'absolute';
  divCardTitle.style.top = '2%';
  divCardTitle.style.fontSize = `${fontSize}px`;
  divCardTitle.style.fontFamily = 'monospace';
  divCardTitle.innerText = squareData.cardName;
  divFrame.appendChild(divCardTitle);
  //
  // apple message
  divAppleTitle = document.createElement('div');
  divAppleTitle.id = `divMessageApple_${squareData.sysId}`;
  divAppleTitle.style.color = 'white';
  divAppleTitle.className = 'whiteText';
  divAppleTitle.style.left = '5%';
  divAppleTitle.style.position = 'absolute';
  divAppleTitle.style.top = '92%';
  divAppleTitle.style.fontSize = `${Math.ceil(squareData.squareSide * 0.03)}px`;
  divAppleTitle.style.fontFamily = 'monospace';
  divAppleTitle.innerText = 'apple';
  divFrame.appendChild(divAppleTitle);
  //
  // apple bar
  divApple = document.createElement('div');
  divApple.id = `divApple_${squareData.sysId}`;
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
  divBananaTitle.id = `divMessageBanana_${squareData.sysId}`;
  divBananaTitle.style.color = 'white';
  divBananaTitle.style.left = '37%';
  divBananaTitle.style.position = 'absolute';
  divBananaTitle.style.top = '92%';
  divBananaTitle.style.fontSize = `${Math.ceil(squareData.squareSide * 0.03)}px`;
  divBananaTitle.style.fontFamily = 'monospace';
  divBananaTitle.innerText = 'banana';
  divFrame.appendChild(divBananaTitle);
  //
  // banana bar
  divBanana = document.createElement('div');
  divBanana.id = `divBanana_${squareData.sysId}`;
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
  divCarrotTitle.id = `divMessageCarrot_${squareData.sysId}`;
  divCarrotTitle.style.color = 'white';
  divCarrotTitle.style.left = '69%';
  divCarrotTitle.style.position = 'absolute';
  divCarrotTitle.style.top = '92%';
  divCarrotTitle.style.fontSize = `${Math.ceil(squareData.squareSide * 0.03)}px`;
  divCarrotTitle.style.fontFamily = 'monospace';
  divCarrotTitle.innerText = 'carrot';
  divFrame.appendChild(divCarrotTitle);
  //
  // carrot bar
  divCarrot = document.createElement('div');
  divCarrot.id = `divCarrot_${squareData.sysId}`;
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
const calculateColor = (
  floatingPoint: number,
) => {
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
const updateStats = (
  sysId: string,
  appleFloat: number | null,
  bananaFloat: number | null,
  carrotFloat: number | null,
) => {
  //
  let divFrame: HTMLDivElement | null = null;
  //
  let divApple: HTMLDivElement | null = null;
  let divAppleHeight = 0;
  let divAppleTop = 0;
  //
  let divBanana: HTMLDivElement | null = null;
  let divBananaHeight = 0;
  let divBananaTop = 0;
  //
  let divCarrot: HTMLDivElement | null = null;
  let divCarrotHeight = 0;
  let divCarrotTop = 0;
  //
  let targetColor = '';
  //
  divFrame = <HTMLDivElement>document.getElementById(`divFrame_${sysId}`);
  if (divFrame !== null) {
    //
    divApple = <HTMLDivElement>document.getElementById(`divApple_${sysId}`);
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
      divApple.style.height = `${divAppleHeight}%`;
      divApple.style.top = `${divAppleTop}%`;
    }
    //
    divBanana = <HTMLDivElement>document.getElementById(`divBanana_${sysId}`);
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
      divBanana.style.height = `${divBananaHeight}%`;
      divBanana.style.top = `${divBananaTop}%`;
    }
    //
    divCarrot = <HTMLDivElement>document.getElementById(`divCarrot_${sysId}`);
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
    divCarrot.style.height = `${divCarrotHeight}%`;
    divCarrot.style.top = `${divCarrotTop}%`;
  }
};
const createNumberNull = () => {
  if (Math.random() > 0.90) {
    return null;
  }
  return Math.random();
};
const actionRandomize = () => {
  //
  const statApple = createNumberNull();
  const statBanana = createNumberNull();
  const statCarrot = createNumberNull();
  //
  updateStats('abcdefgh', statApple, statBanana, statCarrot);
  updateStats('ijklmnop', statApple, statBanana, statCarrot);
};
const addEventToRandomize = () => {
  //
  let divRandomize: HTMLDivElement | null = null;
  //
  divRandomize = <HTMLDivElement>document.getElementById('randomize');
  if (divRandomize !== null) {
    divRandomize.addEventListener('click', actionRandomize);
  }
};
const buildSquaresEmpty = () => {
  let divMain: HTMLDivElement | null = null;
  let reportBig: HTMLDivElement | null = null;
  let reportSmall: HTMLDivElement | null = null;
  //
  divMain = <HTMLDivElement>document.getElementById('divMain');
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
const main = () => {
  buildSquaresEmpty();
  addEventToRandomize();
};
//
main();
