/* 
=== Markdown Italic Parser ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-31

=== Function ===
Given a string that may include some italic text in Markdown, return the equivalent HTML string.

=== Input ===
Italic text in Markdown is any text that starts and ends with a single asterisk (*) or a single underscore (_).
There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.

=== Output ===
Convert all italic occurrences to HTML i tags and return the string.
For example, given "*This is italic*", return "<i>This is italic</i>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included. */

function parseItalics(markdown) {
  let str = markdown;
  str = parseItalicType("*", str);
  str = parseItalicType("_", str);

  return str;
}

function parseItalicType(type, markdown) {
  let parts = markdown.split(type);

  for (var i = 1; i < parts.length; i += 2) {
    if (parts[i] === parts[i].trim()) {
      parts[i] = `<i>${parts[i]}</i>`;
    } else {
      parts[i] = `${type}${parts[i]}${type}`;
    }
  }

  return parts.join("");
}

/* 
=== Method ===
1.  Write one function which works for markdown type *, then make it work for _
2.  If I split the input string by the markdown character, then every second index must be surrounded by that character.
3.  Inspect every second index in a loop.
4.  Check that there are no spaces on front or back by trimming the element and checking equality to its untrimmed self.
5.  If equal then surround the element with html i tags, otherwise return the missing markdown characters
6.  return the string rebuilt from array form.

Note that it was not easy to hit * and _ with one regex because the program could not determine which type to
return to string once removed by the String.split() operation.

=== Closing thoughts ===
This function could be expanded to replace any markdown type with any other type like replaceMarkdown(inThisString, fromType, toType)
*/
