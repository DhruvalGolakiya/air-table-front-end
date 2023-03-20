import axios from "axios";

const server_url = "https://jsonplaceholder.typicode.com/todos";

const request = async (
  method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT",
  // url: string,
  data: any = []
) => {
  let token: any;
  // if (typeof window !== "undefined") {
  //   token = localStorage.getItem("key");
  //   console.log(token);
  // }
  return await axios.request({
    method: method,
    url: "https://jsonplaceholder.typicode.com/todos",
    data: data,
  });
};

const get = async () => {
  const result = await request("GET");
  return result;
};

// const post = async (
//   url: string,
//   query: object,
//   headers: object,
//   data: object = {}
// ) => {
//   const result = await request("POST", url, query, headers, data);
//   return result;
// };

// const patch = async (
//   url: string,
//   query: object,
//   headers: object,
//   data: object = {}
// ) => {
//   const result = await request("PATCH", url, query, headers, data);
//   return result;
// };
// const put = async (
//   url: string,
//   query: object,
//   headers: object,
//   data: object = {}
// ) => {
//   const result = await request("PUT", url, query, headers, data);
//   return result;
// };

// const _delete = async (url: string, query: object, headers: object) => {
//   const result = await request("DELETE", url, query, headers, {});
//   return result;
// };

export { get };
