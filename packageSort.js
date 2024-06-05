export function sort(width, height, length, mass) {
    if (
      width === undefined ||
      height === undefined ||
      length === undefined ||
      mass === undefined
    ) {
      // make sure we have all values, ideally this would be a different error
      throw new Error("Missing required parameter");
    }
    let isBulky = false;
    let isHeavy = false;
  
    const volume = width * height * length;
  
    if (volume >= 1000000 || width >= 150 || height >= 150 || length >= 150) {
      // total volume is greater than or equal to 1,000,000 cubic cm
      // or width/height/length is greater than or equal to 150 cm
      isBulky = true;
    }
  
    if (mass >= 20) {
      // mass is greater than or equal to 20 kg
      isHeavy = true;
    }
  
    if (!isBulky && !isHeavy) {
      return "STANDARD";
    } else if (isBulky && isHeavy) {
        return "REJECTED";
    } else if (isBulky || isHeavy) {
      return "SPECIAL";
    } 
  }
  