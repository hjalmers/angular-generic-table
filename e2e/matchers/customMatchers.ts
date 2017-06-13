/**
 * Created by S89629 on 6/13/2017.
 */
/**
 * Created by S89629 on 6/12/2017.
 */

const customMatchers: jasmine.CustomMatcherFactories = {
  toHaveSameSequences: function (util: jasmine.MatchersUtil, customEqualityTesters: Array<jasmine.CustomEqualityTester>): jasmine.CustomMatcher {
    return {
      compare: function (actual: any, expected: any): jasmine.CustomMatcherResult {
        const result: jasmine.CustomMatcherResult = {
          pass: false,
          message: ''
        };
        for (let i = 0; i < actual.length; i++) {
          if (actual[i] !== expected[i]) {
            result.message = 'Wrong sequence on #' + (i + 1);
            return result;
          }
        }
        result.pass = true;
        return result;
      }
    };
  }
};

export { customMatchers };
