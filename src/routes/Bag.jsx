import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
import EmptyBagMessage from "../components/EmptyBagMessage";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        {finalItems.length > 0 ? (
          <>
            <div className="bag-items-container">
              {finalItems.map((item) => (
                <BagItem key={item} item={item} />
              ))}
            </div>
            <BagSummary />
          </>
        ) :
          (
            <EmptyBagMessage />
          )}
      </div>
    </main>
  );
};

export default Bag;
