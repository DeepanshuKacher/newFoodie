import { AxiosError, AxiosRequestConfig } from "axios";
import { axios, ControllerURLS } from "./axios";
import { concatString } from "../functions";

export const axiosPostFunction = async ({
  parentUrl,
  thenFunction,
  childUrl = "",
  data,
  config,
  loader = false,
}: {
  parentUrl: ControllerURLS;
  thenFunction?: any;
  childUrl?: string;
  data: any;
  config?: AxiosRequestConfig<any>;
  loader?: boolean;
}) => {
  // if (loader) store.dispatch(actionTypes.updateLoaderState(true));
  return await axios
    .post(concatString(parentUrl, childUrl), data, config)
    .then((response) => {
      // if (constants.IS_DEVELOPMENT) console.log({ response });
      if (thenFunction) {
        thenFunction(response.data);
      } else return response.data;
    })
    .catch((error: AxiosError) => {
      alert("Error " + error.code);
      console.log({ error });
    });
  // .finally(() => {
  //   if (loader) store.dispatch(actionTypes.updateLoaderState(false));
  // });
};
