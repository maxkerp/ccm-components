/**
 * @overview datasets of <i>ccm</i> component for rendering component informations
 * @author André Kless <andre.kless@web.de> 2017
 * @author Tea Kless <tea.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ "comp_info_datasets.min.js" ] = {
  "cloze": {
    "logo": "https://akless.github.io/ccm-components/component.png",
    "link": "https://github.com/akless",
    "title": "Fill-in-the-Blank Text",
    "abstract": "<i>ccm</i> component for rendering a fill-in-the-blank text.",
    "description": "The component supports solution hints, visual feedback, point allocation, time limitation, different layouts, authentication procedures, customization of buttons and learning analysis.",
    "name": "cloze",
    "version": "1.0.0",
    "url": "https://akless.github.io/ccm-components/cloze/ccm.cloze.min.js",
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://akless.github.io/ccm-components/cloze/",
    "previews": [
      "https://akless.github.io/ccm-components/cloze/resources/preview_1.png",
      "https://akless.github.io/ccm-components/cloze/resources/preview_2.png",
      "https://akless.github.io/ccm-components/cloze/resources/preview_3.png"
    ],
    "demo": [ "ccm.get", "https://akless.github.io/ccm-components/cloze/resources/cloze_configs.min.js", "demo" ]
  },
  "fill_in_the_blank_text_builder": {
    "logo": "https://akless.github.io/ccm-components/component.png",
    "link": "https://github.com/tkless",
    "title": "Fill-in-the-Blank Text Builder",
    "abstract": "<i>ccm</i> component for creating a fill-in-the-blank text.",
    "description": "Renders any given HTML text as a fill-in-the-blank text. The text can be entered via a visual editor. Mark gap words with doubled square brackets. For example: \"Hello, [[World]]!\". Use round brackets to mark given letters. If you have \"Hello, [[(W)o(rl)d]]!\", than the first, third and fourth letter are visible as a solution hint. The search words can be specified as a further solution. An individual list of solution words can also be specified. Any form of solutions can be turned on and off. You can choose between different layouts and authentication procedures. Points can be awarded for each correct gap. For time-dependent fill-in-the-blank texts, the available time can be specified in seconds. In addition to a visual feedback, the available buttons can also be set. Try it out on the demo.",
    "name": "fill_in_the_blank_text_builder",
    "version": "1.0.0",
    "url": "https://tkless.github.io/ccm-components/fill_in_the_blank_text_builder/ccm.fill_in_the_blank_text_builder.js",
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://tkless.github.io/ccm-components/fill_in_the_blank_text_builder/",
    "previews": [ "https://akless.github.io/ccm-components/cloze_builder/resources/preview.png" ],
    "demo": {}
  },
  "quizz": {
    "logo": "https://akless.github.io/ccm-components/component.png",
    "link": "https://github.com/akless",
    "title": "Quiz",
    "abstract": "<i>ccm</i> component for rendering a quiz.",
    "name": "quizz",
    "version": "1.0.0",
    "url": "https://akless.github.io/ccm-components/quiz/ccm.quizz.min.js",
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://akless.github.io/ccm-components/quiz/",
    "previews": [
      "https://akless.github.io/ccm-components/quiz/resources/preview_1.png",
      "https://akless.github.io/ccm-components/quiz/resources/preview_2.png"
    ],
    "demo": [ "ccm.get", "https://akless.github.io/akless/we/was-ist-html/configs.min.js", "quiz" ]
  },
  "kanban_board": {
    "logo": "https://akless.github.io/ccm-components/component.png",
    "link": "https://github.com/akless",
    "title": "Kanban Board",
    "abstract": "<i>ccm</i> component for rendering a kanban board.",
    "name": "kanban_board",
    "version": "1.0.0",
    "url": "https://akless.github.io/ccm-components/kanban_board/ccm.kanban_board.min.js",
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://akless.github.io/ccm-components/kanban_board/",
    "previews": [
      "https://akless.github.io/ccm-components/kanban_board/resources/preview_1.png"
    ],
    "demo": [ "ccm.get", "https://akless.github.io/ccm-components/kanban_board/resources/kanban_board_configs.min.js", "demo" ]
  }
};