import React from "react";
import CommonCard from "../../components/CommonCard";
import Link from "next/link";
import { useAppSelector } from "../../useFullItems/redux";

export default function AllCategory() {
  /* initialization */
  /* states or store */
  const { allDisheshs, dishSections } = useAppSelector(
    (store) => store.restaurantInfo
  );
  /* useEffect */
  /* function */

  const { selectedSection } = useAppSelector((store) => store.selectedItems);
  let allDish = useAppSelector((store) => store.restaurantInfo.allDisheshs);

  if (selectedSection)
    allDish = useAppSelector((store) => store.restaurantInfo.dishSections)?.[
      selectedSection
    ].dishesh;

  return (
    <main className="bg-gray-100 p-3 space-y-4">
      <header>
        <div className="flex bg-white rounded-md">
          <img src="/icons/search.svg" alt="search icon" className="h-9" />
          <input
            type="text"
            className="outline-none flex-1 px-1 rounded-md text-lg"
            placeholder="search your desired category"
          />
        </div>
      </header>

      <section>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">All categories</h3>
          {/* <a className="text-orange-500 underline">View all</a> */}
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Link href="/allDishes">
            <CommonCard />
          </Link>
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
        </div>
      </section>
    </main>
  );
}
