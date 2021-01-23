function getIndentation(multiply, indentations) {
  let indentation = "";

  if (multiply > 0) {
    for (let index = 0; index < multiply; index++) {
      for (let index = 0; index < indentations; index++) {
        indentation = indentation.concat(" ");
      }
    }
  }

  return indentation;
}

function getTopAndBottom(oldTop, oldBottom, tag, value, index, indentations) {
  let top = oldTop;
  let bottom = oldBottom;
  let indentation = getIndentation(index, indentations);

  top = top.concat(`${indentation}${tag ? "<" + tag + ">" : value}
`);
  if (tag)
    bottom = `${indentation}</${tag}>
`.concat(bottom);

  return [top, bottom];
}

function jsonTreeToHTMLList(jsonData, indentations) {
  let topMainHTML = "";
  let bottomMainHTML = "";
  let iterations = 0;

  function parseData(jsonData, indentations, topHTML, bottomHTML, iterations) {
    Object.entries(jsonData).map(function ([key, value]) {
      if (key === "tag") {
        let [top, bottom] = getTopAndBottom(
          topHTML,
          bottomHTML,
          value,
          false,
          iterations,
          indentations
        );

        topHTML = top;
        bottomHTML = bottom;

        iterations++;
      }

      if (key === "text") {
        let [top, bottom] = getTopAndBottom(
          topHTML,
          bottomHTML,
          false,
          value,
          iterations,
          indentations
        );

        topHTML = top;
        bottomHTML = bottom;
      }

      if (key === "children") {
        if (value.length === 1) {
          value.map(function (value, idx) {
            let [top, bottom] = parseData(
              value,
              indentations,
              topHTML,
              bottomHTML,
              iterations + idx
            );
            topHTML = top;
            bottomHTML = bottom;
          });
        } else {
          let collections = [];

          value.map(function (value, idx) {
            let [top, bottom] = parseData(
              value,
              indentations,
              "",
              "",
              iterations
            );
            collections.push({ top, bottom });
          });

          collections.map(function ({ top, bottom }, idx) {
            if (idx === collections.length - 1) {
              topHTML = topHTML + top;
              bottomHTML = bottom + bottomHTML;
            } else {
              topHTML = topHTML + top + bottom;
            }
          });
        }
      }
    });

    return [topHTML, bottomHTML];
  }

  let [top, bottom] = parseData(
    jsonData,
    indentations,
    topMainHTML,
    bottomMainHTML,
    iterations
  );

  topMainHTML = top;
  bottomMainHTML = bottom;

  console.log(topMainHTML + bottomMainHTML);
}

module.exports = jsonTreeToHTMLList;
