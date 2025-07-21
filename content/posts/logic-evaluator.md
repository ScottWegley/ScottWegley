+++
date = '2025-07-19T22:49:01-07:00'
draft = true
title = 'Logic Evaluator'
+++

I would offer my apologies about the length of time between this post and the last, but this blog is still in it's growth stage and by the time view number one comes to any page of this site, there will likely be an abudance of posts to comb through.  Assessing my abilities and free time accurately, I think posts once a month is an excellent average to aim for.  With this post being a week and change past that goal, I'll have to make sure the next one is a few days early.

Today is an example of a post on an old project, one-of my first projects in fact: The LogicEvaluator.  Despite the harsh lens I am tempted to view this project through, it still holds a special place in my heart.  This was one of my first defined projects, an idea I had floating around in my head for a long time that I eventually decided to create formal goals for so that I could work to bring it to life.  It can be found [here](https://scottwegley.github.io/LogicEvaluator/) and the code behind it can be found [here](https://github.com/ScottWegley/LogicEvaluator).

During the summer of 2019, I took a Philosophy course at the community college I was attending.  The course primarily focused on formal logic.  This subject obviously has lots of knowledge useful for understanding and working with computers.  Computers use the building blocks of formal logic for everything.  The primary components of symbolic logic are the operators (`AND`, `OR`, `NOT`, `IF`) and propositions (arbitrary statements that evaluate to true or false).  I have also elected to included if and only if (`IFF`) for convenience sake, though it can be represented with a combination of ifs and ands.

If you want evaluate any statement, you just need to assemble your statement with all it's propositions and operators and construct a truth table for.  When you write statements out, you simplify things into the symbols that make up symbolic logic.  For example, the statement my name is Scott `AND` I like computers can be written as ` A ∧ B` where A is a proposition meaning "my name is Scott," ∧ represents the `AND` operator, and B is a proposition meaning "I like computers."  The truth table for that statment is featured below.  T and F are abbreviated representations of True & False.

| A | B | A ∧ B |
|---|---|-------|
| T | T |   T   |
| T | F |   F   |
| F | T |   F   |
| F | F |   F   |

Reading this table, we can see that the `AND` operation, represented by the `∧` symbol, only evaluates to True when both propositions are true.  The symbols can make it hard to process if this is your first exposure to symbolic logic, so consider the actual words to familiarize yourself with the topic.  

Remember that the statement is "My name is Scott `AND` I like computers."  For that whole sentance to make sense, my name has to be Scott and I have to like computers.  If I didn't like computers, that would make the sentance a lie; it would make the sentance false.  If my name was not Scott that sentance would not be true.  If I had a different name and I didn't like computers, there wouldn't be an ounce of truth in the sentance.  The only way for a statement with the `AND` operator to be true is for both parts to be true.  

The other operators we'll be looking at are `OR (∨)`, `IF (→)`, `NOT (~)`, and `IFF (↔)`.  I won't provide as much of an in-depth explanation for those operators (though I do recommend [this]() video if you want to learn about them), but in brief: 


### OR
"My name is Scott `OR` I am 1,000 years old" is true because at least one of those things is true.  "My name is Scott `OR` I am less than 100 years old" is also true because at least one of those things is true.  "My name is David `OR` I am made entirely of metal" is false becuase neither thing is true.
| A | B | A ∨ B |
|---|---|-------|
| T | T |   T   |
| T | F |   T   |
| F | T |   T   |
| F | F |   F   |

### IF
"`IF` it is raining, there is water falling from the sky" is true because both statements are true.  "`IF` I exist, I have wings" is false because the first statement is true, but the second statement is false.  These last two examples might be hard to intuit, but stick with it.  "`IF` my name is Jacob, I like computers" is a true statement.  My name is not Jacob, thus it does not matter if I like computers or not.  I do like computers, but if the first part of an `IF` statement is false, the whole statement is true.  Consequentially, the statement "If my name is Steven, I am the richest man alive" is also true.  My name is not Jacob, nor am I the richest man alive, but because the first part is false, the whole statement is true.
| A | B | A → B |
|---|---|-------|
| T | T |   T   |
| T | F |   F   |
| F | T |   T   |
| F | F |   T   |

### NOT
"It is `NOT` the case that my name is Roger" is true.  The statement "my name is Roger" is false, and when something is `NOT` false it is true.  "It is `NOT` the case that my name is Scott" is false because my name is Scott.  When you apply `NOT` to a proposition, it simply yields the opposite result.
| A | ~A |
|---|----|
| T | F  |
| F | T  |

### IFF
I personally find `IFF` (read as If and only If) to be much more instinctive than `IF`.  "My phone will turn on `IFF` the battery has charge" is true because if my phone turns on, that means the battery has charge.  If the battery does not have charge, the phone will definitely not turn on.  "My phone will turn on `IFF` my name is Daryl" is not true.  My phone will turn on regardless of my name.  While whoever has my phone might not be able to unlock it, the phone turning on has nothing to do with my name.  `IFF's` behavior diverges from `IF's` with the last two cases.  Let's examine the statement "My clothes will be wet `IIF` it is raining out."  This statement is false, I could've gone stayed inside during the rain and kept dry, or spilled water on myself and had wet clothes with no rain.  The problem with this statement is that neither side guarantees the other.  
| A | B | A ↔ B |
|---|---|-------|
| T | T |   T   |
| T | F |   F   |
| F | T |   F   |
| F | F |   T   |

You can take any statement and change it's propositions to get T or F; the important part is understanding the way the operations work.  For a given operation, understanding with some inputs what are the outputs.  Having been programming for a while by the time I took this class, the logic section came fairly easy to me.  I distinctly recall early on into homework assignments full of truth tables, with much more complicated statements with nested propositions, thinking that a computer could do this easily if you could just explain the statement to a computer.  Instead of analyzing statements like ` A ∧ B `, I was evaluating statements like
`~(A∨B)∧(A→(C↔~B))`.  This was not usually just for the sake of evaluating a truth table; it was often part of the process for a proof, but those are beyond the scope of this tool.

#### Truth Table for `~(A∨B)∧(A→(C↔~B))`

| A | B | C | ~(A∨B) | C↔~B | A→(C↔~B) | ~(A∨B)∧(A→(C↔~B)) |
|---|---|---|--------|-------|-----------|---------------------|
| T | T | T |   F    |   F   |     F     |         F           |
| T | T | F |   F    |   T   |     T     |         F           |
| T | F | T |   F    |   T   |     T     |         F           |
| T | F | F |   F    |   F   |     F     |         F           |
| F | T | T |   F    |   F   |     T     |         F           |
| F | T | F |   F    |   T   |     T     |         F           |
| F | F | T |   T    |   T   |     T     |         T           |
| F | F | F |   T    |   F   |     T     |         T           |

Five years later, I thought back to the class randomly and decided it would bve a good use of my time to try and make that tool I had thought of real.  Evaluating any single expression is easy, as any programmer would know.  While I hesistate to use absolutes, I cannot think of any language that does not have `AND`, `OR`, and `NOT`, and adding `IF` and `IIF` is simple enough. (Though similar in name and function, the symbolic logic `IF` is different than the programming structure `IF`)

#### Logical Equivalent of `A ↔ B` and `(A → B) ∧ (B → A)`
| A | B | A ↔ B | A → B | (A → B) ∧ (B → A)|
|---|---|-------|-------|------------------|
| T | T |   T   |   T   |        T         |
| T | F |   F   |   F   |        F         |
| F | T |   F   |   T   |        F         |
| F | F |   T   |   T   |        T         |