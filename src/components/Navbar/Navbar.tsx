import React from 'react'
import MenuItems from '../MenuItems/MenuItems'

export default function Navbar() {
    const menuItems = [
        {
            id: 1,
            title: 'Home',
            url: '/',
            child: [
                {
                    id: 4,
                    title: 'web design',
                    url: 'web-design',
                },
                {
                    id: 5,
                    title: 'web development',
                    url: 'web-dev',
                    child: [
                        {
                            id: 6,
                            title: 'web design',
                            url: 'web-design',
                        },
                        {
                            id: 7,
                            title: 'web development',
                            url: 'web-dev',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: 'Services',
            url: '/services',
        },
        {
            id: 3,
            title: 'About',
            url: '/about',
        },
    ]
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                    const depthLevel = 0
                    return (
                        <MenuItems
                            items={menu}
                            key={index}
                            depthLevel={depthLevel}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}
