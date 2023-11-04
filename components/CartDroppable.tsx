'use-client';

import { useDroppable } from '@dnd-kit/core';
import { FC } from 'react';

interface ICartDroppable {
	items: string[];
}

const CartDroppable: FC<ICartDroppable> = ({ items }) => {
	const { setNodeRef } = useDroppable({
		id: 'cart-droppable'
	});

	return (
		<ul
			ref={setNodeRef}
			className='w-4/5  border flex rounded-xl shadow-lg shadow-gray-500 space-x-2 p-4'
		>
			{items.map((item, index) => (
				<div
					key={`${item}-${index}`}
					className='rounded-xl border cursor-grab active:cursor-grabbing h-min-content border-slate-500 px-3 py-2 text-lg transition duration-300'
				>
					{item}
				</div>
			))}
		</ul>
	);
};

export default CartDroppable;
