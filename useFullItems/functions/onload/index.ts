import { fetchAndStoreJWT } from "./fetchAndStoreJWT";

export const onLoad = async (setLoaderFalse: () => void) => {
  try {
    await fetchAndStoreJWT();

    setLoaderFalse();
  } catch (error) {
    console.log({ "Initital Load Error": error });
    alert("Some Error Please reload the page");
  }
};
