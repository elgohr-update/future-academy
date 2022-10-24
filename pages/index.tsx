import { GetStaticProps } from "next";
import { useState } from "react";
import { Htag, Button, P, Tag } from "../components";
import { Rating } from "../components/Rating/Rating";
import { withLayout } from "../layouts/Layout/Layout";
import axios from "axios";
import { MenuItem } from "../intefaces/menu.interface";

function Home({ menu, firstCategory }:HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(5);
  return (
		<>
			<Htag tag="h1">Texttttt</Htag>
			<Button appearance="primary" arrow="right">Узнать подробнее</Button>
			<Button appearance="ghost" arrow="down">Узнать подробнее</Button>
			<Button appearance="form" arrow="none">Узнать подробнее</Button>
			<P size="s">adasdasdaddsad</P>
			<P>adasdasdaddsad</P>
			<P size="l">adasdasdaddsad</P>
			<Tag size="m" color="red">dasdasdadasd</Tag>
			<Tag size="s" color="grey">dasdasdadasd</Tag>
			<Tag size="m" color="ghost" href="https://google.com">dasdasdadasd</Tag>
			<Tag color="green">dasdasdadasd</Tag>
			<Tag>dasdasdadasd</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />		
		</>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
		firstCategory
	});
	
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[],
	firstCategory: number
}