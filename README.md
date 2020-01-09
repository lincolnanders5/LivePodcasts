# Live Podcasts
A project to host a podcast feed where each "episode" is the stream for another podcast.
The purpose of this is to allow the streaming of podcasts you care about (by forking and editing [podcast-feed.json]) from your favorite podcast app.
A project spawned from [RSS-Create](https://github.com/lincolnanders5/RSS-Create.git), my project to create and host temporary podcast feeds from local folders of audio.

## Installation
```bash
git clone https://github.com/lincolnanders5/LivePodcasts.git
cd LivePodcasts
npm i -q
node index.js
```

## Overview
The program can be run with `node index.js`, or specify a port with `PORT=5000 node index.js`.
A feed will be generated at a randomly-generated, one-time [ngrok](https://ngrok.com) URL.
The program will tell you your live feed URL when started.

Once you have your generated feed URL, you can paste that into your podcast app.
After the URL is in your podcast player, streams will be available as podcast episodes.

## IMPORTANT
**Improper settings will cause your podcast player to crash – a lot**. Developing this took a long time to understand why [Overcast](https://overcast.fm) was crashing so much.

- **Set speed settings to normal speed**. The stream is progressing... at a normal speed. Trying to stream too fast will crash your app.
- **Disable all enhancements**. This includes settings such as any boosts or additional speed adjustments.
- **Set new episodes to stream**. Downloading a stream is not natively supported by many players, so disable this setting.
- **Set episode deletion to manually**. The same "episode" will be used every time that podcast streams, so you'll need to keep the "episode" for each stream you want to listen to.

## Notes
- This program was thrown together with no real error handling. YO-YO for this.
- This repo will likely not be updated by me much in the future.
This was a project thrown together to let me stream podcasts into Overcast.
That worked, and the tool has done its job.
- Feed URLs will change every time the program is started. **Only one run is needed to get a feed URL**. Once the URL is in your player, you can stop the program and the feed will continue to work in your app.