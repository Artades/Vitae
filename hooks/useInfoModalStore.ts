import { create } from "zustand";

export interface ModalStoreInterface {
	imageId?: string;
	isOpen: boolean;
	openModal: (imageId: string) => void;
	closeModal: () => void;
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
	imageId: undefined,
	isOpen: false,
	openModal: (imageId: string) => set({ isOpen: true, imageId }),
	closeModal: () => set({ isOpen: false, imageId: undefined }),
}));

export default useInfoModalStore;
