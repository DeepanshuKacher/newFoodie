import CommonCard from "../components/CommonCard";
import PopularCard from "../components/PopularCard";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";
import { store, useAppDispatch, useAppSelector } from "../useFullItems/redux";
import { selectSection } from "../useFullItems/redux/selectedItems";
import { connectMqtt } from "../useFullItems/mqtt/initialLoad";
import { useEffect } from "react";

export default function Home() {
  /* initialization */
  const dispatch = useAppDispatch();
  /* states or store */
  const { allDisheshs, dishSections } = useAppSelector(
    (store) => store.restaurantInfo
  );
  const { sessionUUID, tableNumber, tableSectionId } = useAppSelector(
    (store) => store.foodieInfo
  );

  const { restaurantId } = useAppSelector((store) => store.restaurantInfo);
  /* useEffect */


  /* function */

  return (
    <main className="bg-gray-100 px-3 pt-3 pb-16 space-y-4">
      <Head>
        <title>eatrofoods</title>
      </Head>
      {/* <header>
        <div className="flex bg-white rounded-md">
          <img src="/icons/search.svg" alt="search icon" className="h-9" />
          <input
            type="text"
            className="outline-none flex-1 px-1 rounded-md text-lg"
            placeholder="search your desired foods"
          />
        </div>
      </header> */}
  {/*     <section>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">Popular items</h3>
          <a className="text-orange-500 underline">View all</a>
        </div>
        <div className="flex overflow-auto space-x-2 pt-1 pb-2">
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </section> */}
      <section>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">All categories</h3>
          <Link
            onClick={() => dispatch(selectSection(undefined))}
            className="text-orange-500 underline"
            href="/allCategory"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {dishSections?.map((dishSection, index) => {
            return (
              <Link href={`/${dishSection.sectionName}`} key={index}>
                <CommonCard
                  handleClick={() => {
                    dispatch(selectSection(index));
                  }}
                  heading={dishSection.sectionName}
                  backgroundImageUrl={dishSection.dishesh[0].imageUrl}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
