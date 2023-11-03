import { useDraggable } from '@dnd-kit/core';
import { FC } from 'react';
import {CSS} from '@dnd-kit/utilities'

interface IFruitDraggable {
	children: string;
}

const FruitDraggable: FC<IFruitDraggable> = ({ children }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: children,
        data: {title: children}
	});

	return (
		<div
			ref={setNodeRef}
			className='rounded-xl border cursor-grab active:cursor-grabbing border-slate-500 hover:bg-slate-500 px-3 py-2 text-lg transition duration-300'
			style={{ transform: CSS.Translate.toString(transform) }}
			{...attributes}
			{...listeners}
		>
			{children}
		</div>
	);
};

export default FruitDraggable;
