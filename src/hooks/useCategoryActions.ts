import { useState } from "react";
import { addToParsedData, removeParsedData } from "../redux/dataSlice";
import { clearLocalStorage, updateLocalStorage } from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { useDataActions } from "./useDataActions";
import { filterNewWords } from "../utils/dataHelpers";
import { openCategoryForm, closeCategoryForm } from "../redux/categoryFormSlice";

export function useCategoryActions() {
    const dispatch = useDispatch();

    const [duplicatedCategoryWarning, setDuplicatedCategoryWarning] = useState(false);
    const [category, setCategory] = useState("");
    const [words, setWords] = useState("");
    const { mergedData } = useDataActions();

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        const categoryExists = mergedData.some(
        (item) => item.category.toLowerCase() === newCategory.toLowerCase()
        );
        setDuplicatedCategoryWarning(categoryExists);
    };

    const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const filteredValue = filterNewWords(e.target.value);
        setWords(filteredValue);
    };

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!category.trim()) {
        return;
        }

        const updatedCategories = updateLocalStorage(category, words);
        dispatch(addToParsedData(updatedCategories));
        handleClearForm();
        handleCloseCategoryForm();
    };

    const handleClearForm = () => {
        setCategory("");
        setWords("");
    }

    const deleteAddedCategories = () => {
        clearLocalStorage();
        dispatch(removeParsedData());
      };

    const handleCloseCategoryForm = () => dispatch(closeCategoryForm());
    const handleOpenCategoryForm = () => dispatch(openCategoryForm())
      return {
        category, setCategory, words, setWords,
        handleCategoryChange, handleSave, handleTextareaInput, deleteAddedCategories, handleCloseCategoryForm, handleOpenCategoryForm, duplicatedCategoryWarning}
}
