/* 
=== Leap Year Calculator ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-04

=== Input / Output (return bool) ===
Given an integer year, determine whether it is a leap year.

=== Function ===
A year is a leap year if it satisfies the following rules:

The year is evenly divisible by 4, and
The year is not evenly divisible by 100, unless
The year is evenly divisible by 400. */

function isLeapYear(year) {
  if (year % 400 == 0) { return true; }
  if (year % 100 == 0) { return false; }
  if (year % 4 == 0) { return true; }
  return false;
}

/* 
=== Desing rationale === 
It is simplest to check from the largest least common criteria first since
1. if 400 is true, no need to check 100 or 4 because they also must be true, else
2. if 100 is true, no need to check 4 because it must also be true, else
3. check 4, else
4. return false since no conditions were detected.
*/
