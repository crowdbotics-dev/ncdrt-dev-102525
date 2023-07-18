import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bnfrh_list = createAsyncThunk(
  "bnfrhs/api_v1_bnfrh_list",
  async payload => {
    const response = await apiService.api_v1_bnfrh_list(payload)
    return response.data
  }
)
export const api_v1_bnfrh_create = createAsyncThunk(
  "bnfrhs/api_v1_bnfrh_create",
  async payload => {
    const response = await apiService.api_v1_bnfrh_create(payload)
    return response.data
  }
)
export const api_v1_bnfrh_retrieve = createAsyncThunk(
  "bnfrhs/api_v1_bnfrh_retrieve",
  async payload => {
    const response = await apiService.api_v1_bnfrh_retrieve(payload)
    return response.data
  }
)
export const api_v1_bnfrh_update = createAsyncThunk(
  "bnfrhs/api_v1_bnfrh_update",
  async payload => {
    const response = await apiService.api_v1_bnfrh_update(payload)
    return response.data
  }
)
export const api_v1_bnfrh_partial_update = createAsyncThunk(
  "bnfrhs/api_v1_bnfrh_partial_update",
  async payload => {
    const response = await apiService.api_v1_bnfrh_partial_update(payload)
    return response.data
  }
)
export const api_v1_bnfrh_destroy = createAsyncThunk(
  "bnfrhs/api_v1_bnfrh_destroy",
  async payload => {
    const response = await apiService.api_v1_bnfrh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bnfrhsSlice = createSlice({
  name: "bnfrhs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_bnfrh_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bnfrh_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bnfrh_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bnfrh_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bnfrh_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bnfrh_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bnfrh_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bnfrh_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_bnfrh_list,
  api_v1_bnfrh_create,
  api_v1_bnfrh_retrieve,
  api_v1_bnfrh_update,
  api_v1_bnfrh_partial_update,
  api_v1_bnfrh_destroy,
  slice: bnfrhsSlice
}
