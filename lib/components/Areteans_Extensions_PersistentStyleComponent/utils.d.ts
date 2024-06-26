/**
 * Given the PConnect object of a Template component, retrieve the children
 * metadata of all regions.
 * @param {Function} pConnect PConnect of a Template component.
 */
export declare function getAllFields(pConnect: Function): any;
/**
 * A helper function to create an object consisting react component as per the type.
 * This is used by CaseSummary template.
 * @param {object} configObject Object containing meta information for the particular field authored
 * @param {Function} getPConnect PConnect function passed along to other components.
 * @param {string} displayMode displayMode string contains information about the layout of component in review mode.
 */
export declare function prepareComponentInCaseSummary(configObject: any, getPConnect: Function, displayMode: string): {};
export declare function getFilteredFields(getPConnect: Function): any[];
/**
 * Returns ConfigurableLayout mapped content. With pre-populated default layout configs.
 * @param {object[]} regionData template children item.
 * @returns {object[]} ConfigurableLayout content.
 */
export declare function getLayoutDataFromRegion(regionData: object[]): any;
/**
 * Determine if the current view is the view of the case step/assignment.
 * @param {Function} pConnect PConnect object for the component
 */
export declare function getIsAssignmentView(pConnect: Function): boolean;
/**
 * A hook that gets the instructions content for a view.
 * @param {Function} pConnect PConnect object for the component
 * @param {string} [instructions="casestep"] 'casestep', 'none', or the html content of a Rule-UI-Paragraph rule (processed via core's paragraph annotation handler)
 */
export declare function getInstructions(pConnect: Function, instructions?: string): any;
//# sourceMappingURL=utils.d.ts.map