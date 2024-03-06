export function maskInput(event: Event, charMaskPositions: Map<number, string>) {
  const input = event.target as HTMLInputElement;
  const inputValue = input.value;
  input.value = maskInputAlgorithm(charMaskPositions, inputValue);
}

export function maskInputAlgorithm(charMaskPositions: Map<number, string>, inputValue: string): string {
  let inputMasked: string = inputValue;

  for(const maskPosition of charMaskPositions.keys()) {
    const charMask = charMaskPositions.get(maskPosition);
    if(charMask == undefined || inputValue.length - 1 < maskPosition) continue;

    if(inputValue[maskPosition] != charMask) {
      const inputValueArray = inputValue.split("");
      inputValueArray.splice(maskPosition, 0, charMask);
      inputMasked = inputValueArray.join("");
    }
  }

  return inputMasked;
}
