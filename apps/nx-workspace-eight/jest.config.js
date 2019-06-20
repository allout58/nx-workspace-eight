module.exports = {
  name: 'nx-workspace-eight',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-workspace-eight',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
