import { Menu } from "semantic-ui-react";

export default function Navbar() {
    
    return(
        <Menu>
            <Menu.Item
            name='집가고싶다'
            // active={activeItem === 'editorials'}
            // onClick={this.handleItemClick}
            >
            </Menu.Item>

            <Menu.Item
            name='리액트'
            // active={activeItem === 'reviews'}
            // onClick={this.handleItemClick}
            >
            </Menu.Item>

            <Menu.Item
            name='재미없어'
            // active={activeItem === 'upcomingEvents'}
            // onClick={this.handleItemClick}
            >
            </Menu.Item>
        </Menu>
    );
}