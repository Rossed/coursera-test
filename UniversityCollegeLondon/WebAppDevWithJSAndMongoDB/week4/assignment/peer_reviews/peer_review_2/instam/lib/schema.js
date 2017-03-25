Chats.attachSchema(new SimpleSchema({
	message: {
		type: String,
		max: 500
	},
	from: {
		type: String,
		optional: true
	},
	to: {
		type: String,
		optional: true
	},
	createdOn: {
		type: Date,
	 	optional: true
	}
}));