# My Personal Blog Manager

Yeah so... I built this little blog thing for a coding challenge and honestly it turned out way better than I expected! 😅

## What This Thing Does

Basically it's a simple blog manager where you can:
- View all your blog posts in a nice list
- Click on any post to see the full details
- Add new posts (because why not share your thoughts with the world?)
- Edit existing posts when you realize you made typos or want to add more stuff
- Delete posts that you regret writing at 3 AM

It's nothing fancy, but it gets the job done and the UI is actually pretty clean if I do say so myself.

## How to Get This Running

### What You'll Need
- Node.js (obviously)
- A brain (optional but recommended)
- Some coffee (highly recommended)

### Setup Instructions

1. **Clone this repo** (or download it, whatever works)
   ```bash
   git clone <your-repo-url>
   cd code-challenge3
   ```

2. **Install json-server** if you don't have it already
   ```bash
   npm install -g json-server
   ```
   
   (If you get permission errors, try adding `sudo` at the beginning but be careful)

3. **Start the fake API server**
   ```bash
   json-server --watch db.json --port 3000
   ```
   
   This will start a server at `http://localhost:3000` that serves up our fake blog data. Pretty neat, right?

4. **Open the HTML file**
   
   Just double-click on `index.html` or open it in your browser. That's it! No fancy build process or anything.
   
   The page should load and you'll see some sample blog posts that I wrote. Feel free to mess around with them - they're not real anyway.

## File Structure

```
code-challenge3/
├── index.html          # The main HTML file (obviously)
├── index.js           # All the JavaScript magic happens here
├── styles.css         # Makes everything look pretty
├── db.json           # Fake database with sample posts
└── README.md         # You're reading this right now!
```

## How It Actually Works

The whole thing uses vanilla JavaScript because sometimes you don't need a fancy framework to get stuff done. Here's the basic flow:

1. When the page loads, it fetches all posts from our json-server
2. Displays them in a nice list on the left side
3. When you click a post, it shows the full content on the right
4. The forms handle adding/editing posts and send the data back to json-server
5. Everything updates in real-time (well, fake real-time since it's just a local server)

The code is probably not the most elegant thing ever written, but it works and it's pretty readable. I tried to add lots of comments so future me (or anyone else) can understand what's going on.

## Things That Might Break

- If you forget to start json-server, nothing will work and you'll get error messages
- The code assumes the server is running on port 3000, so don't change that unless you also update the JavaScript
- I didn't add any fancy error handling for network issues, so if your internet dies mid-request, things might get weird
- The edit form might act up if you click edit on multiple posts quickly (but who does that anyway?)

## Stuff I'd Add If I Had More Time

- Some kind of search functionality
- Categories or tags for posts
- Better error handling (because right now it just shows alert boxes like it's 2005)
- Maybe some animations to make it feel more modern
- A proper backend instead of json-server
- User authentication so multiple people could have their own blogs
- Image upload support because blogs without pictures are kinda sad

## Notes for Other Developers

If you're looking at this code to learn something:

- The async/await stuff might look confusing at first but it's way cleaner than callback hell
- I used `const` everywhere instead of `var` because it's 2025 (or whatever year you're reading this)
- The comments are intentionally casual - feel free to make yours more professional if that's your style

## Bugs I Know About But Haven't Fixed Yet

- Sometimes the selected post highlighting gets stuck if you click really fast
- The forms don't validate input very well (you can submit empty posts if you try hard enough)
- Error messages could be way more helpful
- The CSS could probably be organized better

But hey, it's a learning project and it works! 🎉

## Questions?

If something doesn't work or you're confused about how something works, feel free to reach out. I tried to make this as straightforward as possible but sometimes what makes sense to me doesn't make sense to other people.

Happy coding! ☕️

