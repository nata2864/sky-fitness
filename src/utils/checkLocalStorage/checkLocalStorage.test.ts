
import {checkLocalStorage} from "./checkLocalStorage"


describe('checkLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('возвращает null, если userInfo отсутствует', () => {
    expect(checkLocalStorage()).toBeNull();
  });

  it('возвращает объект, если userInfo корректный', () => {
    localStorage.setItem('userInfo', JSON.stringify({ name: 'Alice', token: 'abc' }));
    expect(checkLocalStorage()).toEqual({ name: 'Alice', token: 'abc' });
  });

  it('возвращает null и вызывает warn, если структура некорректная', () => {
    localStorage.setItem('userInfo', JSON.stringify({ foo: 'bar' }));
    expect(checkLocalStorage()).toBeNull();
    expect(console.warn).toHaveBeenCalled();
  });

  it('возвращает null и вызывает error, если JSON битый', () => {
    localStorage.setItem('userInfo', '{ broken json ');
    expect(checkLocalStorage()).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });
});