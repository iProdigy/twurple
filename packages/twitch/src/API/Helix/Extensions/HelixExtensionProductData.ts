/** @private */
export interface HelixExtensionProductCostData {
	amount: number;
	type: 'bits'; // TODO is this complete?
}

/** @private */
export interface HelixExtensionProductData {
	sku: string;
	cost: HelixExtensionProductCostData;
	displayName: string;
	inDevelopment: boolean;
}
