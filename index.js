const express = require("express");
const fs = require("fs");
const app = express();
const ngrok = require('ngrok');

var NGROK_URL = "";
var PORT = process.env.PORT || 4000;

var item_template = ({ title = "", description = "", homeLink = "", streamLink = "", names = "" }) => `<item>
			    <title>${title} (Live)</title>
				<itunes:title>${title} (Live)</itunes:title>
				<itunes:subtitle>${description}</itunes:subtitle>
			    <itunes:summary>${description}</itunes:summary>
			    <description>${description}</description>
			    <link>${homeLink}</link>
				<itunes:episodeType>full</itunes:episodeType>
			    <enclosure url="${streamLink}" type="audio/mpeg" length="1"></enclosure>
			    <pubDate>${(new Date(new Date() - 24*60*60*1000)).toDateString()}</pubDate>
			    <itunes:author>${names}</itunes:author>
			    <itunes:duration>00:01</itunes:duration>
			    <itunes:explicit>no</itunes:explicit>
			    <guid isPermaLink="false">${streamLink}</guid>
			</item>`;

var rss_template = ({ title = "", subtitle = "", content_text = "" }) => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:admin="http://webns.net/mvcb/" xmlns:atom="http://www.w3.org/2005/Atom/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
	<channel>
		<title>${title}</title>
		<link>lincolnanders.com</link>
		<language>en-us</language>
		<copyright>Copyright &#xA9; Lincoln Anders</copyright>
		<itunes:subtitle>${subtitle}</itunes:subtitle>
		<itunes:author>Lincoln Anders</itunes:author>
		<itunes:summary>${subtitle}</itunes:summary>
		<description>${subtitle}</description>
		<itunes:owner>
		    <itunes:name>Lincoln Anders</itunes:name>
		    <itunes:email>contact@lincolnanders.com</itunes:email>
		</itunes:owner>
		<itunes:explicit>no</itunes:explicit>
		<itunes:image href="" />
		<itunes:category>Developers</itunes:category>
		${content_text}
	</channel>
</rss>`;

/*
	Takes a path to a JSON file of live feeds, and returns a RSS feed string 
	for that JSON file.
*/
const render_feed = (json_fileName) => new Promise((resolve, reject) => {
	var e = { feedTitle, feedSubtitle, feeds } = JSON.parse(fs.readFileSync(json_fileName));
	var feed_items = feeds.map(item_template);
	var feed_text = rss_template({ title : feedTitle, subtitle : feedSubtitle, content_text : feed_items });
	resolve(feed_text);
});

app.get("/feed/live", (req, res) => {
	render_feed("podcast-feed.json").then(feed => {
		res.send(feed);
	}).catch(err => {
		console.error(err);
		res.send();
	});
});

app.listen(PORT, async () => {
	NGROK_URL = await ngrok.connect(PORT);
	console.log("Running....	Copyright 2020 Lincoln Anders");
	console.log(`Live feed can be found at ${NGROK_URL}/feed/live`);
	const apiUrl = ngrok.getUrl();
	console.log(`ngrok interface avaliable at ${ngrok.getUrl()}`);
});

module.exports = exports = app;