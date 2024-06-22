import { useState } from "react"

function Filters({ onFilterChange }) {
    const [filter, setFilter] = useState('todos');

    const handleFilterChange = (event) => {
        const newFilter = event.target.value;
        setFilter(newFilter)
        onFilterChange(newFilter)
    }

    return (
        <>
            <nav className="mt-[120px] mb-[60px]">
                <ul className="flex flex-wrap justify-center items-center gap-5">
                    <li>
                        <label htmlFor="todos" className="cursor-pointer">
                            <input
                            type="radio"
                            id="todos"
                            value="todos"
                            checked={filter === 'todos'}
                            onChange={handleFilterChange}
                            className="hidden"
                            />
                            Todas Las Prendas
                        </label>
                    </li>
                    <li className="text-slate-500 hidden md:block">|</li>
                    <li>
                        <label htmlFor="superior" className="cursor-pointer">
                            <input
                            type="radio"
                            id="superior"
                            value="superior"
                            checked={filter === 'superior'}
                            onChange={handleFilterChange}
                            className="hidden"
                            />
                            Prendas Superiores
                        </label>
                    </li>
                    <li className="text-slate-500 hidden md:block">|</li>
                    <li>
                        <label htmlFor="inferior" className="cursor-pointer">
                            <input
                            type="radio"
                            id="inferior"
                            value="inferior"
                            checked={filter === 'inferior'}
                            onChange={handleFilterChange}
                            className="hidden"
                            />
                            Prendas Inferiores
                        </label>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Filters
