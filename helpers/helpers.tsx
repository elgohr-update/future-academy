import { FirstLevelMenuItem } from "../intefaces/menu.interface";
import { TopLevelCategory } from "../intefaces/page.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses},
	{ route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services},
	{ route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books},
	{ route: "products", name: "Товары", icon: <ProductsIcon />, id: TopLevelCategory.Products}
];