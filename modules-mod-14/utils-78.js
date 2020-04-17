const last = 'Kelly';
// you can use variables inside what is being exported i.e. last
//  it is scoped to utils
const middle = 'Pat';

export function returnHi(name) {
  return `Hi ${name} ${last}`;
}

// named exports - have as many as needed
export { last, middle };

