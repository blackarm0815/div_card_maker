interface SquareData {
  border: number;
  squareSide: number;
  statNetwork: number | null;
  statPower: number | null;
  statSpace: number | null;
  sysId: string;
}
//
const drawSquareDefault = (
  squareData: SquareData,
) => {
  //
  let divBlack: HTMLDivElement | null = null;
  let divFrame: HTMLDivElement | null = null;
  let divNetwork: HTMLDivElement | null = null;
  let divNetworkHeight = 0;
  let divNetworkTop = 0;
  let divPower: HTMLDivElement | null = null;
  let divPowerHeight = 0;
  let divPowerTop = 0;
  let divSpace: HTMLDivElement | null = null;
  let divSpaceHeight = 0;
  let divSpaceTop = 0;
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
    divNetwork.id = `divNetwork_${squareData.sysId}`;
    divNetwork.style.backgroundColor = 'blue';
    divNetwork.style.height = `${divNetworkHeight}%`;
    divNetwork.style.left = '5%';
    divNetwork.style.position = 'absolute';
    divNetwork.style.top = `${divNetworkTop}%`;
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
    divPower.id = `divPower_${squareData.sysId}`;
    divPower.style.backgroundColor = 'green';
    divPower.style.height = `${divPowerHeight}%`;
    divPower.style.left = '37%';
    divPower.style.position = 'absolute';
    divPower.style.top = `${divPowerTop}%`;
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
    divSpace.id = `divSpace_${squareData.sysId}`;
    divSpace.style.backgroundColor = 'red';
    divSpace.style.height = `${divSpaceHeight}%`;
    divSpace.style.left = '69%';
    divSpace.style.position = 'absolute';
    divSpace.style.top = `${divSpaceTop}%`;
    divSpace.style.width = '26%';
    divFrame.appendChild(divSpace);
  }
  return divFrame;
};
//
const main = () => {
  //
  const border = 100;
  const squareSide = 1800;
  //
  const spongebob = document.getElementById('spongebob');
  if (spongebob !== null) {
    //
    // generate the square report
    const report = drawSquareDefault({
      border,
      statNetwork: 0.8,
      statPower: 0.6,
      statSpace: 0.4,
      squareSide,
      sysId: 'abcdefghijk',
    });
    //
    // adjust the square report to work with borders
    report.style.left = `${border}px`;
    report.style.top = `${border}px`;
    //
    // attach the report to the webpage
    spongebob.appendChild(report);
  }
};
//
main();
