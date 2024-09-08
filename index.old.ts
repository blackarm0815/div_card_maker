interface Dimensions {
  calcBorder: number;
  calcHolderHeight: number;
  calcHolderWidth: number;
  calcSquareSide: number;
}
//
interface GivenData {
  divHolderId: string;
  statNetwork: number;
  statPower: number;
  statSpace: number;
}
//
const main = (
  givenData: GivenData,
) => {
  //
  const drawSquareDefault = (
    squareData: {
      border: number,
      squareSide: number,
      statNetwork: number,
      statPower: number,
      statSpace: number,
    },
  ) => {
    //
    let calcTop = 0;
    let calcHeight = 0;
    let divSquare: HTMLDivElement | null = null;
    let newDiv: HTMLDivElement;
    //
    //
    // the square div that contains everything and is returned at the end of the function
    divSquare = document.createElement('div');
    divSquare.style.position = 'absolute';
    divSquare.style.height = `${squareData.squareSide}px`;
    divSquare.style.left = `${squareData.border}px`;
    divSquare.style.width = `${squareData.squareSide}px`;
    divSquare.style.top = `${squareData.border}px`;
    //
    // black background
    newDiv = document.createElement('div');
    newDiv.style.backgroundColor = 'black';
    newDiv.style.height = '100%';
    newDiv.style.left = '0%';
    newDiv.style.position = 'absolute';
    newDiv.style.top = '0%';
    newDiv.style.width = '98%';
    divSquare.appendChild(newDiv);
    // column 1
    calcTop = 5 + (90 * (1.0 - givenData.statNetwork));
    calcHeight = 90 * givenData.statNetwork;
    newDiv = document.createElement('div');
    newDiv.classList.add('spectrumALight');
    newDiv.style.height = `${calcHeight}%`;
    newDiv.style.left = '5%';
    newDiv.style.position = 'absolute';
    newDiv.style.top = `${calcTop}%`;
    newDiv.style.width = '26%';
    divSquare.appendChild(newDiv);
    // column 2
    calcTop = 5 + (90 * (1.0 - givenData.statPower));
    calcHeight = 90 * givenData.statPower;
    newDiv = document.createElement('div');
    newDiv.classList.add('spectrumBLight');
    newDiv.style.height = `${calcHeight}%`;
    newDiv.style.left = '36%';
    newDiv.style.position = 'absolute';
    newDiv.style.top = `${calcTop}%`;
    newDiv.style.width = '26%';
    divSquare.appendChild(newDiv);
    // column 3
    calcTop = 5 + (90 * (1.0 - givenData.statSpace));
    calcHeight = 90 * givenData.statSpace;
    newDiv = document.createElement('div');
    newDiv.classList.add('spectrumCLight');
    newDiv.style.height = `${calcHeight}%`;
    newDiv.style.left = '67%';
    newDiv.style.position = 'absolute';
    newDiv.style.top = `${calcTop}%`;
    newDiv.style.width = '26%';
    divSquare.appendChild(newDiv);
    return divSquare;
  };
  const drawDivTheSizeOfTheHolder = (
    divHeight: number,
    divWidth: number,
  ) => {
    //
    let divColor: HTMLDivElement | null = null;
    //
    // this function makes a new div the same size as the holder div
    // it can be colored with a css class, use some logic for this
    // the created div is returned and attached
    divColor = document.createElement('div');
    divColor.className = 'shiny';
    divColor.style.height = `${divHeight}px`;
    divColor.style.left = '0px';
    divColor.style.position = 'absolute';
    divColor.style.width = `${divWidth}px`;
    divColor.style.top = '0px';
    return divColor;
  };
  const calculateDimensions = (
    divToDimensionFrom: HTMLDivElement,
  ) => {
    //
    let calcBorder = 10;
    let calcHolderHeight = 0;
    let calcHolderWidth = 0;
    let calcSquareSide = 1024;
    let holderShortest = 0;
    //
    //
    calcHolderHeight = divToDimensionFrom.offsetHeight;
    calcHolderWidth = divToDimensionFrom.offsetWidth;
    //
    holderShortest = calcHolderHeight;
    if (calcHolderWidth < calcHolderHeight) {
      holderShortest = calcHolderWidth;
    }
    //
    calcBorder = Math.ceil(holderShortest * 0.02);
    //
    calcSquareSide = holderShortest - (calcBorder * 2);
    return {
      calcBorder,
      calcHolderHeight,
      calcHolderWidth,
      calcSquareSide,
    };
  };
  const killHolderChildren = (
    divElementToClear: HTMLDivElement,
  ) => {
    while (divElementToClear.firstChild) {
      divElementToClear.removeChild(divElementToClear.firstChild);
    }
  };
  const doesHolderExist = (
    kaiju: GivenData,
  ) => {
    //
    let border = 0;
    let dimensions: Dimensions | null = null;
    let divElementHolder: HTMLDivElement | null = null;
    let holderHeight = 0;
    let holderWidth = 0;
    let squareSide = 0;
    let tempHolderId = '';
    //
    tempHolderId = kaiju.divHolderId;
    // search for the "holder" div with the supplied
    divElementHolder = <HTMLDivElement>document.getElementById(tempHolderId);
    //
    // proceed if it existsspooky
    if (divElementHolder !== null) {
      //
      // remove any previous child elements on the holder
      killHolderChildren(divElementHolder);
      //
      // generate dimensions for the square report
      dimensions = calculateDimensions(divElementHolder);
      //
      // extract dimensions from report return
      border = dimensions.calcBorder;
      holderHeight = dimensions.calcHolderHeight;
      holderWidth = dimensions.calcHolderWidth;
      squareSide = dimensions.calcSquareSide;
      //
      // create colored background for the "card" and make it the child of the "holder"
      divElementHolder.appendChild(drawDivTheSizeOfTheHolder(
        holderHeight,
        holderWidth,
      ));
      //
      // create the square report div for the "card" and make it the child of the "holder"
      divElementHolder.appendChild(drawSquareDefault({
        border,
        statNetwork: kaiju.statNetwork,
        statPower: kaiju.statPower,
        statSpace: kaiju.statSpace,
        squareSide,
      }));
    }
  };
  //
  doesHolderExist(givenData);
};
// remove this line and following
main({
  divHolderId: 'test',
  statNetwork: 0.8,
  statPower: 0.3,
  statSpace: 0.2,
});
