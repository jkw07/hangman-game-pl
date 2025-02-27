import { useGameActions } from "../hooks/useGameActions";
import { useDataActions } from "../hooks/useDataActions";

export const PickCategoryButton = () => {
  const { handlePickCategory } = useGameActions();
  const { mergedData } = useDataActions();

  return (
    <>
      {mergedData.map((item, index) => (
        <button
          className="default-button"
          key={index}
          value={item.category}
          onClick={() => handlePickCategory(item.category, item.words)}
        >
          {item.category}
        </button>
      ))}
    </>
  );
};
