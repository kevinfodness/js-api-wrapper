import request from './request';

// TODO: Mock API response.

describe('request', () => {
  it('Should make a request to the API.', () => {
    expect.assertions(1);
    return request('/wp/v2/posts', 'GET')
      .then((data) => expect(data.length).toEqual(10));
  });

  // TODO: Test error case.
});
