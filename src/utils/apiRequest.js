import axios from "axios";

const baseUrl = process.env.REACT_API_BASE_URL || "http://localhost:8080";

const apiRequest = async (url, method = "GET", headers, body) => {
  try {
    const queryData = {
      url: baseUrl + url,
      method,
    };
    if (body) queryData.data = body;
    if (headers) queryData.headers = headers;

    const response = await axios(queryData);
    return response ? response.data : "";
  } catch (error) {
    return { error: error?.message || "Internal Server error" };
  }
};
export default apiRequest;
