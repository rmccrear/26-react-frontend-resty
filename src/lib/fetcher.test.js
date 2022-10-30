import Fetcher from './fetcher';

const testUrls = {
  'GET_INDEX': 'https://my.api/api/v1/pets',
  'GET_404': 'https://my.api/api/v1000/pets',
  'GET': 'https://my.api/api/v1/pets/1',
  'POST': 'https://my.api/api/v1/pets/new',
  'PUT': 'https://my.api/api/v1/pets/1',
  'DELETE': 'https://my.api/api/v1/pets/1',
}

describe('Fetcher', () => {

  test('should get a url', async () => {
    const fetcher = new Fetcher();
    const result = await fetcher.get('/user');
    expect(result.body).toEqual({username: 'user01'});
    expect(result.status).toBe(200);
  });

  test('should get index url', async () => {
    const fetcher = new Fetcher();
    const result = await fetcher.get(testUrls.GET_INDEX);
    expect(result.status).toBe(200);
    expect(result.body.length).toBe(3);
    expect(result.body).toEqual(expect.arrayContaining([expect.objectContaining({name: "Fluffy"})]));
  })

  test('should get 404 url', async () => {
    const fetcher = new Fetcher();
    const result = await fetcher.get(testUrls.GET_404);
    expect(result.status).toBe(404);
  })

  test('should post to url', async () => {
    const fetcher = new Fetcher();
    const result = await fetcher.post(testUrls.POST, {method: 'POST', body: JSON.stringify({name: 'Rex'})});
    expect(result.status).toBe(201);
    expect(result.body).toEqual(expect.objectContaining({name: "Rex"}));
  })

  test('should put to url', async () => {
    const fetcher = new Fetcher();
    const result = await fetcher.put(testUrls.PUT, {method: 'PUT', body: JSON.stringify({name: 'Rex'})});
    expect(result.status).toBe(200);
    expect(result.body).toEqual(expect.objectContaining({name: "Rex"}));
  })

  test('should delete', async () => {
    const fetcher = new Fetcher();
    const result = await fetcher.delete(testUrls.DELETE);
    expect(result.status).toBe(204);
  })

});