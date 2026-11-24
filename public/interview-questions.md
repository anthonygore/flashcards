# Questions

## 1. Personal questions

### Please introduce yourself

- i've been a software developer for around 14 years
- in my most recent role i worked remotely for a US tech startup
- i was a senior developer and I was there for a bit over 4 years
- mostly working on the frontend with Vue and TypeScript
- my work day-to-day involved writing and reviewing code but also architecture and i led a few projects for major features we implemented, and mentored developers
- in the last year we rolled out an AI-first workflow for planning, developing, and reviewing code which I was involved with.
- i'm looking for another senior developer role now.

### Why did you leave your last role

- the company took on investors who wanted to focus on US-based engineers rather than remote so they ended my engagement

### What are you looking for in your next role?

- I’m looking for a senior engineer role where I can stay hands-on while taking ownership of larger projects and contributing to technical direction.

### What salary range are you looking for?

- I'm targeting a base salary of $160-180k plus super, depending on the responsibilities


## 2. Project deep-dive

### Tell me about the product you worked on in your last role

- the touchscreen site builder similar to Squarespace or Wix where users could design their touchscreen site

### Tell me about a specific project you worked on

- at my last role i proposed and led a rebuild of our product's CMS

### What problem were you solving

- a challenge of the business is that users would find editing their site overwhelming or too much effort, and that would make them a risk of churning
- as the product had grown, the cms was a patchwork of ad hoc UI components which resulted in inconsistent and sometimes buggy UI, which got in the way of our goal of making it clear and simple to use

### What did you personally contribute

- i proposed and planned the rebuild. i identified all the existing functionality that would have to be replicated and architected in a solution.
- i then built the core logic of the app
- with the core logic done, i made tickets for all the remaining work and enlisted members of the team to implement that
- i also reviewed work from other developers and saw it through to a production roll out

### what was the technical approach

- to add new cms functionality developers would us a typed schema API to declare new CMS fields including their UI config and what backend data they'd interact with.

### What was the hardest technical challenge

- balancing the tradeoff between flexibility and simplicity. as the product grows, we want to easily plug in new content types, widgets, etc. But too much flexibility can result in complexity which means it might be hard to maintain or understand.
- for example, one feature that showed up as an edge case was allowing users to add a custom table of contents for their flipbook. the data structure was unusual.
- the solution was to provide an escape hatch - rather than using the simple schema, a component could call the CMS read and write APIs manually

### What alternatives did you consider

- we considered different levels of scope. we could have done a very light UI layer rebuild and still gotten some benefit. we could also have re-built it completely from scratch. 
- the decision came down to how long we want to spend on it, and how disruptive it would be
- in the end we came back to the goals of the project: to create a simple, delightful editing experience. this meant we kept some aspects.

### What was the outcome

- after the rollout we observed fewer UI bugs, quicker development of new CMS functionality, and visual and interactive consistency across pages

### What would you do differently?

- i'd like to have worked with a UX designer to establish page layout and interaction guidelines
- while we did improve consistency at the level of inputs and widgets, complexity can still step in when developers design pages and forms badly.


## 3. Mentoring and leadership

### Font-select story

Set up
- In our product, users could select fonts for headers, buttons, and body text
- The fonts could be uploaded font files or Google fonts
- A junior engineer implemented this and chose an interface where the user had a font upload widget, a custom font select, then a google font select where using a custom font would override the google font. This was implemented three times for each font category and resulted in a very complex and messy UI.
- I gave feedback in my review that users may find this difficult, espcially those who don't need custom fonts
- The junior followed up by adding considerable help text to explain this to users
- I thought there was opportunity to hide that complexity in a simple and elegant solution

Result
- it took some back and forth, but we ended up with much cleaner design by moving them font upload into a dialog and simplying font select to a single selector.
- the result was that we shipped a better product, the eningeer improved their skill, and it created a better conversation between us about simplicity in UX

### How have you helped another engineer improve?

- (explain font selector story - set up)
- rather than give them the answer I gave them feedback and got them to try and discover a new approach
- (explain font selector story - result)

### Tell me about a time you gave difficult feedback. How did you approach the conversation and follow up?

- (explain font selector story - set up)
- even though I thought what they produced was below standard, rather than saying that, I explained the pricinple of hiding complexity and gave them a clearer target
- (explain font selector story - result)

### Tell me about a time an engineer you were supporting was struggling to deliver. What did you do?

- (explain font selector story - set up)
- I asked them to consider the customer's experience and how they would find it challenging and asked if we can improve it
- but their initial solution was to just add help text which almost made it worse
- so then I explained the pricinple of hiding complexity and gave them a clearer target
- (explain font selector story - result)

### Tell me about a project where you delegated substantial work. How did you set people up to succeed and track progress?

- (explain CMS rebuild)
- I created docs about the core functionality, I assigned detailed tickets, I led discussions during standups, and I personally reviewed all tickets for this project where I could give feedback
- The result was that we finished the project on time, but also that we all were involved in the project which is a good way of knowledge sharing and collaborating

### Tell me about a time you balanced your own technical work with coordinating or supporting other engineers.

- (explain CMS rebuild)
- I was working on my own tickets as well as assigning tickets to other engineers
- My approach was to do code reviews and address engineers first
- The reason is - doing review and unblocking other engineers keeps the rate of work higher
- The result was we finished the project on time


## 4. Teamwork & Communication

### DAM update story

Set up
- I was given the task to improve our Media Manager including search, sorting, and filtering. 
- Our product manager had recently left, so there wasn't much detail about which improvements would be most useful.
- I was able to determine the internal staff who used it the most, and contacted them directly to understand their frustrations.
- Those conversations showed that many of the difficulties appeared when they were managing thousands of media items.

Result
- We shipped all those improvements and received positive feedback afterward. 

### Tell me about a time you took initiative beyond your assigned tasks.

- (DAM update story setup)
- Rather than relying on my own assumptions, I was able to use that feedback to discover where the real product needs were
- (DAM update story result)

### Tell me about a project with unclear requirements. How did you move it forward?

- (DAM update story setup)
- Rather than relying on my own assumptions, I was able to use that feedback to discover where the real product needs were
- (DAM update story result)

### Are you comfortable working with non-technical people?

- (DAM update story setup)
- By collaborating with the non-technical staff, I was able to discover where the real product needs were
- (DAM update story result)

### Loading spinner story

Setup
- At Rocket, the CEO didn't like our page transition loading spinners and wanted us to remove them
- I explained the tradeoff in terms of the user experience - having no spinners could mean the user thought the page didn't work
- Through this explanation I discovered that what he actually didn't like was that sometimes the spinner was so quick it just flashed. This occured due to an async route transition always triggering the spinner even if data wasn't loading
- Together we agreed that spinners shouldn't show for about 20ms - long enough to detect is longer async work is needed, short enough to not feel awkward to the user

Resolution
- the result is we arrived at a better solution and both of us better understood the product and business goals

### Tell me about a time you explained a technical issue to a nontechnical stakeholder.

- (Loading spinner story setup)
- (Loading spinner story result)

### Tell me about a technical disagreement or a time you challenged a proposed approach. How was it resolved?

- (Loading spinner story setup)
- (Loading spinner story result)

### Tell me about a mistake or unsuccessful decision. What did you learn?

- I would normally always review code and smoke-test all changes to our app in a development environment before merging
- But one time I made a change to our GitHub deployment pipeline. I reviewed the code and did an AI review, but we both missed that a required environment variable
- The next merge caused the deployment pipeline to break while I was offline, so deployments were held up for a few hours until another dev fixed it
- The lesson is that reviews are not enough - to always smoke test or have some kind of explicit verification plan.

### Tell me about a deadline that was at risk. How did you handle it?

- At Rocket, the CEO requested that we migrate an ecommerce storefront into our own customer portal and wanted to launch it in a week
- I took point on the project. 
- Halfway through, I realised the deadline was at risk because there was unanticipated complexity
- For example, we had to support state-specific shipping rules
- When I realized it was going to take more work, I raised the issue with the team
- In order to keep the deadline, I suggested to the team that we adjust the scope and re-prioritize
- We couldn't ship without the state-specific shipping rules, but we could leave the design of the backend admin until after launch
- The team accepted the proposal, and we shipped the reduced scope within the one-week deadline. 

## 5. Engineering judgement

### Tell me about a difficult bug or production incident. How did you investigate and resolve it?

- A colleague in customer success reported that a client's page was loading very slowly and sent us the affected site.
- The page displayed a particularly large number of entries. My investigation pointed to the volume of rendered DOM elements as the cause.
- I found Vue Virtual Scroller and implemented that so the page rendered the entries needed for the visible area rather than keeping the entire list rendered at once.
- I checked the affected client page afterward and confirmed that the change resolved its performance issue. 
- Not only did that fix the issue, it also gave us a general performance improvement that benefited all customer sites

### What is your idea of good code?

- good code solves the problem its meant for, but is also easy to understand and reason about
- writing good code means choosing a good archtiecture and key patterns
- for example, at rocket, we decided to use the presentational/container pattern for our components. this means we keep application logic and data fetching in container components and our other components are for rendering only.
- good code is reliable, and so might also have test coverage
- and finally, good code should be verified through a code review

### How do you ensure AI code works without reading every line?

- At Rocket, we'd get AI to create a lot of new code. There are several things I'd do to ensure the code works even if I don't read every line.
- Run smoke tests. i'd test the various functionality, including edge cases.
- ensure tests were created including unit or e2e tests.
- use adversarial AI review i.e. get a different AI to assess the ticket and check the code.
- use GitHub Copilot to summarize what each file or function of the code does to ensure it matches intention.

### How do you handle sensitive data?

- The aim with sensitive data is to minimise access and handle deliberately.
- At Rocket, we used AWS Vault to manage credentials rather than keeping secrets in .env files. That prevents AI agents reading .env
- And when we use customer data for testing, for example uploading test data into a test site, we'd sanitize it first by using a script to replace personal info like name and email with synthetic info

### How do you approach using AI for code development?

- AI tools allow you to create code much faster.
- But I believe it's important to own the technical decisions and the quality of what ships. 
- For that reason, I think it's important to review and verify, even if not every line

## What AI tools do you use?

For personal coding

- I use agentic AI tools like OpenCode. I use a variety of AI models like GPT6 and DeepSeek.
- I use the agentic tools to plan features as well as to write and review code
- For my own code review I will often use GitHub Copilot to help explain and summarize a pull request

At Rocket

- We had a cloud-based AI development pipeline
- The agent had access to our key services like GitHub but also to our knowledge base
- We got the agent to create tickets in Linear
- Once we approved the ticket, we had the agent build the feature using some frontier AI model, write it to a branch, and then open a pull request in GitHub