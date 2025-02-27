import { useState } from "react";
import { addToParsedData, removeParsedData } from "../redux/dataSlice";
import { clearLocalStorage, updateLocalStorage } from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { useDataActions } from "./useDataActions";
import { filterNewWords } from "../utils/dataHelpers";

export function useCategoryActions() {
    const dispatch = useDispatch();

    const [isCategoryFormOpen, setIsCategoryFormOpen] = useState(false);
    const [category, setCategory] = useState("");
    const [words, setWords] = useState("");
    const [categoryWarning, setCategoryWarning] = useState(false);
    const { mergedData } = useDataActions();

    const openCategoryForm = () => setIsCategoryFormOpen(true);
    const closeCategoryForm = () => setIsCategoryFormOpen(false);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        const categoryExists = mergedData.some(
        (item) => item.category.toLowerCase() === newCategory.toLowerCase()
        );
        setCategoryWarning(categoryExists);
    };

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!category.trim()) {
        return;
        }

        const updatedCategories = updateLocalStorage(category, words);
        setCategory("");
        setWords("");
        dispatch(addToParsedData(updatedCategories));
        closeCategoryForm();
    };

    const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const filteredValue = filterNewWords(e.target.value);
        setWords(filteredValue);
    };

    const deleteAddedCategories = () => {
        clearLocalStorage();
        dispatch(removeParsedData());
      };
      return {isCategoryFormOpen, openCategoryForm, closeCategoryForm,
        category, setCategory, words, setWords, categoryWarning,
        handleCategoryChange, handleSave, handleTextareaInput, deleteAddedCategories}
}
