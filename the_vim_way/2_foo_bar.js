/*
|------------+----------------------------|
| Keystrokes | Buffer Contents            |
|------------+----------------------------|
| {start}    | [v]ar foo = 1              |
|            | var bar = 'a'              |
|            | var foobar = foo + bar     |
|------------+----------------------------|
| A          | ;<Esc>var foo = 1[;]       |
|            | var bar = 'a'              |
|            | var foobar = foo + bar     |
|------------+----------------------------|
| j          | var foo = 1;               |
|            | var bar = '[a]'            |
|            | var foobar = foo + bar     |
|------------+----------------------------|
| .          | var foo = 1;               |
|            | var bar = 'a'[;]           |
|            | var foobar = foo + bar     |
|------------+----------------------------|
| j.         | var foo = 1;               |
|            | var bar = 'a';             |
|            | var foobar = foo + bari[;] |
|------------+----------------------------|
*/
var foo = 1;
var bar = "a";
var foobar = foo + bar;
