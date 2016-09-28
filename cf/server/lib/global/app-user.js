module.exports = function() {
	return function(req, res, next) {
		req.setLoginUser = function(user) {
			if(user) {
				req.session.user = user;
			}
			else {
				req.session.user = null;
			}
		}

		req.getLoginUser = function() {
			return req.session.user;
		}

		// The statement is used to refresh redis timeout.
		// the redis ttl will be refresh only on write data to redis.
		if(req.session.user) {
			req.session.user.lastAccessTime = new Date();
		}

		next();
	}
}
