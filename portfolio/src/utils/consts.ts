import { ProjectItemProps } from "../components/ProjectItem";
import { AwardType, PublicationProps } from "../components/Publication";

export const backgroundCSS =
  "bg-gradient-to-br from-themeBackgroundBlue from-30% via-black via-50% to-themeBackgroundBlue to-70% w-screen h-full cursor-cell min-h-screen";

export const pageMarginCSS = "ml-16 mr-8 ";

// ----- PUBLICATIONS -----
export const publications: PublicationProps[] = [
  {
    id: "/chi-geo",
    title:
      "(Submitted) Teaching Geometric Proof with Tech: Pitfalls and Possibilities",
    authors: [
      "Hwei-Shin Harriman",
      "Yuchen Jin",
      "Wode Ni",
      "Dominik Moritz",
      "Joshua Sunshine",
    ],
    links: {},
    venue: "CHI'25",
  },
  {
    id: "/diagrams-penrose",
    title: "Codifying Visual Representations",
    authors: [
      "Wode Ni*",
      "Sam Estep*",
      "Hwei-Shin Harriman*",
      "Jiří Minarčík",
      "Joshua Sunshine",
    ],
    venue: "DIAGRAMS'24, Poster",
    links: {
      pdf: "/pubs/diagrams-24.pdf",
      poster: "/pubs/diagrams24-poster.pdf",
    },
    abstract:
      "Making visually appealing and meaningful diagrams involves craftsmanship in designing the visual representation, drawing shapes, and laying them out. Can the effort spent on diagrams by an expert be reused by others, especially those without the expertise in design and drawing? In this paper, we outline our prior work on Penrose, a diagramming tool with first-class support for reusing visual representations. The nature of our approach to reusability necessitates a domain-agnostic method to automatically lay out a diagram. We highlight our existing approach for general diagram layout and styling, and propose a new composable approach for codifying visual representations to reuse expertise that cuts across domains.",
    keywords: [
      "Diagram Authoring Tools",
      "Automatic Diagram Layout",
      "Natural Diagramming Interface",
    ],
  },
  {
    id: "/las-edgeworth",
    title:
      "Edgeworth: Efficient and Scalable Authoring of Visual Thinking Activities",
    authors: [
      "Wode Ni",
      "Sam Estep",
      "Hwei-Shin Harriman",
      "Kenneth R. Koedinger",
      "Joshua Sunshine",
    ],
    venue: "LAS'24",
    award: [AwardType.HonorableMention],
    abstract:
      "Visual thinking with diagrams is a crucial skill for learning and problem-solving in STEM subjects. To improve in this area, students need a variety of visual problems for deliberate practice. However, in our interviews, educators shared that they struggle to create these practice exercises because of limitations of existing tools. We introduce Edgeworth, a tool designed to help educators easily create visual problems. Edgeworth works in two main ways: firstly, it takes a single diagram from the user and systematically alters it to produce many variations, which the educator can then choose from to create multiple problems. Secondly, it automates the layout of diagrams, ensuring consistent high quality without the need for manual adjustments. To assess Edgeworth, we carried out case studies, a technical evaluation, and expert walkthrough demonstrations. We show that Edgeworth can create problems in three domains: geometry, chemistry, and discrete math. These problems were authored in just 15 lines of Edgeworth code on average. Edgeworth generated usable answer options within the first 10 diagram variations in 87% of authored problems. Finally, educators gave positive feedback on Edgeworth’s utility and the real-world applicability of its outputs.",
    keywords: [
      "Diagram Authoring",
      "Diagrammatic Problems",
      "Educational Content Authoring",
    ],
    links: {
      pdf: "/pubs/las24-edgeworth.pdf",
      video: "",
    },
    teaser: {
      img: "/pubs/las-teaser.png",
      caption:
        "Edgeworth is a diagrammatic problem authoring tool that automatically generates diagram variations from a single diagram: the author creates an example diagram (1), then Edgeworth generates a myriad of diagram variations (2), from which the author selects diagrams (3) to form a diagrammatic multiple choice problem (4).",
    },
  },
  {
    id: "/splash-edgeworth",
    title:
      "Edgeworth: Authoring Diagrammatic Math Problems using Program Mutation",
    authors: ["Hwei-Shin Harriman"],
    venue: "SPLASH'21, Student Research Competition",
    award: [AwardType.SRCGrandFinalist, AwardType.FirstPlaceUndergrad],
    links: {
      pdf: "/pubs/src-edgeworth.pdf",
      poster: "/pubs/SPLASH_poster.png",
      video: "https://youtu.be/fjcXR4SgNNw?si=e8sLINnF9XfhdT4O",
    },
    teaser: {
      img: "/pubs/edgeworth-teaser.png",
      caption:
        "Edgeworth is a diagrammatic problem authoring tool that automatically generates diagram variations from a single diagram: the author creates an example diagram (1), then Edgeworth generates a myriad of diagram variations (2), from which the author selects diagrams (3) to form a diagrammatic multiple choice problem (4).",
    },
    thumb: "/thumbnails/edgeworththumb.png",
    abstract:
      "Building connections between mathematical expressions and their visual representations increases conceptual understanding and flexibility. However, students rarely practice visualizing abstract mathematical relationships because developing diagrammatic problems is challenging for problem authors. We introduce Edgeworth, a system that automatically generates correct and incorrect diagrams by mutating a given prompt program. We show that Edgeworth can produce diagrammatic problems with minimal author input by recreating problems in a widely used geometry textbook.",
  },
  {
    id: "/assets-clew3d",
    title:
      "Clew3D: Automated Generation of O&M Instructions using LIDAR-Equipped Smartphones",
    authors: [
      "Hwei-Shin Harriman",
      "Dragan Ahmetovic",
      "Sergio Mascetti",
      "Darren Moyle",
      "Michael Evans",
      "Paul Ruvolo",
    ],
    links: {
      pdf: "/pubs/assets21-clew3d.pdf",
      video: "https://youtu.be/umTFni_0Bcg?si=1skykjbiPFG3EhLT",
    },
    teaser: {
      img: "/pubs/clew3d/clew1.png",
      caption: "",
    },
    thumb: "/thumbnails/clew3dthumb.png",
    venue: "ASSETS'21, Demo",
    abstract:
      "Certified orientation and mobility specialists (COMS) work with clients who are blind or visually impaired (BVI) to help them travel independently with confidence. Part of this process involves creating a narrative description of a route and using specific techniques to help the client internalize it. We focus on the problem of automatically generating a narrative description of an indoor route based on a recording from a smartphone.  These automatically generated narrations could be used in cases where a COMS is not available or to enable clients to independently practice routes that were originally learned with the help of a COMS. Specifically, we introduce Clew3D, a mobile app that leverages LIDAR-equipped iOS devices to identify orientation and mobility (O&M) landmarks and their relative location along a recorded route. The identified landmarks are then used to provide a spoken narration modeled after traditional O&M techniques. Our solution is co-designed with COMS and uses methods and language that they employ when creating route narrations for their clients. In addition to presenting Clew3D, we report the results of an analysis conducted with COMS regarding techniques and terminology used in traditional, in-person O&M instruction.  We also discuss challenges posed by vision-based systems to achieve automatic narrations that are reliable. Finally, we provide an example of an automatically generated route description and compare it with the same route provided by a COMS.",
    keywords: [
      "Human-centered computing",
      "Accessibility systems and tools",
      "Computer vision",
      "Guided navigation",
      "Object classification",
      "Orientation and mobility",
    ],
  },
];

// PROJECTS =
export const projects: ProjectItemProps[] = [
  {
    title: "Ender: Interactive Two-Column Geometric Proofs",
    color: "pink",
    year: "2020",
    topic: "Interactive Visualization, STEM Education",
    thumb: "/thumbnails/ender.png",
    link: "/ender",
  },
  {
    title: "Air Partners: Data Analysis of Air Quality in Boston",
    color: "pink",
    year: "2021",
    topic: "Data Visualization and Analysis",
    thumb: "/thumbnails/airpartners.jpeg",
    link: "/airpartners",
    github: "https://github.com/airpartners/data-analysis",
  },
  {
    title: "Swiss Modernism Poster Generator",
    color: "pink",
    year: "2020",
    topic: "Web Design",
    thumb: "/thumbnails/generator.png",
    link: "/swiss",
    github: "https://github.com/hsharriman/swiss",
  },
  {
    title: "All About MNIST & Convolutional Neural Nets",
    color: "pink",
    year: "2018",
    topic: "Machine Learning",
    thumb: "thumbnails/cnnfull.png",
    link: "/mnist",
    github: "https://github.com/hsharriman/qea",
  },
  {
    title: "Paletteful: Color Palette Generator",
    color: "pink",
    year: "2018",
    topic: "Image Processing",
    thumb: "/software/paletteful/crop.gif",
    link: "/paletteful",
  },
];
