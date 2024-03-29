import { useEffect, useState } from "react";

/* import pages/components */
import CommonCard from "../../components/CommonCard";
import DishModal from "../../components/DishModal";
import { Dish } from "../../interfaces";
import { useAppSelector } from "../../useFullItems/redux";
import { Header } from "../../components/pageComponents/section/Header";

export default function AllDish() {
  /* initialization */
  /* states or store */

  const [selectedDish, setSelectDish] = useState<Dish>();
  const [allDish, setAllDish] = useState<Dish[]>([]);
  const [dishSearchText, setDishSearchText] = useState("");

  const { allDisheshs, dishSections } = useAppSelector(
    (store) => store.restaurantInfo
  );

  const { selectedSection } = useAppSelector((store) => store.selectedItems);
  // let allDish = allDisheshs;

  // allDish = dishSections?.[selectedSection]?.dishesh;

  useEffect(() => {
    if (selectedSection) {
      const temp = dishSections?.[selectedSection]?.dishesh;
      setAllDish(temp);
    } else {
      setAllDish(allDisheshs);
    }
  }, []);
  /* useEffect */
  /* functions and constants */

  const spacey4 = "space-y-4";

  const removeSelectedDish = () => setSelectDish(undefined);

  return (
    <main className={`bg-gray-100 p-3 pb-16 ${!!selectedDish ? "" : spacey4}`}>
      <Header inputValue={dishSearchText} setInputValue={setDishSearchText} />
      {selectedDish && (
        <DishModal dishDetail={selectedDish} handleModal={removeSelectedDish} />
      )}
      <section>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">
            {selectedSection === undefined
              ? "All Dishes"
              : dishSections[selectedSection].sectionName}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {allDish
            ?.filter((dish) =>
              dish.name.match(new RegExp(dishSearchText, "gi"))
            )
            .map((dish) => {
              return (
                <CommonCard
                  key={dish.id}
                  heading={dish.name}
                  handleClick={() => setSelectDish(dish)}
                  backgroundImageUrl={dish.imageUrl}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
}
