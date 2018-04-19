export interface GtConfigSetting {
	objectKey: string;
	visible?: boolean;
	enabled?: boolean;
	sort?: 'asc' | 'desc' | 'enable' | 'disable' | string;
	sortEnabled?: boolean;
	sortOrder?: number;
	columnOrder?: number;
	/**
	 * should column be exported to CSV?
	 */
	export?: boolean;
	/**
	 * should we include this column when using global search?
	 */
	search?: boolean;
	/**
	 * should there be a search box in the column header for this field?
	 */
	searchBox?: boolean;
	/**
	 * should settings be locked for editing? (default is false)
	 */
	lockSettings?: boolean;
}
