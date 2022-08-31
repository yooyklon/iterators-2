import ErrorRepository from '../js/Classes/ErrorRepository';

describe('test ErrorRepository Class', () => {
  test('return error description', () => {
    const repositoryError = new ErrorRepository();

    expect(repositoryError.translate(404)).toBe('Запрашиваемый ресурс не найден');
  });

  test('returning a description of an unknown error', () => {
    const repositoryError = new ErrorRepository();

    expect(repositoryError.translate(400)).toBe('Unknown error');
  });
});
