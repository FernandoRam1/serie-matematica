import { SerieClass } from './serie';

const serieClass = new SerieClass();
describe('SerieClass', () => {
  it('should create', () => {
    expect(serieClass).toBeTruthy();
  });

  it('should calculate serie with 0', () => {
    expect(serieClass.calculateSerie(0)).toBe(
      'No se puede calcular el número primo de 0. Intenta con otro número, por favor.'
    );
  });
  it('should calculate serie with 1', () => {
    expect(serieClass.calculateSerie(1)).toBe(
      'No se puede calcular el número primo de 1. Intenta con otro número, por favor.'
    );
  });

  it('should calculate serie with number greater than 1', () => {
    expect(serieClass.calculateSerie(3)).toBe(9);
  });
});
