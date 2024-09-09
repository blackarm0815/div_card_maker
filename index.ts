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
  let divAppleBar: HTMLDivElement | null = null;
  let divAppleTitle: HTMLDivElement | null = null;
  let divBananaTitle: HTMLDivElement | null = null;
  let divBananaBar: HTMLDivElement | null = null;
  let divBlack: HTMLDivElement | null = null;
  let divCardTitle: HTMLDivElement | null = null;
  let divCarrotBar: HTMLDivElement | null = null;
  let divCarrotTitle: HTMLDivElement | null = null;
  let divFrame: HTMLDivElement | null = null;
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
  divCardTitle.id = `divCardTitle_${squareData.sysId}`;
  divCardTitle.style.color = 'white';
  divCardTitle.style.left = '5%';
  divCardTitle.style.position = 'absolute';
  divCardTitle.style.top = '2%';
  divCardTitle.style.fontSize = `${fontSize}px`;
  divCardTitle.style.fontFamily = 'monospace';
  divCardTitle.innerText = squareData.cardName;
  divFrame.appendChild(divCardTitle);
  //
  // apple title
  divAppleTitle = document.createElement('div');
  divAppleTitle.id = `divAppleTitle_${squareData.sysId}`;
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
  divAppleBar = document.createElement('div');
  divAppleBar.id = `divAppleBar_${squareData.sysId}`;
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
  divBananaTitle.id = `divBananaTitle_${squareData.sysId}`;
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
  divBananaBar = document.createElement('div');
  divBananaBar.id = `divBananaBar_${squareData.sysId}`;
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
  divCarrotTitle.id = `divCarrotTitle_${squareData.sysId}`;
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
  divCarrotBar = document.createElement('div');
  divCarrotBar.id = `divCarrotBar_${squareData.sysId}`;
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
  let divAppleBar: HTMLDivElement | null = null;
  let divAppleBarHeight = 0;
  let divAppleBarTop = 0;
  //
  let divBananaBar: HTMLDivElement | null = null;
  let divBananaBarHeight = 0;
  let divBananaBarTop = 0;
  //
  let divCarrotBar: HTMLDivElement | null = null;
  let divCarrotBarHeight = 0;
  let divCarrotBarTop = 0;
  //
  let targetColor = '';
  //
  divFrame = <HTMLDivElement>document.getElementById(`divFrame_${sysId}`);
  if (divFrame !== null) {
    //
    divAppleBar = <HTMLDivElement>document.getElementById(`divAppleBar_${sysId}`);
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
      divAppleBar.style.height = `${divAppleBarHeight}%`;
      divAppleBar.style.top = `${divAppleBarTop}%`;
    }
    //
    divBananaBar = <HTMLDivElement>document.getElementById(`divBananaBar_${sysId}`);
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
      divBananaBar.style.height = `${divBananaBarHeight}%`;
      divBananaBar.style.top = `${divBananaBarTop}%`;
    }
    //
    divCarrotBar = <HTMLDivElement>document.getElementById(`divCarrotBar_${sysId}`);
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
      divCarrotBar.style.height = `${divCarrotBarHeight}%`;
      divCarrotBar.style.top = `${divCarrotBarTop}%`;
    }
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
