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
  fontSize = Math.ceil(squareData.squareSide * 0.1);
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
  // i am using a black square to demonstrate the info placement more clearly
  // this does not have to be a style rule for all overlays
  divBlack = document.createElement('div');
  divBlack.id = `divBlack_${squareData.sysId}`;
  divBlack.className = 'blackBackground';
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
  divCardTitle.className = 'whiteText';
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
  divBananaTitle.className = 'whiteText';
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
  divCarrotTitle.className = 'whiteText';
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
  appleFloat: number,
  bananaFloat: number,
  carrotFloat: number,
) => {
  //
  let divFrame: HTMLDivElement | null = null;
  let divAppleHeight = 0;
  let divAppleTop = 0;
  let divBananaHeight = 0;
  let divBananaTop = 0;
  let divCarrotHeight = 0;
  let divCarrotTop = 0;
  let divTarget: HTMLDivElement | null = null;
  //
  divFrame = <HTMLDivElement>document.getElementById(`divFrame_${sysId}`);
  if (divFrame !== null) {
    //
    divAppleHeight = Math.ceil(70 * appleFloat);
    divAppleTop = 90 - divAppleHeight;
    divTarget = <HTMLDivElement>document.getElementById(`divApple_${sysId}`);
    divTarget.style.height = `${divAppleHeight}%`;
    divTarget.style.top = `${divAppleTop}%`;
    divTarget.style.backgroundColor = calculateColor(appleFloat);
    //
    divBananaHeight = Math.ceil(70 * bananaFloat);
    divBananaTop = 90 - divBananaHeight;
    divTarget = <HTMLDivElement>document.getElementById(`divBanana_${sysId}`);
    divTarget.style.height = `${divBananaHeight}%`;
    divTarget.style.top = `${divBananaTop}%`;
    divTarget.style.backgroundColor = calculateColor(bananaFloat);
    //
    divCarrotHeight = Math.ceil(70 * carrotFloat);
    divCarrotTop = 90 - divCarrotHeight;
    divTarget = <HTMLDivElement>document.getElementById(`divCarrot_${sysId}`);
    divTarget.style.height = `${divCarrotHeight}%`;
    divTarget.style.top = `${divCarrotTop}%`;
    divTarget.style.backgroundColor = calculateColor(carrotFloat);
  }
};
const actionRandomize = () => {
  //
  const statApple = Math.random();
  const statBanana = Math.random();
  const statCarrot = Math.random();
  //
  updateStats('abcdefg', statApple, statBanana, statCarrot);
  updateStats('hijklmnop', statApple, statBanana, statCarrot);
  console.log('beep');
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
      sysId: 'abcdefg',
    });
    reportBig.style.left = '100px';
    reportBig.style.top = '100px';
    divMain.appendChild(reportBig);
    //
    // generate the square report (small)
    reportSmall = drawSquareDefault({
      cardName: 'div_card_maker',
      squareSide: 150,
      sysId: 'hijklmnop',
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
