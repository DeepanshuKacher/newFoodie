export const AddOnsSpan = ({
  textValue = "Extra-chilli",
}: {
  textValue?: string;
}) => (
  <span className="border bg-white p-1 inline-block border-white rounded-md">
    {textValue} {"₹40"}
  </span>
);

export const OrderDiv = () => (
  <div>
    <h1 className="text-2xl text-center">Chicken Biryani</h1>
    <div
      onClick={() => alert("clicked")}
      className="border flex flex-row space-x-1 px-1"
    >
      <div className="border border-red-500 w-1/2">
        {/* py-2 space-x-1 */}
        <div className="bg-red-300 flex flex-wrap gap-1 py-1 ">
          <AddOnsSpan />
          <AddOnsSpan />
          <AddOnsSpan />
        </div>
      </div>
      <div className="border border-blue-600 w-1/2">
        <table className="w-full border border-gray-500 text-center">
          <thead>
            <tr>
              <th></th>
              <th>Full</th>
              <th>Half</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Large</th>
              <td>8</td>
              <td>3</td>
              <td> ₹35</td>
            </tr>
            <tr>
              <th>Medium</th>
              <td>8</td>
              <td>3</td>
              <td> ₹800</td>
            </tr>
            <tr>
              <th>Small</th>
              <td>8</td>
              <td>8</td>
              <td> ₹3000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p className="bg-slate-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
    </p>
  </div>
);
