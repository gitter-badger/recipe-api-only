'use strict';

module.exports = function(Ingredient) {

    //@TODO add to done & delete default false
	Ingredient.validatesPresenceOf('name', 'recipeId', 'type', 'done', 'delete');
  // user.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});
  // user.validatesInclusionOf('gender', {in: ['male', 'female']});
  // user.validatesExclusionOf('domain', {in: ['www', 'billing', 'admin']});
  // user.validatesNumericalityOf('age', {int: true});
  // user.validatesUniquenessOf('email', {message: 'email is not unique'});

};