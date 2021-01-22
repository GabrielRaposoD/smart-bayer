// Modules Import
import create from 'zustand';
import { Option } from '@typings/index';

type InfoStoreProps = {
  currentStep: number;
  steps: number[];
  firstName: string;
  fullName: string;
  email: string;
  service: Option;
  company: Option;
  product: Option;
  experience: Option;
  template: Option;
  decrementCurrentStep: () => void;
  incrementCurrentStep: () => void;
  setCurrentStep: (step) => void;
  setSteps: (steps) => void;
  setFirstName: (firstName: string) => void;
  setFullName: (fullName: string) => void;
  setEmail: (email: string) => void;
  setService: (service: Option) => void;
  setCompany: (company: Option) => void;
  setProduct: (product: Option) => void;
  setExperience: (experience: Option) => void;
  setTemplate: (template: Option) => void;
};

export const useInfo = create<InfoStoreProps>((set) => ({
  currentStep: 0,
  steps: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  firstName: '',
  fullName: '',
  email: '',
  service: null,
  company: null,
  product: null,
  experience: null,
  template: null,
  decrementCurrentStep: () =>
    set((state) => ({ currentStep: state.currentStep - 1 })),
  incrementCurrentStep: () =>
    set((state) => ({ currentStep: state.currentStep + 1 })),
  setCurrentStep: (currentStep) => set({ currentStep }),
  setSteps: (steps) => set({ steps }),
  setFirstName: (firstName) => set({ firstName }),
  setFullName: (fullName) => set({ fullName }),
  setEmail: (email) => set({ email }),
  setService: (service) => set({ service }),
  setCompany: (company) => set({ company }),
  setProduct: (product) => set({ product }),
  setExperience: (experience) => set({ experience }),
  setTemplate: (template) => set({ template }),
}));
