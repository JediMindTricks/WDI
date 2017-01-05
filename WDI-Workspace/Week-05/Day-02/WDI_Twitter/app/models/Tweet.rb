class Tweet 

	# tracks how many tweets are created
	@@count = 0

	# simulate DB, storing all tweets
	@@all_tweets = []

	# gets run whenever we create a tweet
	def initialize(content)
		# the tweet object can only have content up to 140 char
		@content = content.truncate(140)
		@@count += 1
		@@all_tweets.push(self)
	end

	# returns the number of tweets created with Tweet.count
	def self.count
		@@all_tweets.length
	end

	def self.all
		@@all_tweets
	end

	attr_reader(:content)

	Tweet.new("Hello! My first tweet.")
	Tweet.new("Boooooya")
	Tweet.new("Getting crazy with Rails")

end