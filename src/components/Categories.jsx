import React, { useState } from 'react'

export const Categories = ({ items }) => {
    const [active, setActive] = useState(null)

    const onSelectItem = (index) => {
        setActive(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={active === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>
                {
                    items && items.map((name, index) => (
                        <li className={active === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)} key={index}>{name}</li>
                    ))
                }

            </ul>
        </div>
    )
}
