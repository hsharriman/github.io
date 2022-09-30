const ballet_proj_text = `Collected and visualized data of my years as a ballerina using Illustrator and matplotlib.  

This project was created for "Tell the Story of What You Make", a design course offered at Olin College of Engineering. The prompt was to create a poster based on the Feltron reports using our own personal dataset.  

As someone who pursued professional ballet through childhood and adolescence, I felt that this project would be a good way to reflect on my time and experiences.
`;
const disney_proj_text = `Researched, designed, and illustrated a semi-finalist entry to the 29th Annual Walt Disney Imagineering Imaginations Design Competition.  

This year, the competition prompted contestants to "create an iconic installation at the contestants' own campus or city that serves as an inspiration, honors the past, and is a vision of the future."

We chose to focus our submission on the city of Boston, a historic and long-standing city, and home to our college. We designed an elevated park located along the South Cove waterfront, an area that faces an ever-increasing risk of flooding. 

"Harmonia Park" is a community-centered park located at the South Cove waterfront, which serves to increase climate change awareness, honor Boston's rich history, and protect the city's historical land from rising water levels. The park has areas above and below ground, making it accessible throughout the year. It features cutting-edge, sustainable materials and provides both indoor and outdoor spaces for community events.
`;
const faces_proj_text = `Implemented two facial recognition algorithms using MATLAB to correctly identify when 2 portraits were of the same person. The implementations were tested on a dataset of faces made up from our classmates. This project was completed as part of the SP'18 offering of Quantitative Engineering Analysis at Olin College of Engineering.  

These facial recognition algorithms make use of the observation that faces are similar enough to each other in appearance (most faces have 2 eyes, a nose, and a mouth). Because of this, if 2 pictures of a person are taken at the same angle, with the same lighting and closeness, then it can be assumed that only some parts of the image are of importance. By using the eigenvectors and eigenvalues and some linear algebra concepts, we can effectively reduce the number of dimensions needed to represent the face.

The primary difference between the two algorithms is how they determine a "match". In Eigenfaces, the two images with the smallest difference are considered a match. In Bayesian, a match is determined by the likelihood that two pictures are of the same person.

The two plots show the performance of each algorithm alongside the number of eigenvectors used to represent the low-dimensional "face space". Figure 3 is for Eigenfaces, and Figure 4 is for Bayesian Facial Recognition.

To learn more about this project, check out its [Github](https://github.com/hsharriman/facialrecognition) page.
`;
const ford_ferrari_proj_text = `Illustrated and designed a concept poster combining inspiration from 1950's 24 Hours of Le Mans posters and from the Ford v Ferrari movie posters. This poster was created as a final project for the FA'19 offering of "Tell the Story of What You Make", a design course at Olin College of Engineering.`;

const lda_proj_text = `Created a program which accepts a search term as an input, and scrapes Google, Wikipedia, and Medium to dynamically output topics that are related to the original search term. The scraped articles were used to train a machine learning model designed for topic modeling: LDA. This project was created as a final project for the FA'19 offering of Machine Learning at Olin College of Engineering.

Some words from the project [Github](https://github.com/epan547/Topic-Modeling-Buddy):

In our experience, sometimes the hardest part of starting a project in a new space is simply knowing where to start. Googling the general term returns some results, but depending on the field and level of technical detail it can be difficult to parse the information. Often times, it takes reading several articles before the core concepts behind a topic become clear.

The goal of this project was to create a tool that would make it easy for interested individuals to familiarize themselves with a new concept. Using topic modeling, we can take a concept word and present a list of keywords and resources that could help a user gain a broader understanding of the topic they originally searched. For example, if the keyword "machine learning" is entered, some possible results would be "weight, network, layer, backpropagation, etc.", accompanied by "introductory" resources like Wikipedia and various Medium post tutorials.`;

const mnist_proj_text = `For my final project for the FA'18 offering of Quantitative Engineering Analysis at Olin College of Engineering, I did a deep dive convolutional neural networks. Throughout this process I created several deliverables, including: 

* A problem set (and solution set) for my classmates to learn neural network fundamentals, including terminology, sigmoid functions, multivariable chain rule, and iterative gradient descent. The problem set included provides about 3.5 to 4 hours of material, and starter code in a Jupyter notebook. Here are links for the [lesson plan](https://github.com/hsharriman/QEA/blob/master/reports/QEAHomework.pdf) and [companion notebook](https://github.com/hsharriman/QEA/blob/master/QEA%20Night%20Assignment.ipynb).

* Two separate neural networks, a feedforward ([code](https://github.com/hsharriman/QEA/blob/master/ff2.py)) and a convolutional neural network ([code](https://github.com/hsharriman/QEA/blob/master/CNN.ipynb)), using only Python and Numpy to recognize handwritten digits. In addition to implementing a feedforward and convolutional network, I also implemented dataset pre-processing, batch and epoch capabilities, incremental testing, as well as saving and loading checkpoints.

* A [technical write-up](https://github.com/hsharriman/QEA/blob/master/reports/QEAReport.pdf) detailing the concepts, process, and analysis used throughout the project.

* A short presentation introducing my classmates to my project its key outcomes.

This project is meant to be a deep exploration into the math behind neural networks, specifically convolutional neural networks. As such, there is no use of high-level packages such as Pytorch or Tensorflow, since the goal was to understand the math that drives these powerful tools. My implementation was able to achieve 89% accuracy on the test set.

All of the code and materials can be found on [Github](https://github.com/hsharriman/QEA)`;

const moma_proj_text = `Designed an alternative branding concept for Neri Oxman's exhibit at the MoMA for the SP'20 offering of Advanced Typography at Parsons School of Design. The final product involved a poster and wall graphic.

From the [original exhibition's website](https://www.moma.org/calendar/exhibitions/5090)

"From tree bark and crustacean shells to silkworm webs and human breath, nature shapes Neri Oxman’s innovative design and production processes. As a designer, architect, and founding director of The Mediated Matter Group at the MIT Media Lab, Oxman has developed not only new ways of thinking about materials, objects, buildings, and construction methods, but also new frameworks for interdisciplinary—and even interspecies—collaborations. Her pioneering approach, which she calls “material ecology,” brings together materials science, digital fabrication technologies, and organic design, to create new possibilities for the future. While individually these works are beautiful and revolutionary, together they put forward a new philosophy of designing, making—and even unmaking—the world around us."

The mix of organic and engineered approaches that are synthesized in Oxman's work is captured by the contrast between structured, sans-serif typeface and distorted, organic shapes.`;

const paletteful_proj_text = `Created a website that allows users to generate color palettes based on their favorite images. The user is able to view the hex and RGB codes of the palettes, and easily copy/paste them. Additionally, the color palettes may be downloaded as .png files to be accessed by or transferred to other programs for reference.

The program uses OpenCV and knowledge of traditional color palettes (dominant/accent, analogous) to determine which colors within an image most "define" the palette.

The project may be cloned and run locally [here](https://github.com/QingmuDeng/SoftDesSP18_FinalProject).`;

const pid_proj_text = `Implemented a PID control loop based on derived transfer functions in Arduino. The control loop allowed an inverted pendulum robot to keep its balance within a 1ft box,  as well as spin in place. Used Mathematica to derive the transfer function and plot poles.

This project was completed as part of the FA'20 offering of Quantitative Engineering Analysis 
at Olin College of Engineering.`;

const ransac_proj_text = `Programmed a robotic vacuum cleaner equipped with a LIDAR sensor to navigate an obstacle course using RANSAC to detect obstacles (boxes) and gradient descent to determine the shortest path to the target (a bucket). This project was completed as part of the FA'18 offering of Quantitative Engineering Analysis at Olin College of Engineering.

* To begin, the robot scanned its surroundings via LIDAR--then iteratively performed RANSAC,
an algorithm that determines curves of best fit without being affected by outliers--to locate
all likely "obstacles". RANSAC is also used at this step to search for the target. If an arc is detected, 
this curve is determined to be the target.

* A steep paraboloid which fills the entire obstacle course is placed with its center overlapping the calculated
center of the bucket. This allows the robot to perform gradient descent to reach the target.

* Additionally, wherever an obstacle has been detected, an extreme local maximum is placed to prevent the robot from driving into obstacles.

* Finally, the gradient vectors for each point in the plane are calculated, which in turn iteratively guides the robot to the bucket.`;

const robo_proj_text = `Implemented a PID control loop based on derived transfer functions in Arduino. The control loop allowed an inverted pendulum robot to keep its balance within a 1ft box, as well as spin in place. Used Mathematica to derive the transfer function and plot poles.

This project was completed as part of the FA'20 offering of Quantitative Engineering Analysis at Olin
College of Engineering.`;

const spaceman_proj_text = `Concept poster exploring color, typography, and illustration. Created as a personal project.`;

const starcycle_proj_text = `Designed a 40"x40" print piece visualizing the life cycle of stars for the SP'20 offering of Data Visualization and Aesthetics, a graduate level course at Parsons School of Design.

The cycle starts at the bottom left, with the stars forming within nebulae. Each ring follows the life cycle for a different classification of star through the each of the major stages, from birth, to the main sequence, to old age, and lastly death.

Text along the edges of the visualization describe how each specific type of star transitions from one stage to the next, and provides examples of stars in our universe that are currently in each of the stages.`;

const swiss_proj_text = `Designed a website that generates posters in the style of Swiss Modernism using JavaScript and HTML/CSS. This project was created for the SP'20 offering of Core Studio Interaction at Parsons School of Design.

Try out the generator: [Swiss Modernism Generator](https://hsharriman.github.io/core-interaction/project2/index.html)

From the project's website:

"Using pure Javascript, the generator combines attributes that are commonly found in posters made
in the Swiss International Style to create near-infinite variations of any given poster, all with the press of a button. The poster's text can be filled in by visitors to the site via input fields.

As with all work in the Swiss Style, the posters are created on a strict grid, which sometimes appears rotated with respect to the canvas. There is a random chance for graphic elements to appear. These can take on a number of different shapes and colors. Text is always sans-serif and usually black for readability. The Swiss Style emphasizes cleanliness and objectivity, so the titles, subtitles, and body text are clearly distinguished
by size. All of these attributes have been coded into the generator, abstracted so that visitors to the site need not get overwhelm themselves with the details."`;

const wall_proj_text = `Created a Python program that adds layer of interactivity to an illustration that I created for the project. The scene loops infinitely, while clicking on the sky spawns hot air balloons which peacefully float out of the frame.

The project may be cloned and run locally [here](https://github.com/hsharriman/InteractiveProgramming).`;

const yagp_proj_text = `Designed and created an interactive data visualization in Tableau using data from Youth America Grand Prix's website. Created as part of my final project for the SP'20 offering of Data Visualization and Aesthetics, a graduate course at Parsons School of Design.

You can find the full, interactive viz on 
[Tableau Public](https://public.tableau.com/views/WherearetheTopYAGPWinnersGettingTheirTrainingStory/Story1?:language=en&:display_count=y&:origin=viz_share_link).`;

const airpartners_proj_text = `Air Partners is a nonprofit organization run by Scott Hersey, PhD, that is involved with several communities in and around East Boston. The work of the organization is focused on policy and advocacy work to help "airproof" local communities, by providing meaningful air quality data through sensors installed strategically around the communities. For a community to be airproofed, it must be aware of the negative health effects of ultrafine particles, have access to indoor filtration (like HEPA filters), and have strategies to reduce exposure to ultrafine particles through democratized air quality data.

As part of my senior capstone, I have automated the data cleaning and visualization process of air quality data coming from sensors installed around Revere, MA, and these visualizations are being used to inform Revere's strategic plan. The source code for this project can be found on [Github](https://github.com/airpartners/data-analysis).

This project is a work-in-progress, so check back in a few months for updates.`;

const penrose_proj_text = `Link to the paper: [PDF](../img/research/edgeworth.pdf).

Edgeworth was a research project I created as part of my research internship at Penrose, a PhD project at Carnegie Mellon that generates math diagrams using plain text. Edgeworth mutates Penrose diagrams in various ways to create alternate plausible diagrams for use in a multiple choice format. This research was published and presented at ACM SPLASH 2021 as part of the Student Research Competition, where it won first place in the undergraduate division. It was also a grand finalist entry at the annual ACM Student Research Competition Grand Finals.

Check out the video of the talk I gave at ACM SPLASH for an overview of the research here or on [Youtube](https://youtu.be/fjcXR4SgNNw). You can also check out the poster I used during the first phase of the competition.

I used Typescript to do all of the program mutation work, Penrose to create the diagrams, and React to build the Edgeworth user interface.

The abstract for the paper:

"Building connections between mathematical expressions and their visual representations increases conceptual understanding and flexibility. However, students rarely practice visualizing abstract mathematical relationships because developing diagrammatic problems is challenging for problem authors.

We introduce Edgeworth, a system that automatically generates correct and incorrect diagrams by mutating a given prompt program. We show that Edgeworth can produce diagrammatic problems with minimal author input by recreating problems in a widely used geometry textbook."`;

const clew3d_proj_text = `Link to the published extended abstract: [PDF](../img/research/clew3d/clew3d_published.pdf).

For individuals who are blind or visually impaired (BVI), the ability to learn navigation routes is critical for their day-to-day activities. Certfied Orientation and Mobility specialists (COMS) work with individuals who are BVI to create routes that can be internalized using specific techniques and language.

This project involved building an extension of Clew, an App available on the App Store used by indiviudals who are BVI and COMS to record and replay navigation routes using the camera's smartphone and built-in sensor kit. The extension leveraged the LIDAR scanner in recent generation iPhones and iPads to capture improved spatial data as well as contextual information about the user's environment during the recording phase. This information is then processed and an auto-generated step-by-step route is incrementally replayed to the user as they navigate their environment. 

I used Swift and ARKit to capture and export the data, Firebase to store the data, and Python to process the data and generate a route narration. I also collaborated with multiple certified O&M specialists throughout the process.

This research was published as part of the ACM ASSETS'21 conference in the poster and demo track. A 1 minute summary video is available on this page, or on [Youtube](https://youtu.be/umTFni_0Bcg). The slides I used for the demo are also available [here](https://docs.google.com/presentation/d/1YMjBeK-KNyID51KiyR0z-tliyOp6NqE_jQWjB3NSC_8/edit?usp=sharing).`;
