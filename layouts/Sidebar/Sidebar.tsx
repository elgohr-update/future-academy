import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
/* import styles from './P.module.css';
import cn from 'classnames'; */

export const Sidebar = ({ ...props }: SidebarProps):JSX.Element => {
	return (
		<div {...props}>
			<div>search</div>
			<Menu />
		</div>
	)
};