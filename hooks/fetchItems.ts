import { useEffect, useState } from "react";
import { axiosGetFunction } from "../useFullItems/axios";
import { ControllerURLS } from "../useFullItems/axios/axios";

export const fetchItem = <T>(parentUrl: ControllerURLS, childUrl?: string) => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    axiosGetFunction({
      parentUrl,
      childUrl,
      thenFunction: setData,
    });
  }, []);

  return data;
};
