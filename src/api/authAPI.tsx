import axios, { AxiosResponse } from "axios";

const authURL: string = `http://localhost:3000`;

export const registerAuthAPI = async (data: any) => {
  try {
    return await axios
      .post(`${authURL}/api/create-auth`, data)
      .then((res: AxiosResponse<any, any>) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const verifiedAuthAPI = async (token: string) => {
  try {
    return await axios
      .get(`${authURL}/api/${token}/verify-auth`)
      .then((res: AxiosResponse<any, any>) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const signInAuthAPI = async (data: any) => {
  try {
    return await axios
      .post(`${authURL}/api/sign-in-auth`, data)
      .then((res: AxiosResponse<any, any>) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const readOneUser = async (authID: string) => {
  try {
    return await axios
      .get(`${authURL}/${authID}/view-one-auth`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};
