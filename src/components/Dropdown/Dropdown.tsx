import React from 'react'
import MenuItems from '../MenuItems/MenuItems'

export default function Dropdown({ child, dropdown, depthLevel }: any) {
    depthLevel = depthLevel + 1
    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : ''
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
            {child.map((item: any, index: number) => (
                <MenuItems items={item} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    )
}
