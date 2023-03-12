import { fetchCartOrderAndStore } from "./cartOrder";
import { fetchOrder } from "./order";

interface Props {
  sessionUUID: string;
}

export const itemsFetch = async (props: Props) => {
  const { sessionUUID } = props;
  const fetchOrderPromis = fetchOrder(sessionUUID);
  const fetchCartOrderPromis = fetchCartOrderAndStore(sessionUUID);

  await Promise.all([fetchOrderPromis, fetchCartOrderPromis]);
  try {
  } catch (error) {
    alert("Some error please reload");
    console.log(error);
  }
};
