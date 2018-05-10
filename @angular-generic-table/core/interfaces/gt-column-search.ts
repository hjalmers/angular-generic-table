export interface GtColumnSearch {
	/**
	 * objectKey for the column.
	 */
	id: string;
	/**
	 * column-specific search value.
	 */
	value: string;
	/**
	 * Show only null values.
	 */
	onlyNull: boolean;
}
