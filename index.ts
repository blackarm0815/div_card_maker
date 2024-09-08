interface SquareData {
  border: number;
  cardName: string;
  squareSide: number;
  statApple: number | null;
  statBanana: number | null;
  statCarrot: number | null;
  sysId: string;
}
//
const drawSquareDefault = (
  squareData: SquareData,
) => {
  //
  const calculateCssClass = (
    floatingPoint: number,
  ) => {
    if (floatingPoint < 0.25) {
      return 'spectrumA';
    }
    if (floatingPoint < 0.5) {
      return 'spectrumB';
    }
    if (floatingPoint < 0.75) {
      return 'spectrumC';
    }
    return 'spectrumD';
  };
  //
  let divBlack: HTMLDivElement | null = null;
  let divFrame: HTMLDivElement | null = null;
  let divApple: HTMLDivElement | null = null;
  let divAppleHeight = 0;
  let divAppleTop = 0;
  let divBanana: HTMLDivElement | null = null;
  let divBananaHeight = 0;
  let divBananaTop = 0;
  let divCardTitle: HTMLDivElement | null = null;
  let divCarrot: HTMLDivElement | null = null;
  let divCarrotHeight = 0;
  let divCarrotTop = 0;
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
  // if apple data exists, draw a bar
  if (squareData.statApple !== null) {
    //
    divAppleHeight = Math.ceil(75 * squareData.statApple);
    divAppleTop = 95 - divAppleHeight;
    //
    divApple = document.createElement('div');
    divApple.id = `divApple_${squareData.sysId}`;
    divApple.className = calculateCssClass(squareData.statApple);
    divApple.style.height = `${divAppleHeight}%`;
    divApple.style.left = '5%';
    divApple.style.position = 'absolute';
    divApple.style.top = `${divAppleTop}%`;
    divApple.style.width = '26%';
    divFrame.appendChild(divApple);
  }
  //
  // if banana data exists, draw a bar
  if (squareData.statBanana !== null) {
    //
    divBananaHeight = Math.ceil(75 * squareData.statBanana);
    divBananaTop = 95 - divBananaHeight;
    //
    divBanana = document.createElement('div');
    divBanana.id = `divBanana_${squareData.sysId}`;
    divBanana.className = calculateCssClass(squareData.statBanana);
    divBanana.style.height = `${divBananaHeight}%`;
    divBanana.style.left = '37%';
    divBanana.style.position = 'absolute';
    divBanana.style.top = `${divBananaTop}%`;
    divBanana.style.width = '26%';
    divFrame.appendChild(divBanana);
  }
  //
  // if carrot data exists, draw a bar
  if (squareData.statCarrot !== null) {
    //
    divCarrotHeight = Math.ceil(75 * squareData.statCarrot);
    divCarrotTop = 95 - divCarrotHeight;
    //
    divCarrot = document.createElement('div');
    divCarrot.id = `divCarrot_${squareData.sysId}`;
    divCarrot.className = calculateCssClass(squareData.statCarrot);
    divCarrot.style.height = `${divCarrotHeight}%`;
    divCarrot.style.left = '69%';
    divCarrot.style.position = 'absolute';
    divCarrot.style.top = `${divCarrotTop}%`;
    divCarrot.style.width = '26%';
    divFrame.appendChild(divCarrot);
  }
  return divFrame;
};
//
const main = () => {
  //
  const divHolder = document.getElementById('holder_abcdefg');
  if (divHolder !== null) {
    //
    // generate the square report
    const report = drawSquareDefault({
      border: 100,
      cardName: 'CARD0101',
      statApple: Math.random(),
      statBanana: Math.random(),
      statCarrot: Math.random(),
      squareSide: 1800,
      sysId: 'abcdefg',
    });
    //
    // give it a bit of space
    report.style.left = '100px';
    report.style.top = '100px';
    //
    // attach the report div to the DOM
    divHolder.appendChild(report);
  }
};
//
main();
