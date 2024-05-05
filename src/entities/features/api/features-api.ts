import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { apiFeatures } from "@/shared/api";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { IFeatures, IFeaturesProps } from "@/shared/types/features";
export const featuresApi = createAsyncThunk<
  IFeatures,
  IFeaturesProps,
  ThunkConfig<string>
>("features", async ({ productId }, { rejectWithValue }) => {
  try {
    return await apiFeatures.getFeatures(productId);
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
