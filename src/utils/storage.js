function getNotesFromStorage(localStorageItem, store, action) {

    const localNotes = localStorage.getItem(localStorageItem);

    if (localNotes) {
        store.dispatch(action, JSON.parse(localNotes));
    }

}

export default getNotesFromStorage;