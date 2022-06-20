const BASE_URL =
  "http://127.1:7001";

const http = {
  get(url, params) {
    // url  ->  /area/list
    // params  ->  {a: 3, b: 4}

    // /area/list?a=3&b=4

    if (params) {
      const arr = Object.keys(params); // [a, b]
      const arr2 = arr.map((item) => {
        return item + "=" + params[item];
      }); // ["a=3", "b=4"]
      const str = arr2.join("&"); // "a=3&b=4"
      url = url + "?" + str;
    }

    return fetch(BASE_URL + url)
      .then((response) => response.json())
      .then((res) => {
        return res;
      });
  },
  post(url, data) {
    return fetch(BASE_URL + url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        return res;
      });
  },
};

export default http;
