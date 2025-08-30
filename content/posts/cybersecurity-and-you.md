+++
date = '2025-08-30T15:19:01-04:00'
draft = true
title = 'Cybersecurity and You'
lastmod = 2025-08-30
+++

Another long gap between posts, which I'm realizing myself may just be the norm with occasional departures instead of deluding myself into thinking I'm going to post regularly.  My untimeliness aside, this post covers another project that is very important to me: the Capstone Project of my Bachelor's Degree.

Going into this project my biggest issue was coming up with an idea.  I was confident in my ability to execute whatever I came up with, but I regularly run headfirst into creative blocks when it comes to having ideas.  While struggling to come up with anything, I remembered an old project for my Computer Security class and decided to take it even further.  

In my Computer Security class, as part of a unit about obfuscation, my professor provided us texts scrambled with various ciphers, including a Caesar and Permutation Cipher.  The only information we had was that the unscrambled texts were all famous speeches.  While this would have definitely been enough to decode given a long afternoon, I decided to take a different route and instead spent the next 48 hours designing a (frankly user antagonistic) tool capable of solving any Permutation Cipher.  

For those unfamiliar with a Permutation Cipher, it is the same as a Caesar Cipher except the order of the alphabet is not preserved.  With a Caesar Cipher, there are 26 possible alphabets, something any modern device can permutate through near instantaneously.  With a Permutation Cipher, there are {{< perm-cipher-count >}} alphabets.  If you had a circle that many meters wide, it would be half the size of the observable universe.  Dealing with numbers that large menas brute forcing through the alphabets is impossible.  Instead, this problem must be approached with strategy.

The original inspiration for my approach to this problem was a game known as Picross (also called Nonograms).  Picross is a visual puzzle game played on a grid, where the X and Y axes are labeled with a series of numbers.  An example would be the label `3 1 4` which means there are three filled squares in a row, followed by 1 square, followed by four filled squares in a row.  Those numbers do not reveal anything about the empty spaces between the filled spaces: they just dictate how many groups there are, how big the groups are, and the overall order of the groups.