// Modules Import
import create from 'zustand';
import { Option } from '@typings/index';

type InfoStoreProps = {
  steps: number[];
  firstName: string;
  fullName: string;
  email: string;
  service: Option;
  company: Option;
  product: Option;
  experience: Option;
  template: Option;
  setFirstName: (firstName: string) => void;
  setFullName: (fullName: string) => void;
  setEmail: (email: string) => void;
  setService: (service: Option) => void;
  setCompany: (company: Option) => void;
  setProduct: (product: Option) => void;
  setExperience: (experience: Option) => void;
  setTemplate: (template: Option) => void;
  setSteps: (steps: number[]) => void;
};

export const useInfo = create<InfoStoreProps>((set) => ({
  steps: [1, 2, 3],
  firstName: '',
  fullName: '',
  email: '',
  service: null,
  company: null,
  product: null,
  experience: null,
  template: null,
  setFirstName: (firstName) => set({ firstName }),
  setFullName: (fullName) => set({ fullName }),
  setEmail: (email) => set({ email }),
  setService: (service) => set({ service }),
  setCompany: (company) => set({ company }),
  setProduct: (product) => set({ product }),
  setExperience: (experience) => set({ experience }),
  setTemplate: (template) => set({ template }),
  setSteps: (steps) => set({ steps }),
}));
