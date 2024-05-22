import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "@/lib/features/searchSlice";

export const searchStore = () => {
    return configureStore({
        reducer: {
            searching: searchSlice
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false }),
    });
};

export type AppStore = ReturnType<typeof searchStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];