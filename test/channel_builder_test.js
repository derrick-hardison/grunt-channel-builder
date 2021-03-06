'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function getNormalizedFile(filepath) {
  return grunt.file.readJSON(filepath);
}

exports.channel_builder = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  ireland: function(test) {
    test.expect(2);

    var actual = grunt.config.get('channel_builder.out.ireland');
    var expected = getNormalizedFile('test/expected/ireland.json');
    test.deepEqual(actual, expected, 'should describe what the finished config object is for the ireland channel');

    actual = grunt.config.get('ie_file_list');
    expected = getNormalizedFile('test/expected/ireland-replacement.json');
    test.deepEqual(actual, expected, 'should describe what the finished existing config object is for the ireland channel after replacing it with the output list');

    test.done();
  },
  brazil: function(test) {
    test.expect(2);

    var actual = grunt.config.get('channel_builder.out.brazil');
    var expected = getNormalizedFile('test/expected/brazil.json');
    test.deepEqual(actual, expected, 'should describe what the finished config object is for the brazil channel');

    actual = grunt.config.get('ie_file_list');
    expected = getNormalizedFile('test/expected/ireland-unreplacement.json');
    test.deepEqual(actual, expected, 'should describe what the finished existing config object is for the non-ireland channel without replacement');

    test.done();
  },
  acme: function(test) {
    test.expect(2);

    var actual = grunt.config.get('channel_builder.out.acme');
    var expected = getNormalizedFile('test/expected/acme.json');
    test.deepEqual(actual, expected, 'should describe what the finished config object is for the acme channel');

    actual = grunt.config.get('ie_file_list');
    expected = getNormalizedFile('test/expected/ireland-unreplacement.json');
    test.deepEqual(actual, expected, 'should describe what the finished existing config object is for the non-ireland channel without replacement');

    test.done();
  },
  default: function(test) {
    test.expect(2);

    var actual = grunt.config.get('channel_builder.out.default');
    var expected = getNormalizedFile('test/expected/default.json');
    test.deepEqual(actual, expected, 'should describe what the finished config object is for the default channel');

    actual = grunt.config.get('ie_file_list');
    expected = getNormalizedFile('test/expected/ireland-unreplacement.json');
    test.deepEqual(actual, expected, 'should describe what the finished existing config object is for the non-ireland channel without replacement');

    test.done();
  },
};
