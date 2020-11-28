import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  role: 'ADMIN' | 'USER' | 'VISITOR';
  email?: string;
  name?: string;
  surname?: string;
  height?: number;
  weight?: number;
  phoneNumber?: string;
  language?: 'en' | 'sk';
  country?: string;
  birthday?: Date;
  sponsor?: string;
  sex?: 'M' | 'F';
  address?: {
    street: string;
    streetNumber: number;
    city: string;
    zipCode: number;
    country: string;
  };
  profilePhoto?: string;
  organizationId?: number;
  adminView: boolean;
}

const initialState: User = {
  role: 'VISITOR',
  adminView: JSON.parse(localStorage.getItem('adminView') || 'true'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<User['role']>) {
      state.role = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.role = action.payload.role;
      state.profilePhoto = action.payload.profilePhoto;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
    },
    setAdminView(state, action: PayloadAction<boolean>) {
      state.adminView = action.payload;
      localStorage.setItem('adminView', JSON.stringify(action.payload));
    },
  },
});

export const { setRole, setUser, setAdminView } = userSlice.actions;
export default userSlice;
