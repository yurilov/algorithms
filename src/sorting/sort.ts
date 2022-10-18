export class Sort
{
	protected _array: number[];

	constructor(length: number)
	{
		this._array = this.generateRandomNumbersArray(length);
	}

	get array(): number[]
	{
		return this._array;
	}

	public bubbleSort<Type>(array: Type[]): Type[]
	{
		for (let i = 0; i < array.length; i++)
		{
			for (let j = 0; j < array.length; j++)
			{
				if (array[j] > array[j + 1])
				{
					let temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
				}
			}
		}

		console.log(array);

		return array;
	}

	public optimizedBubbleSort<Type>(array: Type[]): Type[]
	{
		let swapped = true;
		do
		{
			swapped = false;
			for (let j = 0; j < array.length; j++)
			{
				if (array[j] > array[j + 1])
				{
					let temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
					swapped = true;
				}
			}
		}
		while (swapped);
		return array;
	}

	public merge(left: number[], right: number[])
	{
		let arr = [];
		// Break out of loop if any one of the array gets empty
		while (left.length && right.length)
		{
			// Pick the smaller among the smallest element of left and right sub arrays
			if (left[0] < right[0])
			{
				arr.push(left.shift());
			}
			else
			{
				arr.push(right.shift());
			}
		}

		// Concatenating the leftover elements
		return [ ...arr, ...left, ...right ];
	}

	protected generateRandomNumbersArray(length: number): number[]
	{
		return Array.from({ length: length }, () => Math.floor(Math.random() * 99));
	}
}
