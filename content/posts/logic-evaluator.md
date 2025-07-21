+++
date = '2025-07-19T22:49:01-07:00'
title = 'Logic Evaluator'
lastmod = 2025-07-20
+++


I’d like to apologize for the time between this post and the last, but since this blog is still in its growth stage, by the time view number one comes to any page, there will likely be an abundance of posts to comb through.  Assessing my abilities and free time accurately, I think posting once a month is an excellent average to aim for.  With this post being a week and change past that goal, I’ll have to make sure the next one is a few days early.  

Today’s post is about an old project—one of my first, in fact: The LogicEvaluator.  Despite the harsh lens I’m tempted to view this project through, it still holds a special place in my heart.  This was one of my first defined projects, an idea I’d had floating around in my head for a long time that I eventually decided to formalize and bring to life.  You can find it [here](https://scottwegley.github.io/LogicEvaluator/) and the code behind it [here](https://github.com/ScottWegley/LogicEvaluator).  

During the summer of 2019, I took a Philosophy course at the community college I was attending.  The course primarily focused on formal logic.  This subject obviously has lots of knowledge useful for understanding and working with computers.  Computers use the building blocks of formal logic for everything.  The primary components of symbolic logic are the operators (`AND`, `OR`, `NOT`, `IF`) and propositions (arbitrary statements that evaluate to true or false).  I’ve also elected to include if and only if (`IFF`) for convenience, though it can be represented with a combination of ifs and ands.  

If you want evaluate any statement, you just need to assemble your statement with all it's propositions and operators and construct a truth table for.  When you write statements out, you simplify things into the symbols that make up symbolic logic.  For example, the statement my name is Scott `AND` I like computers can be written as ` A ∧ B` where `A` is a proposition meaning "my name is Scott," `∧` represents the `AND` operator, and `B` is a proposition meaning "I like computers."  The truth table for that statment is featured below.  `T` and `F` are abbreviated representations of `True` & `False`.  

| A | B | A ∧ B |
|---|---|-------|
| T | T |   T   |
| T | F |   F   |
| F | T |   F   |
| F | F |   F   |

Reading this table, we can see that the `AND` operation, represented by the `∧` symbol, only evaluates to True when both propositions are true.  The symbols can make it hard to process if this is your first exposure to symbolic logic, so consider the actual words to familiarize yourself with the topic.  

Remember that the statement is "My name is Scott `AND` I like computers."  For that whole sentance to make sense, my name has to be Scott and I have to like computers.  If I didn't like computers, that would make the sentance a lie; it would make the sentance false.  If my name was not Scott that sentance would not be true.  If I had a different name and I didn't like computers, there wouldn't be an ounce of truth in the sentance.  The only way for a statement with the `AND` operator to be true is for both parts to be true.  

The other operators we'll be looking at are `OR (∨)`, `IF (→)`, `NOT (~)`, and `IFF (↔)`.  I won't provide as much of an in-depth explanation for those operators though I do recommend [this](https://www.youtube.com/watch?v=1asxHpewYi8) video if you want to learn about them.  This creator uses slightly different terminology than I will, and uses some different symbols to represent the operator than I was taught, but the functional explanations in the video are true to my understanding of symbolic logic.  Regardless, here is a brief explanation for the purposes of this blog.  


### OR
"My name is Scott `OR` I am 1,000 years old" is true because at least one of those things is true.  "My name is Scott `OR` I am less than 100 years old" is also true because at least one of those things is true.  "My name is David `OR` I am made entirely of metal" is false becuase neither thing is true.
| A | B | A ∨ B |
|---|---|-------|
| T | T |   T   |
| T | F |   T   |
| F | T |   T   |
| F | F |   F   |

### IF
"`IF` it is raining, there is water falling from the sky" is true because both statements are true. "`IF` I exist, I have wings" is false because the first statement is true, but the second statement is false. These last two examples might be hard to intuit, but stick with it. "`IF` my name is Jacob, I like computers" is a true statement. My name is not Jacob, thus it does not matter if I like computers or not. I do like computers, but if the first part of an `IF` statement is false, the whole statement is true. Consequently, the statement "If my name is Steven, I am the richest man alive" is also true. My name is not Steven, nor am I the richest man alive, but because the first part is false, the whole statement is true.
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
I personally find `IFF` (read as "if and only if") to be much more intuitive than `IF`. "My phone will turn on IFF the battery has charge" is true because if my phone turns on, that means the battery has charge. If the battery does not have charge, the phone will definitely not turn on. "My phone will turn on IFF my name is Daryl" is not true. My phone will turn on regardless of my name. While whoever has my phone might not be able to unlock it, the phone turning on has nothing to do with my name. `IFF`'s behavior diverges from `IF`'s with the last two cases. Let's examine the statement "My clothes will be wet IFF it is raining out." This statement is false; I could have stayed inside during the rain and kept dry, or spilled water on myself and had wet clothes with no rain. The problem with this statement is that neither side guarantees the other.
| A | B | A ↔ B |
|---|---|-------|
| T | T |   T   |
| T | F |   F   |
| F | T |   F   |
| F | F |   T   |

You can take any statement and change its propositions to get T or F; the important part is understanding how the operations work. For a given operation, it’s about knowing what outputs result from certain inputs. Having been programming for a while by the time I took this class, the logic section came fairly easily to me. I distinctly recall, early on in homework assignments full of truth tables with much more complicated statements and nested propositions, thinking that a computer could do this easily if you could just explain the statement to it. Simple statements would be easy to just write code for, but instead of analyzing statements like `A ∧ B`, I was evaluating statements like `~(A∨B)∧(A→(C↔~B))`, whic is slightly more difficult to represent. While theoretically I could do it, and it might even be faster than just making a truth table by hand, I would have to do that work every time for every problem which seems like a waste since a computer could easily do this for any statement with a bit of legwork on my part.

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

Five years later, I thought back to the class randomly and decided it would be a good use of my time to try and make that tool I’d once imagined real. Evaluating any single expression is easy, as any programmer would know. While I hesitate to use absolutes, I cannot think of any language that does not have `AND`, `OR`, and `NOT`, and adding `IF` and `IFF` is simple enough. (Though similar in name and function, the symbolic logic `IF` is different from the programming structure `If...Then`.)

#### Logical Equivalence of `A → B` and `~A ∨ B`

| A | B | ~A | ~A ∨ B | A → B |
|---|---|----|--------|-------|
| T | T |  F |   T    |   T   |
| T | F |  F |   F    |   F   |
| F | T |  T |   T    |   T   |
| F | F |  T |   T    |   T   |


#### Logical Equivalence of `A ↔ B` and `(A → B) ∧ (B → A)`
| A | B | A ↔ B | A → B | (A → B) ∧ (B → A)|
|---|---|-------|-------|------------------|
| T | T |   T   |   T   |        T         |
| T | F |   F   |   F   |        F         |
| F | T |   F   |   T   |        F         |
| F | F |   T   |   T   |        T         |

The code for this ends up as the following:
```Javascript
evaluate() {
        let oResult;
        switch (this.#operation) {
            case Operation.And:
                oResult = this.#leftExpr.evaluate() && this.#rightExpr.evaluate();
                break;
            case Operation.Or:
                oResult = this.#leftExpr.evaluate() || this.#rightExpr.evaluate();
                break;
            case Operation.If:
                oResult = !this.#leftExpr.evaluate() || this.#rightExpr.evaluate();
                break;
            case Operation.Iff:
                let lResult = this.#leftExpr.evaluate();
                let rResult = this.#rightExpr.evaluate();
                oResult = (!lResult || rResult) && (!rResult || lResult);
                break;
        }
        return (this.#negated ? !oResult : oResult);
    }
```
For any operation, as long as you know the value of the left side, the value of the right side, and whether there is a `NOT` operator in front, you can calculate the overall result. The evaluation works recursively. If the right or left side is another expression, the evaluate function is called on that expression, which will go through the same process until two propositions are reached, and then the logic results propagate up to the original function call. For ease of programming, I have treated the negation operator as something that can modify a proposition or expression instead of creating another expression class that only has one side. This allows both entire expressions and individual propositions to be negated properly, which reflects how actual symbolic logic works.

With a framework for evaluating any theoretical expresion in place, the only task left is parsing the input to generate the equivalent expression.  Every piece of symbolic logic can be represented with the left-side right-side structure present in the above code snippet.  For example, the statement ` A ↔ B ∨ C ` is illegal.  There has to be a pair of parenthesis somewhere in that statement because unlike math, there is not an order of operations within symbolic logic.  The statements `(A ↔ B) ∨ C ` and `A ↔ (B ∨ C)` are both equally valid and legal interpretations of the original statement.  The only way to know which to use is to consult whoever spoke of the first statement and inquire what they meant.  

My algorithm for parsing these equations looks for an operation outside of any parentheses pairs to be the top-level operator. In the previous two examples, the top-level operator would be `∨` and `↔` respectively. Once the top-level operator is found, we look for either pairs of parentheses or propositions. Both statements we are looking at have a proposition on one side and a pair of parentheses on the other. The proposition is simply stored as a boolean that we can toggle (with the custom negated property previously mentioned), and the expression goes through the same parsing process all over again. Find the operator, categorize the left and right; if either of them are expressions (which we know if they include parentheses), repeat the process until you finally hit two propositions.

The sample statements `(A ↔ B) ∨ C` and `A ↔ (B ∨ C)` only have one level of recursion because there is only one pair of parentheses. Another example with one level of recursion but more parentheses is the statement `(A ∨ B) ∨ (C ∨ D)`. While this statement has two expressions around the top-level operator instead of an expression and a proposition, there are no nested parentheses, so it is still only one level of recursion. Parentheses only count for recursion when they are nested. A single pair of parentheses does not increase the level of recursion unless it is inside an existing pair. Additionally, the level of recursion is set at the highest count of nested parentheses. If you have depths of 3, 2, and 4, the depth of recursion is set to 4. Consider the statement `A ∨ (B ∨ (C ∨ (D ∨ (E ∨ F))))`. It has four levels of recursion because there are four pairs of nested parentheses.

Once this parsing algorithm was implemented, the only thing left was generating the truth table.  When my program parses an expression, I save every unique proposition I come across in a list for later use.  Once the truth table is requested, I loop through every proposition and test the whole statement with every T/F combination.  These combinations are finally rendered as a table with checkboxes.  To help with ease of understanding, I also render columns representing intermediary equations.  This allows a user to slowly build up to the final result by looking at T/F combinations for all the individual pieces.  A screenshot of the program in action is attached below.
![alt](../../images/logic-evaluator-example.png)

I've mentioned previously and will undoubtedly mention again my aesthetically challenged nature, and this UI and UX is unfortunately an excellent example of that reality.  While I generally prefer function over form, even I have a line and by my standards today, this UI is unacceptably ugly.  That being said, it does not bother me enough for me to take the initiative to improve it, since this app is one I haven't needed to use in a year or two.  If a future me ever does need to use the app, I will simply have to suck it up and brave the UX hell of my own creation, a fitting punishment for having brought it to life.  

Aesthetic and UX issues aside, this app functions exactly as intended and, in my opinion, provides all the information its intended users could ever ask for. While nowhere close to pretty, all the information you would need about your truth statement is readily available and not too hard to read.

I haven’t discussed the Plug-in Values option yet, as I don’t find it particularly interesting in retrospect. Instead of generating a full truth table, it just generates one row of checkboxes for you to toggle between true and false and see what the result is.
![alt](../../images/logic-evaluator-example2.png)

It is programmatically not much of an addition to this app and thus not that interesting, especially in the scope of this blog post, but a useful addition nonetheless—especially when I was actively using this tool to work through logic problems for other CS projects.

With that, I believe I have covered everything interesting the LogicEvaluator has to offer. The most special part of this project is definitely the recursive parsing algorithm that generates the expression. While not incredibly complicated—especially with my programming capabilities today—at the time it was a real accomplishment for me to make something like that, especially in the context of having a defined final product in mind. It’s been fun to review this project, though I am now steadfast in my opinion that even a younger me should never have let something with that UI see the light of day.

Overall I would give this project a 6/10.  It's rather small in scope, and leaves much to be desired in visuals and UX, but the core functionality is present and without error.  Additionally, it was a great first step into having a defined product in mind and bringing that to life.