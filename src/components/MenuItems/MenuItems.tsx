import { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'

export default function MenuItems({ items, depthLevel }: any) {
    const [dropdown, setDropdown] = useState(false)
    return (
        <li className="menu-items">
            {items.child ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                    </button>
                    <Dropdown
                        child={items.child}
                        dropdown={dropdown}
                        depthLevel={depthLevel}
                    />
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    )
}
