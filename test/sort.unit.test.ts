import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';

import { Sort } from "../src/sorting/sort";

_chai.should();
_chai.expect;

@suite
class SortUnitTest
{
	protected SUT: Sort;
	protected length: number;

	before()
	{
		this.length = 20;
		this.SUT = new Sort(this.length);
	}

	@test 'Checks array length'()
	{
		const arrayLength = this.SUT.array.length;
		expect(arrayLength).to.be.equal(this.length);
	}

	@test 'Check bubbleSorted array length' ()
	{
		const sortedArrayLength = this.SUT.bubbleSort(this.SUT.array).length;
		expect(sortedArrayLength).to.be.equal(this.length);
	}

	@test 'Check optimized bubbleSorted array length' ()
	{
		const sortedArrayLength = this.SUT.optimizedBubbleSort(this.SUT.array).length;
		expect(sortedArrayLength).to.be.equal(this.length);
	}
}
