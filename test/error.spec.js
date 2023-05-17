const { InsufficientAccessError } = require('../app/errors');
const Mock = require('../app/errors/ApplicationError');

describe('class Aplication Error', () => {
  const mockData = new Mock();
  const errorData = mockData.toJSON();
  test('success toJson Method', () => {
    expect(errorData).toHaveProperty('error');
    expect(errorData).toHaveProperty('error.name');
    expect(errorData).toHaveProperty('error.message');
    expect(errorData).toHaveProperty('error.details');
  });

  test('success get details method', () => {
    expect(mockData.details).toEqual({});
  });

  test('fail toJson Method', () => {
    expect(errorData).not.toHaveProperty('errors');
    expect(errorData).not.toHaveProperty('errors.name');
    expect(errorData).not.toHaveProperty('errors.message');
    expect(errorData).not.toHaveProperty('errors.details');
  });

  test('success get details method', () => {
    expect(mockData.details).not.toEqual({ data: '123' });
  });
});

describe('AccessError', () => {
  const mockError = new InsufficientAccessError('siswa');
  const message = {
    role: 'siswa',
    reason: 'siswa is not allowed to perform this operation.',
  };
  test ('detail pass',()=>{
    expect(mockError.details).toEqual(message);
    expect(mockError.details).toHaveProperty('role');
    expect(mockError.details).toHaveProperty('reason');
  });

  test ('detail error',()=>{
    expect(mockError.details).not.toHaveProperty('message');
  });
});
