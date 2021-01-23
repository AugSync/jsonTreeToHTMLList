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
console.log(jsonTreeToHTMLList(data1, 4));
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

console.log(jsonTreeToHTMLList(data1, 1));
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

console.log(jsonTreeToHTMLList(data2, 1));
`
<ul>
 <li>
  item 1
  <ul>
   <li>
    item 2
   </li>
   <li>
    item 3
   </li>
  </ul>
 </li>
</ul>
`;

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

console.log(jsonTreeToHTMLList(data3, 2));
`
<ul>
  <li>
    item 1
    <ul>
      <li>
        item 2
        <ol>
          <li>
            item 3
          </li>
        </ol>
      </li>
      <li>
        item 4
      </li>
    </ul>
  </li>
  <li>
    item 5
  </li>
</ul>
`;