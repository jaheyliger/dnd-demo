'use client';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import CartDroppable from '@/components/CartDroppable';
import FruitDraggable from '@/components/FruitDraggable';
import { useState } from 'react';

export default function Home() {
  const fruits = ['Apple', 'Banana', 'Lemon', 'Pear', 'Mango'];
  const [cartItems, setCartItems] = useState<string[]>(["Test"])

  const addItemsToCart = (e: DragEndEvent) => {
    const newItem = e.active.data.current?.title

    if (e.over?.id !== "cart-droppable" || !newItem) return
    setCartItems([...cartItems, newItem])
  }

  return (
		<DndContext onDragEnd={addItemsToCart}>
			<main className='flex min-h-screen flex-col items-center p-24'>
				<div className='mb-20'>
					<h1 className='mb-6 text-4xl font-bold text-center'>Fruit List</h1>
					<ul className='flex justify-center space-x-4 w-full'>
						{fruits.map((fruit) => (
							<FruitDraggable
								key={fruit}
							>
								{fruit}
							</FruitDraggable>
						))}
					</ul>
				</div>
				<div className='w-full flex flex-col items-center justify-center'>
					<h1 className='mb-6 text-4xl font-bold'>My Cart</h1>
					<CartDroppable items={cartItems} />
				</div>
			</main>
		</DndContext>
	);
}
