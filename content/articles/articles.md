---
items:
  - body: >-
      ## Disclaimer: I love native apps

      This is not an "I develop for the web, so the web is the best" type of article. I love native apps. The user experience is often better than their web counterparts. This becomes apparent in, for instance, eCommerce websites. Often, they feel bloated, sluggish and don't provide the same 'feel' and functionalities as the native variant.

      ## So, why go for web apps?

      I strongly believe that web counter-parts can be equally as good, if not better. The reason why I love the web so much is due to its accessibility. If developed well, the web is accessible on every device with a web browser.

      I have a top-of-the-line tablet that's about 3 years old. It's well performant, receives frequent updates and runs very well. You'd say I'll be able to run new apps. Well, no. I quite often am not able to download or view an app because of three possible reasons:

      ### "This item isn't available in your country"

      I live in the Netherlands. Generally, we are on pretty much good terms with any country of legislation. Sure, web apps can be blocked as well in certain countries for several reasons, but generally, it is accessible. Why can't native apps be?

      ### "This app is not optimized for your device"

      Why? The hardware is capable, the OS is up to date. This is a problem that the web inherently doesn't have. If built well, the web apps scale to every resolution and offer a working solution through 'progressive enhancement'.

      ### "Only for iOS"

      This one gets me more than anything. Often, new applications are just available for one OS and sometimes even starting from a specific version. This excludes a large number of potential users just because they don't have the specific OS and version you support.


      ![This item isn't available in your country.](/img/articles/app-unavailable.jpg)*This item isn't available in your country.*


      ## Can it provide the same features of native apps?

      So, the web has these upsides, but can it provide the same features of native apps? If not, though luck. Well, it will surprise you how much the web can do and provide. Let's go over a few.

      ### Performance

      One of the big issues I have with web apps that drive me to their native counter-parts is performance. This is the responsibility of the developers. For the sake of the argument, let's take two types of applications.

      #### eCommerce

      There is no, and I repeat, NO excuse for sluggish eCommerce web apps in this day and age. There is a wide variety of tools for developers to build highly performant web apps. For example, a big issue with web apps is the use of front-end SPA frameworks like [React.js](https://reactjs.org/). Although build for fast web apps, it contributes to one of the biggest factors of sluggish websites which are resources. The bundle that needs to be loaded can be quite big. This issue is however solved with frameworks like [Next.js](https://nextjs.org/). You can read more in my article on [Implementing the latest web technologies to boost the Mirabeau blog](https://www.davebitter.com/articles/mirabeau-blog-latest-web-technologies). Combine this with caching of data and you go a long way in building a performance eCommerce web app.

      #### Intensive games

      This is where native apps are better suited on first sight. The native app can make use of all the hardware possibilities of the device and ensure great performance. The web is getting better at this through techniques like [WebAssembly](https://webassembly.org/) can solve many issues.

      ### Offline support

      [Progressive Web Apps](https://web.dev/progressive-web-apps/) (PWA) and more explicitly [WebWorkers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). bring offline support to the web. This ensures that, like native apps, PWas can always be loaded, cache resources and offer functionality even without an active internet connection.

      ![Twitter PWA](/img/articles/twitter-pwa.jpg)*Twitter PWA*

      ### Home screen presence

      The great thing about native apps is the presence on the home screen. It is easy for users to come back to the application when they need to. It takes a bit more effort to open a browser and then go to the web app. PWAs solve this problem. One of the core functionalities is to allow the user to add the PWA to their home screen.

      A great bonus is to be able to install the PWA to desktops as well to run as a destop app.

      ### Omni-platform by default

      Native and web apps run into the same issues regarding OS (and browser). There is no way around this, but the web has a big advantage over native. Even though the user might use a different OS or browser than others, it will still be able to use the code you wrote. This is possible for native apps by using something like React Native or by wrapping a web app in a shell for native. Being able to have a Omni-platform app out of the box is a great way to ensure accessibility for every user.

      ### iOS App Store/Google Play store/Windows store presence

      One of the lesser know features of PWAs is the ability to add your app to the iOS App Store/Google Play store/Windows store. This opens up a whole way to be discovered by potential users. For a more detailed look head over to [this](https://www.freecodecamp.org/news/i-built-a-pwa-and-published-it-in-3-app-stores-heres-what-i-learned-7cb3f56daf9b/) article explaining the possibilities and experience.

      ![Twitter PWA in Google Play Store](/img/articles/twitter-google-play-store.jpeg)*Twitter PWA in Google Play Store*

      ### Version updates

      One of the downsides I see with native apps is the requirement to first install and then keeping the app up to date. Again, this is inherently not an issue with the web. Releasing an update will always be immediately available to the user.

      ### Notifications

      Another great possibility of native apps is notifications. This feature is immensely valuable to trigger users to use your app. This, again, is supported when using PWAs. Obviously, like native apps, this should be used unobtrusively.

      ### And more

      You get the picture by now. The web offers many of the functionalities that native does and brings more upsides to the table. Things like splash screens, BlueTooth support, webcam access and more are available in the browser. The web is one mighty machine.

      ## Successful web apps are not just about technological possibilities

      That was a lot of technical information, but let's step back a bit and look at the 'look and feel'. Often, web apps are turned into PWAs on a technical level. Although this is a good start, there is a big part we aren't covering yet. The look and feel of a native app versus a web app are immense. Besides platform-specific styles and interaction patterns, there is a fundamentally different design pattern.

      Native apps don't scroll. Well, they do, but very specific. On the web, it is custom to have multiple sections on a page. You might have a header, latest posts, a contact form and end with a footer. Native apps do have this sometimes, but mostly 'tuck away' sections. Generally, lists and content are scrollable. Forms and other standalone sections are often available after a user interaction on, for instance, a button.

      ![Load flow with app shell](/img/articles/appshell.png)*Load flow with app shell*

      Next to this, native apps often have a shell with a top- and bottom bar with a place for the content in the middle. This 'shell' is always available and loaded first. Content will be loaded second.

      Naturally, there is way more that goes into designing an app versus a website, but this exemplifies how crucial the design is when building a PWA.

      ## Which companys use PWAs?

      A lot actually. Here are some of the examples companies that use PWAs:

      * Starbucks

      * Housing.com

      * Digikala

      * Flipboard

      * Soundslice

      * 2048 Game

      * MakeMyTrip

      * Uber

      * Padpiper

      * Pinterest

      * Yummly

      * Spotify

      ## Which one should I choose and don't say "it depends"?

      It depends. If the functionalities are available for the web, definitely! As I just mentioned, the web offers many advantages over native apps while offering many of the same functionalities. If you need that native app, go for that.

      My goals are not to push web apps over native apps in some 'platform war'. Be open-minded for both and be up to speed with the possibilities. In the end, our goals should be to offer the user with the best product. Personal preference or other peoples opinion matter, but are not leading. With both platforms, there is only one question you should ask yourself.

      > How can I help the person using this in the best way?
    date: 2020-06-12T23:00:00.000Z
    slug: you-might-not-need-a-native-app
    intro: >-
      "We need a native app for performance, the 'feel', offline functionalities, notifications and...". Native apps have provided fundamental functionalities that serve the purpose of creating a wonderful user experience. But, you might not need that native app and opt for the technology of the wondrous web!
    teaserCopy: >-
      "We need a native app for performance, the 'feel', offline functionalities, notifications and...". Native apps have provided fundamental functionalities that serve the purpose of creating a wonderful user experience. But, you might not need that native app and opt for the technology of the wondrous web!
    teaserImage: /img/articles/pwa-vs-native.png
    title: You might not need a native app
  - body: >-
      ![Number Code Input](/img/articles/number-code-input-html-css-js.gif)*Number Code Input*

      As you can see, the core functionality of these inputs is to enter one number at a time. The building of that happy flow can be quite easy to do. When playing around we can see that there a quite a few more functionalities. Let's first set the requirements:

      The Number Code Input should:

      * automatically move to the next and stop at the last number input

      * navigate from left to right with the arrow keys

      * delete a single value in input and automatically going back to and delete the value of the previous input when hitting the backspace key

      * delete the value of a focussed and previous input if backspace is pressed multiple times

      * handle the pasting of several/all numbers in a number input

      You see, this is quite a bit of functionality. As always, I will build this custom input in a progressively enhanced way on three levels. Please read more about this in my blog ["Writing progressively enhanced custom inputs for the web"](https://www.davebitter.com/articles/custom-inputs-web).

      ## Structural (HTML)

      ![Number Code Input with HTML](/img/articles/number-code-input-html.gif)*Number Code Input with HTML*


      ```html

      <fieldset name='number-code' data-number-code-form>
          <legend>Number Code</legend>

          <input type="number" min='0' max='9' name='number-code-0' data-number-code-input='0' required />
          <input type="number" min='0' max='9' name='number-code-1' data-number-code-input='1' required />
          <input type="number" min='0' max='9' name='number-code-2' data-number-code-input='2' required />
          <input type="number" min='0' max='9' name='number-code-3' data-number-code-input='3' required />
          <input type="number" min='0' max='9' name='number-code-4' data-number-code-input='4' required />
          <input type="number" min='0' max='9' name='number-code-5' data-number-code-input='5' required />
          <input type="number" min='0' max='9' name='number-code-6' data-number-code-input='6' required />
          <input type="number" min='0' max='9' name='number-code-7' data-number-code-input='7' required />
      </fieldset>

      ```

      Let's start with the structure. As you might have read in the article I mentioned, I need to provide a working HTML version first. The Number Code Input will consist of a fieldset containing all the separate number inputs. The fieldset is used to indicate that these inputs belong together. With the `legend`, I indicate what this group is.

      The inputs itself have a few needed attributes. Firstly, I declared that the input type must be a number. This is not just for validation but triggers the [number keyboard layout](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#Using_number_inputs) on devices. This increases the user experience. Next to that, I've added a `min` value of 0 and a `max` value of 9. I did this so you can only enter a single number character per input. You might see some attributes like `data-number-code-input`. This has no function right now but will be used later on by the JavaScript.

      Great, the Number Code Input now allows for numbers being entered by the user. Let's proceed to the next step.

      ## Presentational (CSS)

      ![Number Code Input with HTML and CSS](/img/articles/number-code-input-html-css.gif)*Number Code Input with HTML and CSS*

      ```css

      legend {
        font-size: 0;
      }


      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }


      input[type=number] {
        -moz-appearance: textfield;
      }

      ```

      Naturally, the style of the inputs is up to you. I did add a few things, besides nice visuals, to make the form a bit better. I set the `font-size` of the legend to 0 as visually we don't need it, but for screenreaders, we want to have that information available. Next to that, I hid the arrows in the input field as I did not find it needed in my use case. This is, of course, up to you.

      The Number Code Input is starting to look a lot better. Now let's add some interactivity.

      ## Behavioural (JavaScript)

      ![Number Code Input with HTML, CSS and JS](/img/articles/number-code-input-html-css-js.gif)*Number Code Input with HTML, CSS and JS*

      Let's take the behavioural layer one requirement at a time.

      ### Automatically move to the next and stop at the last number input

      I need to add some logic to call focus on the next number input if the case that the current number input is not the last one

      ```js

      const numberCodeForm = document.querySelector('[data-number-code-form]');

      const numberCodeInputs = [...numberCodeForm.querySelectorAll('[data-number-code-input]')];


      const handleInput = ({target}) => {
        let currentIndex = Number(target.dataset.numberCodeInput);
        const nextIndex = currentIndex + 1;

        if(nextIndex < numberCodeInputs.length) {
          numberCodeInputs[nextIndex].focus();
        }
      });

      ```

      ### Navigate from left to right with the arrow keys

      I need to add an event listener that triggers when a key is pressed. I then focus on the next or previous number input if there is one.

      ```js

      const numberCodeForm = document.querySelector('[data-number-code-form]');

      const numberCodeInputs = [...numberCodeForm.querySelectorAll('[data-number-code-input]')];


      const handleKeyDown = e => {
        const {code, target} = e;

        const currentIndex = Number(target.dataset.numberCodeInput);
        const previousIndex = currentIndex - 1;
        const nextIndex = currentIndex + 1;

        const hasPreviousIndex = previousIndex >= 0;
        const hasNextIndex = nextIndex <= numberCodeInputs.length - 1

        switch(code) {
          case 'ArrowLeft':
          case 'ArrowUp':
            if (hasPreviousIndex) {
              numberCodeInputs[previousIndex].focus();
            }
            e.preventDefault();
            break;

          case 'ArrowRight':
          case 'ArrowDown':
            if (hasNextIndex) {
              numberCodeInputs[nextIndex].focus();
            }
            e.preventDefault();
            break;

          default:
            break;
        }
      }


      numberCodeForm.addEventListener('keydown', handleKeyDown);

      ```

      ### Delete a single value in an input and automatically going back to and delete the value of the previous input when hitting the backspace key

      This functionality is pretty straight forward. I delete the value of the focussed number input and focus the previous number input if present.

      ```js

      const numberCodeForm = document.querySelector('[data-number-code-form]');

      const numberCodeInputs = [...numberCodeForm.querySelectorAll('[data-number-code-input]')];


      const handleKeyDown = e => {
        const {code, target} = e;

        const currentIndex = Number(target.dataset.numberCodeInput);
        const previousIndex = currentIndex - 1;
        const nextIndex = currentIndex + 1;

        const hasPreviousIndex = previousIndex >= 0;
        const hasNextIndex = nextIndex <= numberCodeInputs.length - 1

        switch(code) {
          case 'Backspace':
            if (!e.target.value.length && hasPreviousIndex) {
              numberCodeInputs[previousIndex].value = null;
              numberCodeInputs[previousIndex].focus();
            }
            break;
          default:
            break;
        }
      }


      numberCodeForm.addEventListener('keydown', handleKeyDown);

      ```

      ### Handle the pasting of several/all numbers in a number input

      Finally, when pasting a value of multiple characters I want to automatically fill out the number input based on that value. This is important as this is a common way people fill out these forms.

      ```js

      const numberCodeForm = document.querySelector('[data-number-code-form]');

      const numberCodeInputs = [...numberCodeForm.querySelectorAll('[data-number-code-input]')];


      const handleInput = ({target}) => {
        const inputLength = target.value.length;
        let currentIndex = Number(target.dataset.numberCodeInput);

        if (inputLength > 1) {
          const inputValues = target.value.split('');

          inputValues.forEach((value, valueIndex) => {
            const nextValueIndex = currentIndex + valueIndex;

            if (nextValueIndex >= numberCodeInputs.length) { return; }

            numberCodeInputs[nextValueIndex].value = value;
          });

          currentIndex += inputValues.length - 2;
        }

        const nextIndex = currentIndex + 1;
      });

      ```

      ## Looking back

      That's it. I build a progressively enhanced Number Code Input that deals with the several requirements we set. Feel free to have a look over at [CodePen](https://codepen.io/davebitter/full/VweaZqY) to play around with the Number Code Input and look further into the source code.

    date: 2020-06-11T23:00:00.000Z
    slug: number-code-input
    intro: >-
      I often come across Number Code Inputs on various websites used for security measures, voucher codes and more. These Number Code Inputs often have a bit more functionality behind them then you might think at first. Let's create our own as an exercise.
    teaserCopy: >-
      I often come across Number Code Inputs on various websites used for security measures, voucher codes and more. These Number Code Inputs often have a bit more functionality behind them then you might think at first. Let's create our own as an exercise.
    teaserImage: /img/articles/number-code-input.jpg
    title: Building a Number Code Input
  - body: >-
      ## The issue with SEO in SPAs

      The issue with SEO in SPAs has to do with where the page gets built or rendered. The rise of client-side SPA frameworks like [React.js](https://reactjs.org/), [Vue.js](https://vuejs.org/) and others caused an issue I didn't encounter before with server-side frameworks.

      In short, there are two ways of rendering a page. Traditionally, the page gets rendered on the server. As a result, bots like [GoogleBot](https://yoast.com/what-is-googlebot/) will visit your page, read the content and [meta tags](https://www.webpresencesolutions.net/metadata-meta-tags-web-page-titles-page-descriptions-explained/) of the page and use that information for Googles search engine. SPA frameworks work a little different. Normally, a blank page is loaded. The framework will build the entire page client-side as soon as the JavaScript bundle is loaded. Besides potential performance issues, this raised a new problem. Bots will visit a page, find a blank page and return that information.

      ## So is Google just ignoring this?

      Nope, they are trying their best to deal with this issue. As you can read [here](https://webmasters.googleblog.com/2014/05/understanding-web-pages-better.html), Google can execute JavaScript to build the page and then get the content and metadata. So, problem fixed? Well, not entirely. They mention that _sometimes things don't go perfectly during rendering, which may negatively impact search results for your site_. Google is providing tools for you to debug and see what causes issues.

      > Building applications for the web is hard enough.

      ## Do I want to deal with this?

      Well, no. Building applications for the web is hard enough. At the start, I mentioned that I wanted to solve this issue with modern tools and techniques I love to use. Let's pick React.js as the SPA framework. I love to use React.js in combination with [Next.js](https://nextjs.org/) to solve many of the issues with SPA frameworks. You can read up on that in my article on [Implementing the latest web technologies to boost the Mirabeau blog](/articles/mirabeau-blog-latest-web-technologies).

      ![React.js and Next.js](//images.ctfassets.net/w4dg3cjf42ew/5JdNrYGW2SBKmIoT38kqz0/80b019ca3d6e00871b3603f842814b0c/CDFEF415-123A-4D0E-85AD-BB3B32A0B3A1-min.png)*React.js and Next.js working together*


      I will leverage the solution that Next.js offers regarding server-side rendering. This solves the issue in the old fashioned way. The page will be rendered on the server, GoogleBot will get the content and metadata and I will have solved my problem.

      ## Taking it a bit further

      I can call it a day now, but let's look at how I took it a bit further when building the  the [Mirabeau blog](blog.mirabeau.nl). The content, [semantically written](https://html.com/semantic-markup/), is received by the GoogleBot. The metadata implementation needs to be done by me. In theory, it is simple. I have a set of [basic meta tags](https://support.google.com/webmasters/answer/79812?hl=en) that I update for every page. An article page may use the title and description of the article while the home page uses the name of the blog and the tagline.

      In the case of Next.js, I load a component called `SiteMeta` the head element of the page using the Next.js `head` component like so:

      ![Simplified code snippet of loading SiteMeta component](//images.ctfassets.net/w4dg3cjf42ew/1ux4A6clBzDNpDdqYdoc7I/a8cd4433d13cb83b6e822f057bd2a968/meta-tags.png)*Simplified code snippet of loading SiteMeta component*

      For an article, for instance, I set the title tag to the title of the article. I then load the `SiteMeta` component that sets a couple more tags. This is already starting to look more like it. The meta tags are being added dynamically based on the article and locale. Here you can see a simplified version:

      ![Simplified code snippet of SiteMeta component](//images.ctfassets.net/w4dg3cjf42ew/4RkWDgVEekZ7QlDK2CxE6A/7a00962575163a0ebadabbbdcf3418f1/site-meta.png)*Simplified code snippet of SiteMeta component*

      ## Taking it even further by taking social media into account

      Social media is vital for the reach of your blog. Naturally, we need to spend some time here to have the best chance of getting people to click the link to the article.

      ### OpenGraph

      I can specify the page even further by using standards with [Open Graph](https://ogp.me/). It’s a protocol that is widely supported by all major social media websites and crawlers. I use Open Graph to create semantical tags for SEO and sharing. For example, I can provide a title, image and summary for an article page specifically aimed towards social media sites. I now load a second component called `SiteOpenGraphTags` in the head element.

      ![Simplified code snippet of loading OpenGraphTags component](//images.ctfassets.net/w4dg3cjf42ew/7b71NBLQBlK5VK9x0nPcEn/36b05ab8de8b8ed3b10078f091bd2e87/open-graph-tags.png)*Simplified code snippet of loading OpenGraphTags component*

      Here we can set additional tags according to the Open Graph specification. Below you find a simplified version that for instance sets tags specific for [Twitter cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started).

      ![Simplified code snippet of OpenGraphTags component](//images.ctfassets.net/w4dg3cjf42ew/6RHSmvijxYUhoyYCaBMysX/9bf84bed3b1183bb029536532b786bf2/site-open-graph.png)*Simplified code snippet of OpenGraphTags component*

      ## The result

      When I share an article to social media I can now see that it shows a custom title, description and image that I can set in the CMS used. A social media card might look something like:

      ![Mirabeau blog social card example](//images.ctfassets.net/w4dg3cjf42ew/6tAjqUcClkipkwktwCRzhY/3252230919b7c43d4070cf55adccea10/mira-blog-seo.jpg)*Mirabeau blog social card example*

      ## Case: Lely Used

      Sure, a blog is relatively simple. Often, we need to put in a bit more work. [Lely used](https://used.lely.com/en/why-used) is a platform I build similarly. The platform consists of 'content pages', a product search page and product detail pages. The goal is to sell products. As a result, detail pages are often shared on social media platforms. The implementation for many of the pages is the same, but as an article page on a blog, there is a product page on an e-commerce platform. I looked into setting dynamic tags specific to a product. Below you can see the response of a product detail page.

      ![Lely Used social card example](//images.ctfassets.net/w4dg3cjf42ew/2SsaB4tQB3QXMmenbqmonb/9249a5987f901dbe43df60740484307d/lely-used-seo.jpg)*Lely Used social card example*

      I've added quite a bit of information in this card. You can see the:

      - platform

      - model

      - location

      - build-year

      - localised currency and amount (price)

      - specifications

      - image of product

      - content localised based on locale in link

      These tags are being used both for sharing the product and by bots like GoogleBot.

      ## Looking back

      SPA frameworks have an impact on SEO. Although Google is working hard an this, there are still several issues. I can solve all issues by using server-side rendering with a framework like Next.js. I can use React.js to dynamically load regular meta tags and Open Graph tags in the head element of the page. I can then fully customise the tags based on the what kind of page it is. This is my current way of handling SEO with SPA frameworks. What is yours?

    date: 2020-03-31T23:00:00.000Z
    slug: spa-seo
    intro: >-
      One of the biggest drawbacks when building a Single-Page Application (SPA) is to provide solid Search Engine Optimisation, often shortened to SEO. How can we improve SEO with some modern tools and techniques I love the most and use in my daily work as a front-end developer? Read more about it in this blog.
    teaserCopy: >-
      One of the biggest drawbacks when building a Single-Page Application (SPA) is to provide solid Search Engine Optimisation, often shortened to SEO. How can we improve SEO with some modern tools and techniques I love the most?
    teaserImage: /img/articles/dave-seo.jpg
    title: How can I handle SEO in my Single-page application?
  - body: >-
      Back in 2018, Mirabeau updated their main website [mirabeau.nl](https://mirabeau.nl). However, the old blogging platform became the sibling that was left behind. The branding and visual style got severely updated and as you might know, the world of (front-end) development moves at a rapid pace. Projects that are about five years old become outdated both in tooling and functionality. I want to rethink the way we build web platforms and construct a stack that stays up-to-date and is resilient for the coming years.

      ![The old blog](//images.ctfassets.net/w4dg3cjf42ew/5vXCgxn6BTCy8jqrjMiLXf/2db1ca51a38df55e69951346ab28abbc/49D97C22-25AD-4F85-862D-E6C93A006EE6-min.png)*Our aged blog platform*

      ## The new blog platform

      The biggest difference between [the new blog platform](blog.mirabeau.nl) – compared to the old – is the unified visual language. I took, in close collaboration with the visual designers, elements of the main Mirabeau website to use in the platform. Examples are the page scroll effect and the blog cards. Combining that with the corporate identity ensures a unified look & feel.

      The second major improvement is the overall ease of use. For example, you are now able to scan more quickly over the page to find an article of your interest. I implemented this by proving a teaser image and a summary of the blog. This gives authors more room to make a scannable summary of their post.

      ![The new Mirabeau visual branding](//images.ctfassets.net/w4dg3cjf42ew/36VJWDKG568fiDIAdv9Gpg/39118b835a3f11b5d59c8bcde0ee8d66/B323160D-6A46-4AD2-A48C-1FEF85BBF506-min.png)*The updated branding and visual language*

      ### Solving issues with Single Page Applications (SPA)

      Every once in awhile I see techniques or frameworks that truly excite me. The foundation of this platform is built on one of those. The platform is built in [React.js](https://reactjs.org/) with the full power of [Next.js](https://nextjs.org/).

      At Mirabeau, there are two main ways of building the front-end for a website. They either use their [front-end boilerplate](https://github.com/mirabeau-nl/frontend-boilerplate) for setting up a component library/design system and static websites or they use React.js to build more interactive heavy web applications. React.js comes with a few big downsides that you need to take into account. The reason Next.js excites me so much is that it solves many of the issues.

      The biggest drawback is the lack of server-side rendering (SSR) capabilities when using React.js or any other SPA. In short, you load a blank page and a JavaScript bundle. After loading the bundle, the page is built in the browser and the user can use the application.

      This has multiple implications like:

      * 1.  __Performance__: The page needs to load a - in most cases large -  JavaScript bundle to be able to render the first view. Often, you then need to get some data - like a blog post - from a server. This then gets retrieved and rendered on the page. By utilising SSR, we can do all of this just on the server.

      * 2.  __Providing SEO__: SEO is an important factor for many types of websites like the Mirabeau blog platform. Firstly, I wanted to provide robots/crawlers from Google to properly index our pages. Secondly, I wanted social media platforms to be able to create links with images, titles and summaries.

      * 3.  __Building through progressive enhancement__: At Mirabeau, they build websites through progressive enhancement. Unfortunately, you need JavaScript for a React.js website. We can use SSR to provide the platform without having JavaScript in the browser.

      ![React.js and Next.js](//images.ctfassets.net/w4dg3cjf42ew/5JdNrYGW2SBKmIoT38kqz0/80b019ca3d6e00871b3603f842814b0c/CDFEF415-123A-4D0E-85AD-BB3B32A0B3A1-min.png)*React.js and Next.js working together*

      ### Serverless architecture

      Next.js provides a couple of ways to run your platform. You can run your platform with a [Node.js server](https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/), generated as a  [static site (SSG)](https://nextjs.org/learn/excel/static-html-export)or [ serverless](https://serverless.com/blog/serverless-nextjs/). I decided to go with the latter for a few reasons. As the content might update frequently, a statically generated website requires rebuilds of pages when their content changes. This leaves me with Node.js and serverless. Serverless is the right choice with regards to costs, scalability and speed. More details later on in this story.

      ### Increasing engagement with custom SEO

      SEO is an important aspect of any website, but even more for a blog platform. I dove into how I could leverage this for this platform.

      * 1.  __Creating dynamic tags__. Fortunately, Next.js provides a Head component to let you dynamically add nodes, like tags for SEO, to the head of the page. I use this to load page-specific tags dynamically per page.

      * 2.  __Using standards with [Open Graph](https://ogp.me/)__. It’s a protocol that is widely supported by all major social media websites and crawlers. I use Open Graph to create semantical tags for SEO. For example, I was able to provide a title, image and summary for an article page.

      * 3.  __Custom tags for social sites__. By default robots or crawlers of websites like Facebook, LinkedIn and Twitter will try to get this information out of your website. I want to allow authors to have full control over this. In the CMS the author can give a specific image and summary for their article. This then dictates how it looks like when shared on social media sites. This gives more fine-grained control over this.

      * 4.  __Extending tags in a smart way__. Even though I want to give this fine-grained control to the others, I don't want them to worry about it. I wrote a small algorithm that takes a set of base tags for the entire blog platform and extends them based on the type of page. This ensures good SEO while taking away the work for authors.

      ### Utilising a serverless architecture

      I want to dive a bit deeper in the serverless architecture that is used for this blog platform. This is the biggest difference, technology-wise next to React.js, compared to the old platform.

      ![The Serverless Framework with Next.js](//images.ctfassets.net/w4dg3cjf42ew/6m51INzwmzmJr4Z25pfInu/52550162034fa24e94687be53e931e2c/serverless_nextjs_blog_header-min.png)*The Serverless Framework with Next.js*

      * 1.   __‘Zero’ configuration__. Configuring and deploying a fully serverless architecture can become quite difficult. For this reason, I decide to make use of the [Serverless Framework](https://serverless.com/). This allows me to get up and running relatively quickly. It simplified the configuration and deployment aspect.

      * 2.  __Next.js__. I use the [Serverless Next.js plugin](https://serverless.com/blog/serverless-nextjs/). This plugin takes the rest of the heavy lifting. It is exactly tailored to deploying a Next.js project with serverless and lambdas.

      * 3.  __Cloud services__. I decided to use AWS, where we host many services, to deploy the serverless platform on. Below you can see the architecture that I use.

      ![New Mirabeau blog platform architecture on AWS](//images.ctfassets.net/w4dg3cjf42ew/1C35P7AAsdhPyE87h90fEi/269e6dc99c0c03cc79adbed078f7e240/serverless_nextjs_lambda_edge_aws_architecture-min.png)*The new Mirabeau blog platform architecture running on AWS*

      ### Cloud Services

      A comprehensive overview of AWS services used for the new platform:

      * 1.  __CloudFront__. Amazon CloudFront speeds up the distribution of static and dynamic web content to users. Making use of S3 buckets for static files and Lambda at edge to render the requested page server-side.


      * 2.  __S3__. Amazon Simple Storage Service (S3) is storage designed to make web-scale computing easier for developers. It is utilised to serve the images, CSS and JavaScript.

      * 3.  __Lambda@Edge__ lets you run Node.js and Python Lambda functions to customize content that CloudFront delivers by executing the functions in AWS locations near the user. This results in a faster page load, in general, for every user all over the world.

      ![Lamda](//images.ctfassets.net/w4dg3cjf42ew/7uRaMDjuA7iS9kjLEau6Bm/48ef2eb84b38b9fc1314b427a523713d/cloudfront-events-that-trigger-lambda-functions-min.png)*A typical request going through AWS CloudFront*

      ### CI/CD with pipelines

      Finally, I added CI/CD through pipelines. I do this for a few reasons. I want to ensure that all front-end developers can collaborate on this platform by quickly cloning the repository, make changes and roll out an update through the pipelines. Next to that, I want to ensure that everybody that I allow through the repository rights and access configuration, can deploy without creating their own AWS accounts and keys. This all ensures a nice developer experience.

      ![CI/CD](//images.ctfassets.net/w4dg3cjf42ew/KZlhxIeJqB8y7l954ixcm/04acb40e87638f9dbfed747370ba32aa/diagram-cicd-horizontal-85f50f218b3ff47fd993ab5529b85f0147901b20f18b972fdc48504e4bc3110e-min.png)*Two ways of CI/CD*

      ## The new front-end toolbox

      Let’s take a step back and look at what a front-end developer in 2020 can do. It is a great time for front-end developers to experiment with different areas of the process of building a platform. With Next.js I was able to, relatively easy, add SSR through Lamdas. With the Serverless framework and the Serverless Next.js plugin, I was able to configure and deploy the full architecture to AWS. Finally, with pipelines I was able to implement CI/CD.

      **Naturally, there are more tools out there, but this platform attests to the fact that we become increasingly more powerful as front-end developers nowadays. We can build great things with the assistance of the mentioned tools. We can, once again, focus on creating!**
    date: 2020-02-03T23:00:00.000Z
    intro: >-
      The Mirabeau blog was suffering from technical debt. I decided to rebuild it using
      the latest web technologies to make it 2020 ready, which includes boosting
      the overall performance and user-friendliness. This blog post is about the
      journey I went and what the possibilities might be for your next platform.
    slug: mirabeau-blog-latest-web-technologies
    teaserCopy: >-
      The Mirabeau blog was suffering from technical debt. I decided to rebuild it using
      the latest web technologies to make it 2020 ready, which includes boosting
      the overall performance and user-friendliness.
    teaserImage: /img/articles/dave-behind-laptop.jpg
    title: Implementing the latest web technologies to boost the Mirabeau blog
  - body: >-
      ### Progressive enhancement

      Progressive enhancement is a technique we use to enhance an element when the user’s browser has certain functionalities. By far, the biggest part of progressive enhancement is enhancing elements when CSS and JavaScript are available.

      The technique is simple. First, built the HTML to always offer a working solution. Then add CSS to make the element more visually appealing. Finally, add some JavaScript to enhance the user experience by adding custom interactivity.

      ### Progressively enhanced custom inputs

      So, how to deal with custom inputs? For example a custom three-way switch shown below.

      ![Three way switch with HTML, CSS and JavaScript](//images.ctfassets.net/w4dg3cjf42ew/1zNvSfEft1nLo19YjfNUZz/e3f4e68aa0c8133ba17042ad2514963e/html_css_js.gif)

      First, break down the functionality the input requires. As a user, you have three choices. We indicate with a color whether the value is active (green), inactive (red) or no preference (grey). The input will have to animate between the options as well.

      ### HTML

      First start with the HTML. There are three options the user can select and only one option can be selected at a time. This is a perfect use case for HTML radio inputs. Let’s write that first.

      ```html

      ...

      <form>
        <fieldset>
          <legend>Would you like to receive news updates?</legend>
          <div>
            <div>
              <input id='inactive' type='radio' name='email-preference' />
              <label for='inactive'>No</label>

              <input id='no-preference' type='radio' name='email-preference' checked />
              <label for='no-preference'>No preference</label>

              <input id='active' type='radio' name='email-preference' />
              <label for='active'>Yes</label>
            </div>
          </div>
        </fieldset>
      </form>

      ...

      ```

      ![Three way switch with HTML only](//images.ctfassets.net/w4dg3cjf42ew/1ZF5ZS5RboxdmcDA8Q3w1S/2a6c6e530c46eb96b90ff853f7d459ca/html.gif)

      ### CSS

      I can add styling to make it look like the design with the HTML in place. So I first add some needed wrapping `div`s and classes to the existing HTML for the CSS.

      ```html

      ...

      <body data-has-js='false'>
        <form>
          <fieldset>
            <legend>Would you like to receive news updates?</legend>
            <div class='switch-wrapper'>
              <div class='switch'>
                <input id='inactive' class='switch__input' type='radio' name='email-preference' />
                <label for='inactive' class='switch__label'>No</label>

                <input id='no-preference' class='switch__input' type='radio' name='email-preference' checked />
                <label for='no-preference' class='switch__label'>No preference</label>

                <input id='active' class='switch__input' type='radio' name='email-preference' />
                <label for='active' class='switch__label'>Yes</label>

              </div>
            </div>
          </fieldset>
        </form>
      </body>

      ...

      ```

      After this, add CSS to style the input to look like the proposed design. Then hide the labels for the inputs because you can now use CSS to indicate the chosen value. The below sample uses SCSS, a pre-processor for CSS.

      ```css

      ...

      .switch__input:checked {
        background-color: var(--color-white);

        &[data-state='active'] {
          [data-has-js='false'] & {
            background-color: var(--color-green);
          }
        }

        &[data-state='inactive'] {
          [data-has-js='false'] & {
            background-color: var(--color-red);
          }
        }

          [data-has-js='true'] & {
              background-color: transparent;
          }
      }

      ...

      ```


      As you may have noticed, I have added an attribute to the `body` element to check whether there is JavaScript enabled because some of the styling will just be needed for the non-JavaScript version.

      ![Three way switch with HTML and CSS](//images.ctfassets.net/w4dg3cjf42ew/6YU8CaGMTZWoi1SIjZ9GwI/5ed6143c2c17b8133afe66d45908759a/html_css.gif)

      ### JavaScript

      Lastly, some JavaScript is added to make the full version including an animation and containing all the design.

      I'll first add an HTML element for the, to be animated, active circle that only shows-up when there is JavaScript. I also added a few data attributes to the HTML that will be used as selectors in the JavaScript

      ```html

      ...

      <body data-has-js='false'>
        <form>
          <fieldset>
            <legend>Would you like to receive news updates?</legend>
            <div class='switch-wrapper' data-switch-wrapper>
              <div class='switch'>
                <input id='inactive' class='switch__input' type='radio' name='email-preference' data-state='inactive' data-switch-input />
                <label for='inactive' class='switch__label'>No</label>

                <input id='no-preference' class='switch__input' type='radio' name='email-preference' data-switch-input checked />
                <label for='no-preference' class='switch__label'>No preference</label>

                <input id='active' class='switch__input' type='radio' name='email-preference' data-state='active' data-switch-input />
                <label for='active' class='switch__label'>Yes</label>

                <span class='switch__pill' data-switch-pill />
              </div>
            </div>
          </fieldset>
        </form>
      </body>

      ...

      ```

      With JavaScript, I then indicate that the client has JavaScript.

      ```js

      document.body.setAttribute('data-has-js', true);

      ```

      After that, all I need to do is listen for inputs by the user and animate the active circle to the active input.

      ```js

      // Set indicator for CSS that JS is available
      document.body.setAttribute('data-has-js', true);

      // Needed DOM nodes
      const elements = {
        switchWrapper: document.querySelector('[data-switch-wrapper]'),
        inputs: Array.from(document.querySelectorAll('[data-switch-input]')),
        pill: document.querySelector('[data-switch-pill]')
      };

      // Place pill over passed node
      const updatePillPosition = ({target}, animate = true) => {
        const inputIndex = elements.inputs.findIndex(input => input === target);
        const inputState = target.getAttribute('data-state');

        elements.switchWrapper.dataset.animate = animate;
        elements.pill.style.transform = `translate(${inputIndex * target.scrollWidth}px, -50%)`;
        elements.switchWrapper.dataset.state = inputState || 'default';
      };

      // Check for default checked node
      const defaultActiveInput = elements.inputs.find(input => input.checked)
      if (defaultActiveInput) { updatePillPosition({target: defaultActiveInput}, false); }

      // Listen for input events on the nodes
      elements.inputs.forEach(input => input.addEventListener('input', updatePillPosition));

      ```

      And that makes final result! Always consider building progressively enhanced custom inputs for the web that also work in cases where a screenreader (no CSS) is used or JavaScript is not available.

      ![html+css+js](//images.ctfassets.net/w4dg3cjf42ew/5WyKR8vBL5kJXTwbiu8BOF/a97d86a406297f044fb0c80638083bf8/html_css_js.gif)

      ## Final thoughts

      Building in a progressively enhanced way is quite a bit of work. So why is it so important? By writing semantically correct HTML, we offer an accessible website for people who, for instance, use a screenreader. By making it work without JavaScript, we make our website accessible for users that can’t or won’t load JavaScript. Our website will deliver the best possible user experience for every user.

      ## Demo

      You can find the demo and all the code of the three-way switch we worked on over at [CodePen](https://codepen.io/davebitter/full/WNeByaW).
    date: 2019-10-01T23:00:00.000Z
    intro: >-
      As a frontend developer, I often get designs for custom inputs. These inputs improve usability and user experience. The inputs often require JavaScript to make them work like the designer intended. However, this poses a problem. How can we make custom inputs for the web while still offering a working solution without JavaScript?
    slug: custom-inputs-web
    teaserCopy: >-
      How can we make custom inputs for the web while still offering a working solution without JavaScript?
    teaserImage: /img/articles/progressive-enhancement.png
    title:  Writing progressively enhanced custom inputs for the web
---
