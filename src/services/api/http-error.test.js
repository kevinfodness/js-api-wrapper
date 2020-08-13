import httpError from './http-error';

test('It should use the default for data.', () => {
  expect(httpError('Test Message')).toEqual({
    data: {},
    message: 'Test Message',
  });
});

test('It should use the provided data object.', () => {
  expect(httpError('Test Message', { code: 404 })).toEqual({
    data: {
      code: 404,
    },
    message: 'Test Message',
  });
});
