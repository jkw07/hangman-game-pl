import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeDuplicates } from "../utils/dataHelpers";

export function useDataActions() {
    const state = useSelector((state: RootState) => state.data);

    const mergedData = removeDuplicates([...state.defaultData, ...state.parsedData]);
    return {mergedData}
}