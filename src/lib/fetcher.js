
const sendRequest = async (url, opts) => {
    let result;
    try {
      const response = await fetch(url, opts);
      result = processResponse(response);
    } catch (e) {
      result = {
        status: e.status,
        headers: {},
        body: {},
        error: e
      }
    }
    return result;
}

const processResponse = async (response) => {
  let result;
      console.log(response);
      let body;
      try{
        body = await response.json();
      } catch {
        body = undefined;
      }
      const headers = Array.from(await response.headers?.entries() || []);
      const status = response.status;
      console.log(response);
      result = {
        status,
        headers,
        body
      }
    return result;
}

class Fetcher {

  async get(url) {
    const result = sendRequest(url);
    return result;
  }

  async post(url, opts) {
    opts = {...opts, method: 'POST'};
    const response = await fetch(url, opts);
    const result = processResponse(response);
    return result;
  }

  async put(url, opts) {
    opts = {...opts, method: 'PUT'};
    const response = await fetch(url, opts);
    const result = processResponse(response);
    return result;
  }

  async delete(url, opts) {
    opts = {...opts, method: 'DELETE'};
    const response = await fetch(url, opts);
    const result = processResponse(response);
    return result;
  }

}

export default Fetcher;