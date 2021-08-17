import React from "react";
import { Button, Input, Wrapper, Image } from "./Searchbar.style";
import Arrow from "../../assets/icon-arrow.svg";
import { useGlobalContext } from "../../context";

const Searchbar = () => {
	const {
		fetchIPDetails,
		searchTerm,
		setSearchTerm,
		setModal,
		errorMessages,
		modal,
	} = useGlobalContext();
	let timeout;
	return (
		<Wrapper>
			<Input
				type="text"
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
			/>
			<Button
				onClick={() => {
					if (!searchTerm) {
						clearTimeout(timeout);
						setModal({
							modalOpen: true,
							modalContent: errorMessages[0],
						});
						timeout = setTimeout(() => {
							setModal({ ...modal, modalOpen: false });
						}, 3000);
					} else {
						fetchIPDetails(searchTerm);
					}
				}}
			>
				<Image src={Arrow} />
			</Button>
		</Wrapper>
	);
};

export default Searchbar;
