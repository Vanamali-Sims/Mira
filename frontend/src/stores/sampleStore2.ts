import { create } from "zustand";

const useFormStore = create((set) => ({
  isInternational: "",
  age: "",
  personalityType: "",
  setInternational: (value: boolean) => set({ isInternational: value }),
  setAge: (value: number) => set({ age: value }),
  setPersonalityType: (value: string) => set({ personalityType: value }),
}));

export default useFormStore;
