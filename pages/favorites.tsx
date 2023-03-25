import ImageList from '@/components/ImageList';
import InfoModal from '@/components/InfoModal';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import Head from 'next/head';
import React from 'react';

const Favorites = () => {
     const { data: favorites = [] } = useFavorites();
	 const { isOpen, closeModal } = useInfoModalStore();
    return (
			<>
				<Head>
					<title>Favorites</title>
					<meta name="description" content="Generated by create next app" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<InfoModal visible={isOpen} onClose={closeModal} />
				<div className="pt-20">
					{favorites <= 1 ? (
						<h1 className="text-3xl text-white text-center">
							You have no Favorites 😿{" "}
						</h1>
					) : (
						<ImageList data={favorites} title="Favorites 🐱 " />
					)}
				</div>
			</>
		);
};

export default Favorites;