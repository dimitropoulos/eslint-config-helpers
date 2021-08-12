export const ERROR = 'error';

/**
 * @param {string} reason the rationale for why this rule can't be an error.
 */
export const WARN = (reason: string) => 'warn';

/**
 * @param {string} reason the rationale for not using the rule.
 */
 export const OFF = (reason: string) => 'off';

/////////////////////////////
//// EXCUSES ////////////////
/////////////////////////////
export const UNDECIDED = 'The jury is still out on this one.';
export const UNKNOWN = 'This rule was previously set to off and the reason for doing so has not yet been determined.'
export const PROJECT_BY_PROJECT = 'This rule may have utility to some projects, but ultimate it is a project-by-project rule that should be configured differently depending on the project.';
export const NOT_VALUABLE = "I don't see enough value to justify including this rule.";
export const JAVASCRIPT_SPECIFIC = "This rule is either JavaScript specific and thus isn't useful in TypeScript projects, or is incompatible with a TypeScript rule that may require types in order to function.";
export const TYPESCRIPT_SPECIFIC = "This rule is not compatible with TypeScript projects.";
export const USER_DISCRETION = "This rule is one of those rare things that's better left up to the individual to decide.";
export const DEPRECATED = 'This rule has been deprecated.';

/**
 * Used for `@typescript-eslint` extension rules of eslint rules of the same name.
 * For example, the typescript-eslint plugin may have a rule, `@typescript-eslint/example-rule`, that extends another rule from eslint, `example-rule`.  In that case we would set the eslint rule with the line `"example-rule": SUCCESSOR(TYPESCRIPT_EXTENSION),` and then configure the @typescript-eslint rule normally.
 * see: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
 */
 export const TYPESCRIPT_EXTENSION = '@typescript-eslint/*'

/**
 * Used when a rule is only turned off because it was found not to work well.
 * @param {string} asOfVersion the version of the parser or plugin when last investigated
 * @param {string} reason the reason why this rule was found to be buggy
 */
export const BUGGY = (asOfVersion: string, reason: string) => OFF(`was last tested at version ${asOfVersion} and was found to be buggy, for the reason ${reason}`);

/**
 * Some plugins extend rules of other plugins.
 * For example, the typescript-eslint plugin may have a rule, `@typescript-eslint/example-rule`, that extends another rule from eslint, `example-rule`.  In that case we would notate the eslint rule with `SUCCESOR('@typescript-eslint/example-rule')
 * @param {string} ruleId the rationale for not using the rule.
 */
export const SUCCESSOR = (ruleId: string) => OFF(`succeeded by ${ruleId}`);
