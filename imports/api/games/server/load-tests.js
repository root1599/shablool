meteorDown.init(function(Meteor) {
  Meteor.call('joinGame', { code: '635025', userId: Meteor.userId() }, function(error, result) {
  });
});

meteorDown.run({
  concurrency: 4,
  url: 'http://localhost:3000',
  key: 'YOUR_SUPER_SECRET_KEY',
  auth: {
    userIds: ['BBdTjy4FAuFXzrDXg', 'jvMkmqX4D7kqqFQDf', 'E9foEMfAyfvkXwb9L', 'RBCKxCdouSEzKLZny'],
  },
});