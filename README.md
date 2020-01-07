# RSS-Create
A simple Node.js program to generate and host a podcast feed for a folder of audio files.
The program creates an RSS feed to be added inside your podcast player of choice and allows audio files on your computer to be downloaded as podcast episodes without transferring or complicated hosting.

## Installation
```bash
git clone https://github.com/lincolnanders5/RSS-Create.git
cd RSS-Create
npm i -q
node index.js
```

## Overview
The program can be run with `node index.js`, or specify a port with `PORT=5000 node index.js`.
A feed will be generated at a randomly-generated, one-time [ngrok](https://ngrok.com) URL.
The program will tell you your URL when started.
The `ENCODED PATH` part is an *absolute path* to a directory on your computer, URL encoded.
A URL encoder can be found [here](http://urlencoder.org).

Once you have your feed URL generated by the encoder, you can paste that into your podcast app.
The program will output text when a feed is accessed and when a file is downloaded.
After the URL is in your podcast player, files inside the directed folder will be avaliable as episodes inside the 

## Formatting
The name of the podcast will be the name of the folder pointed to in the encoded URL.

The name of each episode will be the name of that file, without file types (like .mp3, .m4b, etc.)

## Notes
- This program was thrown together with no error handling or security measures.
Public, randomly-generated, one-time URLs are used, reducing the probability of vulnerability.
***Any file on your computer can be downloaded by anyone if this program is left running; this is a huge security hole.***
This is not planned to be fixed as this is a simple solution and not meant to be left running for long spans of time.
You accept all risk by using the program. When used properly for short periods, this should not be an issue.
- This repo will likely not be updated by me much in the future.
This was a project thrown together to let me download an audiobook into a podcast player.
That worked, and the tool has done its job.
- ~~This program works in Apple Podcasts. It does not work in [Overcast](https://overcast.fm) due to how [Overcast handles downloads](https://github.com/jakubroztocil/podcats/issues/8).~~ **With [ngrok](https://ngrok.com), generated feed URLs are now public and available to apps like Overcast.**
- Feeds will only refresh and files will only download when the program is running.
- Feed URLs will change every time the program is started.
I suggest running the program to download all your files at once if that will bother you.
- This program uses [ngrok](https://ngrok.com) in its free form.
It is limited to 8 hours of usage, meaning you have 8 hours to download your podcast feed.
Due to the security implications of longer usage in this context, I think this is a good natural limit.
