import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Load user from localStorage
const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userInfo,
  adminUsers: [],
  loading: false,
  error: null,
};

// Login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Login failed'
      );
    }
  }
);

// Register
export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/auth/register', userData);
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Registration failed'
      );
    }
  }
);

// Get current user
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/auth/me');
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to get user'
      );
    }
  }
);

// Fetch admin users (admin only)
export const fetchAdminUsers = createAsyncThunk(
  'auth/fetchAdminUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/auth/admin/users');
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch admin users'
      );
    }
  }
);

// Create admin user (admin only)
export const createAdminUser = createAsyncThunk(
  'auth/createAdminUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/auth/admin/users', {
        name,
        email,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to create admin user'
      );
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get current user
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      // Fetch admin users
      .addCase(fetchAdminUsers.fulfilled, (state, action) => {
        state.adminUsers = action.payload;
      })
      // Create admin user
      .addCase(createAdminUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAdminUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createAdminUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
