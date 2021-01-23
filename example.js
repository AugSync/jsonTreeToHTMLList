const jsonTreeToHTMLList = require("./index.js");

const data = {
  tag: "ul",
  children: [
    {
      tag: "li",
      text: "item 1",
      children: [
        {
          tag: "ul",
          children: [
            {
              tag: "li",
              text: "item 2",
              children: [
                {
                  tag: "ol",
                  children: [
                    {
                      tag: "li",
                      text: "item 3",
                    },
                  ],
                },
              ],
            },
            {
              tag: "li",
              text: "item 4",
            },
          ],
        },
      ],
    },
    {
      tag: "li",
      text: "item 5",
    },
  ],
};

jsonTreeToHTMLList(data, 2);
