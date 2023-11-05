import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    onAddContact(state, action) {
      // reducer(state, action) {
      state.contacts = [...state.contacts, action.payload];
      // },
      // prepare(name, number) {
      //   return {
      //     payload: {
      //       id: nanoid(),
      //       name,
      //       number,
      //     },
      //   };
    },
    onDeleteDevice(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    onChangeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { onAddContact, onDeleteDevice, onChangeFilter } =
  contactsSlice.actions;
export const selectContacts = state => state.contactsStore.contacts;
export const selectFilter = state => state.contactsStore.filter;
export const contactsReducer = contactsSlice.reducer;
