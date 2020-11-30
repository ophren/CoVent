// 'use strict';

// module.exports = (sequelize, DataTypes) => {
//   const givenLike = sequelize.define('givenLike', {
//     givenLikeId: {
//       type: DataTypes.BIGINT,
//       allowNull: false,
//     }
//   });

//   givenLike.associate = model => {
//     givenLike.belongsToMany(model.profile, {
//       // through: model.givenLikeProfile,
//       through: 'likedProfiles',
//       // as: 'likedProfile'
//     });

//     // givenLike.belongsToMany(model.profile, {
//     //   through: model.givenLikeProfile,
//     //   as: 'givenLike'
//     // });

//     // // old working version
//     // givenLike.belongsTo(model.profile);

//   };

//   return givenLike;
// };