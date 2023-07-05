import { plainToInstance } from 'class-transformer';

class SomeClass {
  public aNumber: number;
  public aString: string;
}

function main() {
  const partialA = plainToInstance(SomeClass, { aNumber: 1 });
  const partialB = plainToInstance(SomeClass, { aString: 'abc' });
  console.log({ ...partialA, ...partialB });
}

main();
