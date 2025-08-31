import {calculateProgress} from './calculateProgress'

// utils.test.ts


describe('calculateProgress', () => {
  it('должна корректно вычислять процент выполнения', () => {
    expect(calculateProgress(5, 10)).toBe(50);    // половина выполнено
    expect(calculateProgress(3, 10)).toBe(30);    // 3 из 10
    expect(calculateProgress(10, 10)).toBe(100);  // полностью выполнено
    expect(calculateProgress(0, 10)).toBe(0);     // ничего не сделано
  });

  it('не должна превышать 100%', () => {
    expect(calculateProgress(15, 10)).toBe(100);  // больше максимума
  });

  it('должна корректно работать с total = 0', () => {
    expect(calculateProgress(5, 0)).toBe(0);      // делить на 0 нельзя
    expect(calculateProgress(0, 0)).toBe(0);
  });

  it('должна округлять до целого числа', () => {
    expect(calculateProgress(7, 12)).toBe(58);    // 7/12 ≈ 58.33 → 58%
    expect(calculateProgress(2, 3)).toBe(67);     // 2/3 ≈ 66.66 → 67%
  });
});
