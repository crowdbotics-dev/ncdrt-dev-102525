import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vbcbc_list = createAsyncThunk(
  "vbcbcs/api_v1_vbcbc_list",
  async payload => {
    const response = await apiService.api_v1_vbcbc_list(payload)
    return response.data
  }
)
export const api_v1_vbcbc_create = createAsyncThunk(
  "vbcbcs/api_v1_vbcbc_create",
  async payload => {
    const response = await apiService.api_v1_vbcbc_create(payload)
    return response.data
  }
)
export const api_v1_vbcbc_retrieve = createAsyncThunk(
  "vbcbcs/api_v1_vbcbc_retrieve",
  async payload => {
    const response = await apiService.api_v1_vbcbc_retrieve(payload)
    return response.data
  }
)
export const api_v1_vbcbc_update = createAsyncThunk(
  "vbcbcs/api_v1_vbcbc_update",
  async payload => {
    const response = await apiService.api_v1_vbcbc_update(payload)
    return response.data
  }
)
export const api_v1_vbcbc_partial_update = createAsyncThunk(
  "vbcbcs/api_v1_vbcbc_partial_update",
  async payload => {
    const response = await apiService.api_v1_vbcbc_partial_update(payload)
    return response.data
  }
)
export const api_v1_vbcbc_destroy = createAsyncThunk(
  "vbcbcs/api_v1_vbcbc_destroy",
  async payload => {
    const response = await apiService.api_v1_vbcbc_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vbcbcsSlice = createSlice({
  name: "vbcbcs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vbcbc_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcbc_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcbc_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcbc_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcbc_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcbc_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcbc_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcbc_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vbcbc_list,
  api_v1_vbcbc_create,
  api_v1_vbcbc_retrieve,
  api_v1_vbcbc_update,
  api_v1_vbcbc_partial_update,
  api_v1_vbcbc_destroy,
  slice: vbcbcsSlice
}
