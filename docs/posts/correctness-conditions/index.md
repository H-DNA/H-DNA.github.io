# Correctness Conditions

This section covers in great length about the topic of the correctness of concurrent programs. What do we have in this topic? Well, if you think of a program like a theorem then just like talking about the correctness of a theorem, some matters we can speak regarding this topic are:
- Q1: What does it mean for a program (theorem) to be correct? This all depends on our perspective of "correctness". This perspective is formalized by a set of axioms and definitions. This leads to another question: Q1': What is a useful set of axioms and definitions?
- Q2: How to establish the correctness of a program (theorem)?
- Q3: How to derive results from or reason about a correct program (theorem)?

This section, for the time being, dedicates much of its time covering "linearizability" - a widely used correctness condition due to its many favorable characteristics, in other words, it is "useful" as meant by Q1'.

## System Model
