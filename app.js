//https://www.sitepoint.com/fetching-data-third-party-api-vue-axios/

const tail = "?ref=darkmodelist"

const vm = new Vue({
  el: '#app',

  data: {
  	results: [
  		 {
  		   title: "OSX Dark Mode",
  		   description: "System Preferences -> General -> Use dark menu",
  		   link: "http://osxdaily.com/2015/11/26/enable-dark-mode-mac-os-x/" + tail,
  		   image: "./images/osx.jpg"
  		 },
  		 {
  		   title: "Firefox DevTools",
  		   description: "By default",
  		   link: "https://www.mozilla.org/en-US/firefox/developer/"  + tail,
  		   image: "./images/firefoxdev.png"
  		 },

       {
         title: "Chrome DevTools",
         description: "Chrome -> Dev tools -> Settings -> Preferences -> Theme -> Dark",
         link: "https://thenextweb.com/insider/2016/02/10/google-chromes-developer-tools-are-finally-getting-a-dark-theme/"  + tail,
         image: "./images/devtools.jpg"
       },

  		 {
  		   title: "Slack Black Theme",
  		   description: "Follow the instruction on site",
  		   link: "https://github.com/widget-/slack-black-theme" + tail,
  		   image: "./images/slack.jpg"
  		 },
  		 // {
  		 //   title: "Chrome Dark Void Theme",
  		 //   description: "Follow the instruction on site",
  		 //   link: "https://chrome.google.com/webstore/detail/dark-void-minimalistic-bl/clkkkcoibikhfhbjaafkinjmmjfbcnal?ref=darkmodelist" + tail,
  		 //   image: "./images/dark-void.png"
  		 //},
       {
         title: "GitHub Dark",
         description: "Follow the instruction on site",
         link: "https://userstyles.org/styles/37035/github-dark" + tail,
         image: "./images/github.png"
       },

       {
         title: "Ghost",
         description: "Settings -> Labs -> Night Shift",
         link: "https://ghost.org/" + tail,
         image: "./images/ghost.png"
       },

      {
         title: "Hacker News Dark",
         description: "Follow the instruction on site",
         link: "https://userstyles.org/styles/113994/hacker-news-dark" + tail,
         image: "./images/hn.png"
       },
       {
         title: "Product Hunt Dark",
         description: "Follow the instruction on site",
         link: "https://chrome.google.com/webstore/detail/product-dark/nbppndomekcebmldijnlmlmhidepkmbg?hl=en-US&gl=US&ref=producthunt" + tail,
         image: "./images/ph.png"
       },
  		 {
  		   title: "Twitter Web Dark Theme",
  		   description: "Click on Moon Icon",
  		   link: "http://twitter.com" + tail,
  		   image: "./images/twitter-web.png"
  		 },
  		 {
  		   title: "Twitter iOS Dark Theme",
  		   description: "Dark Icon",
  		   link: "https://itunes.apple.com/us/app/twitter/id333903271?mt=8" + tail,
  		   image: "./images/twitter-ios.png"
  		 },
      {
         title: "Tweetbot iOS",
         description: "Settings -> Dark",
         link: "https://tapbots.com/tweetbot/" + tail,
         image: "./images/tweetbot.png"
       },
  		 {
  		   title: "Medium Dark Plugin",
  		   description: "Intstall Chrome Add-on",
  		   link: "https://chrome.google.com/webstore/category/extensions" + tail,
  		   image: "./images/medium.png"
  		 },
  		 {
  		   title: "Telegram Mac",
  		   description: "Preferences -> General - Dark Mode",
  		   link: "https://macos.telegram.org/"  + tail,
  		   image: "./images/telegram-mac.png"
  		 },
  		 {
  		   title: "Telegram iOS (Beta)",
  		   description: "Setting -> Appearance -> Night Blue",
  		   link: "http://t.me/tgbeta"  + tail,
  		   image: "./images/telegram-ios.png"
  		 },
       {
         title: "Telegram Windows 10 (Unigram)",
         description: "By Default in Mobile and Desktop",
         link: "http://unigram.me/"  + tail,
         image: "./images/unigram.png"
       },

  		 {
  		   title: "Facebook Messager for Mac (Caprine)",
  		   description: "View -> Toggle Dark Mode",
  		   link: "https://sindresorhus.com/caprine" + tail,
  		   image: "./images/caprine.png"
  		 },
  		 {
  		   title: "Google Search Dark",
  		   description: "Follow the instruction on site",
  		   link: "https://userstyles.org/styles/118959/darksearch-for-google" + tail,
  		   image: "./images/google-search.png"
  		 },
  		 {
  		   title: "Gmail Dark Mode",
  		   description: "Follow the instruction on site",
  		   link: "https://userstyles.org/styles/135151/dark-gmail-mod-2016" + tail,
  		   image: "./images/gmail.png"
  		 },
  		 {
  		   title: "Duck Duck Go",
  		   description: "Settings -> More Theme -> Dark",
  		   link: "https://duckduckgo.com" + tail,
  		   image: "./images/duckduckgo.png"
  		 },
  		 {
  		   title: "Skype Mac",
  		   description: "Settings -> Theme -> Dark",
  		   link: "https://skype.com"  + tail,
  		   image: "./images/skype.png"
  		 },
       {
         title: "Reddit Dark",
         description: "Follow the instruction on site",
         link: "https://userstyles.org/styles/133277/reddit-no-frills-dark" + tail,
         image: "./images/reddit.png"
       },
  		 {
  		   title: "Sublime",
  		   description: "Sublime Text -> Preferences -> Color Schema Monokai Phoenix (SL)",
  		   link: "https://www.sublimetext.com" + tail,
  		   image: "./images/sublime.png"
  		 },
       {
         title: "Vim Dark Theme",
         description: "Follow the instruction on site",
         link: "https://draculatheme.com/vim/" + tail,
         image: "./images/vim.png"
       },

  		 {
  		   title: "Atom",
  		   description: "Follow the instruction on site",
  		   link: "http://citylights.xyz/" + tail,
  		   image: "./images/atom.png"
  		 },
       {
         title: "IntelliJ / PyCharm/ PhpStorm",
         description: "Follow the instruction on site",
         link: "https://draculatheme.com/xcode/" + tail,
         image: "./images/jetbrains.png"
       },
       {
         title: "Xcode",
         description: "Follow the instruction on site",
         link: "https://draculatheme.com/xcode/" + tail,
         image: "./images/xcode.png"
       },
  		 {
  		   title: "Visual Studio Code",
  		   description: "Follow the instruction on site",
  		   link: "http://citylights.xyz/" + tail,
  		   image: "./images/vs.png"
  		 },

       {
         title: "Upterm Terminal",
         description: "By default",
         link: "https://github.com/railsware/upterm" + tail,
         image: "./images/upterm.png"
       },

        {
         title: "Circadian",
         description: "Theme-switching for Emacs based on daytime or geo",
         link: "https://github.com/guidoschmidt/circadian.el" + tail,
         image: "./images/vs.png"
       },

       {
         title: "Crontab Guru",
         description: "By default",
         link: "https://crontab.guru/"  + tail,
         image: "./images/crontab.png"
       },

       {
         title: "Regex 101",
         description: "Setting -> Theme -> Dark",
         link: "https://regex101.com/"  + tail,
         image: "./images/regex101.png"
       },

      {
         title: "Amazing Marvin",
         description: "Menu -> Switch to night theme",
         link: "https://amazingmarvin.com" + tail,
         image: "./images/marvin.png"
       },

       {
          title: "Discord",
          description: "Setting -> Appearance -> Dark",
          link: "https://discordapp.com/" + tail,
          image: "./images/discord.png"
        },

       {
         title: "YouTube Dark",
         description: "Profile -> Dark Theme On",
         link: "https://www.cnet.com/how-to/youtube-has-a-hidden-dark-mode-heres-how-to-enable-it/" + tail,
         image: "./images/youtube.png"
       },

       {
         title: "Facebook Dark",
         description: "Follow the instruction on site",
         link: "https://userstyles.org/styles/136318/clear-dark-facebook-by-book777" + tail,
         image: "./images/fb.png"
       },

       {
         title: "Citationsy",
         description: "Follow the instruction on site",
         link: "https://citationsy.com/blog/newsletter-04-introducing-nightmode/" + tail,
         image: "./images/citationsy.png"
       },

        {
         title: "Crypto Jobs List",
         description: "By Default",
         link: "https://cryptojobslist.com/" + tail,
         image: "./images/crypto.png"
       },

        {
         title: "Baby Buddy",
         description: "Click in moon icon on the right",
         link: "https://github.com/cdubz/babybuddy" + tail,
         image: "./images/babybuddy.png"
       },

        {
         title: "Are you afraid of the dark?",
         description: "Sponsored by TV series from 90s",
         link: "https://www.youtube.com/watch?v=6b2G8ySKNgA" + tail,
         image: "./images/areyou.png"
       },
  	]
  }

});  

var appsCount = vm._data.results.length;

console.log(appsCount);