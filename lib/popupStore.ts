import { create } from 'zustand';

const POPUP_DURATION_MS = 4000;

type PopupState = {
  text: string | null;
  timeoutId: ReturnType<typeof setTimeout> | null;
  showPopup: (text: string) => void;
  closePopup: () => void;
};

export const usePopupStore = create<PopupState>((set, get) => ({
  text: null,
  timeoutId: null,

  showPopup: (text: string) => {
    const { timeoutId } = get();
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => set({ text: null, timeoutId: null }), POPUP_DURATION_MS);
    set({ text, timeoutId: id });
  },

  closePopup: () => {
    const { timeoutId } = get();
    if (timeoutId) clearTimeout(timeoutId);
    set({ text: null, timeoutId: null });
  },
}));
