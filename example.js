const jsonTreeToHTMLList = require("./index.js");

// Example
const data1 = {
  tag: "ul",
  children: [
    {
      tag: "li",
      text: "hello",
    },
    {
      tag: "li",
      text: "world",
    },
  ],
};

// Output with indentation 4
jsonTreeToHTMLList(data1, 4);
`
  <ul>
      <li>
          hello
      </li>
      <li>
          world
      </li>
  </ul>
  `;

jsonTreeToHTMLList(data1, 1);

// Example with nested children
const data2 = {
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
            },
            {
              tag: "li",
              text: "item 3",
            },
          ],
        },
      ],
    },
  ],
};

jsonTreeToHTMLList(data2, 1);

// Example with nested children (complex)
const data3 = {
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

jsonTreeToHTMLList(data3, 2);
