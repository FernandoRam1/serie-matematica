export class SerieClass {
  private _resultFibo: Array<any>;
  private _resultPrimes: Array<any>;

  private fibonacciSerie(num: number) {
    this._resultFibo = [0, 1];
    for (let i = 2; i < num + 1; i++) {
      this._resultFibo[i] = this._resultFibo[i - 1] + this._resultFibo[i - 2];
    }
    return num === 0
      ? this._resultFibo[0]
      : num === 1
      ? this._resultFibo[1]
      : this._resultFibo[this._resultFibo.length - 1];
  }

  private triangularNumber(num: number) {
    return (num * (num + 1)) / 2;
  }

  private primeNumbers(num: number) {
    this._resultPrimes = [];
    for (let i = 2; i < num + 1; i++) {
      if (this._prime(i)) {
        this._resultPrimes.push(i);
      }
    }
    return this._resultPrimes[this._resultPrimes.length - 1];
  }

  private _prime(num: number) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }

  public calculateSerie(n: number) {
    /* console.log('Result Fibo', this.fibonacciSerie(n));
    console.log('Result Triangular', this.triangularNumber(n));
    console.log('Result Primo', this.primeNumbers(n));*/
    return n <= 1
      ? 'No se puede calcular el número primo de ' +
          n +
          '. Intenta con otro número, por favor.'
      : (this.triangularNumber(n) * this.primeNumbers(n)) /
          this.fibonacciSerie(n);
  }
}
