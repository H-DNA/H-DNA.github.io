# Correctness Conditions

This section covers in great length about the topic of the correctness of concurrent algorithms.

What do we have in this topic? Well, if you think of an algorithm like a theorem then just like talking about the correctness of a theorem, some matters we can talk about regarding this topic are:
- Q1. What does it mean for an algorithm (theorem) to be correct? This all depends on our perspective of "correctness". This perspective is formalized by a set of axioms and definitions. Some correctness conditions may be useful, some may be not quite. This leads to another question: Q1'. What is a useful set of axioms and definitions?
- Q2. How to establish the correctness of an algorithm (theorem)?
- Q3. How to derive results from or reason about a correct algorithm (theorem)?

We will answer mostly Q1 and Q1' in this introduction, deferring Q2 and Q3 to other subposts.

Section [System Model](#system-model) will walkthrough the model of a system that runs a concurrent algorithm. In Section [Correctness Condition](#correctness-conditions), I will express my definition of a correctness condition based on what I have observed from some correctness conditions: serializability<sup>1</sup>, quiescent consistency<sup>2</sup>, sequential consistency<sup>3</sup> and linearizability<sup>4</sup>. Section [Properties of A Correctness Condition](#properties-of-a-correctness-condition) will specify some properties that a useful correctness condition could satisfy.

[[toc]]

## System Model

To reason about the system, we need a model of it. This section walkthroughs the most popular system model in the literature, based on <sup>4</sup>. Based on this model, we can then go on to reason what it means to be a correctness condition.

Our system consists of $n$ **sequential processes**. We assume $n$ is fixed from the start. These process communicate with each other using a set of **shared objects**. A shared object has a set of **methods** that can be invoked by the processes.

Generally speaking, a process executes by invoking the a method of the objects and receiving a response. The system execution is modeled by a **history**, which is a finite series of method **invocation** events and method **response** events:
- An invocation is a triple of $(P, x, args)$ where $P$ is the process ID, $x$ is the object's name and $args$ is the input.
- A response is triple of $(P, x, resp)$ where $P$ and $x$ are similarly defined and $resp$ is the output.

A response is said to **match** an invocation if their $P$ and $x$ are the same.

A **process subhistory** $H|P$ is the sub-history $H$ with only events of $P$. An **object subhistory** $H | x$ is the sub-history of $H$ with only events of $x$.

A history must be **well-formed** which means that in every process subhistory, an invocation must be immediately followed by a matching response.

Now that we have had a clear picture of the system and its execution. Simply put, it's an interleaving of method invocations and responses on a set of shared objects by a set of processes. We now go on to define a correctness condition (Section [Correctness Condition](#correctness-conditions)) and its properties (Section [Properties of A Correctness Condition](#properties-of-a-correctness-condition)).

## Correctness Condition

Consider $\mathcal{H}$ as the **universe of histories**.

To define whether an algorithm is correct, we must define an algorithm.

An **algorithm** can be thought of as a sole method of a data structure that can be instantiated to a shared object. An **algorithm** when run in a system produces a set of histories. We can equate an algorithm with a set of histories.

**Definition.** A **correctness condition** is a mapping of algorithm specifications to validity functions.

**Definition.** A **correctness condition instantiated to an algorithm specification** (or an **instantiated correctness condition**) is a validity function $V:\mathcal{H}\mapsto\{0,1\}$. An algorithm is correct with regard to an instantiated correctness condition if all of its histories $h$ satisfy $V(h) = 1$.

Note that a correctness condition based on this definition is a mapping of algorithm specifications to a validity functions, not a single validity function. For example, the linearizable queue has a validity function and the linearizable stack has a different validity function. Consequently, it's actually not sufficient to say that "An algorithm is linearizable". You should say, "A queue is linearizable" or "An algorithm is queue-linearizable".

**Unresolved question.** What is an **algorithm specification**?

## Properties of A Correctness Condition

## Related Posts

## References

References are listed in their order of appearance in the post.

1. Papadimitriou, C. H. The serializability of concurrent database updates. J. ACM 26, 4 (Oct. 1979), 631-653.
2. Maurice Herlihy and Nir Shavit. 2012. The Art of Multiprocessor Programming, Revised Reprint (1st. ed.). Morgan Kaufmann Publishers Inc., San Francisco, CA, USA.
3. Lamport, L. How to make a multiprocessor computer that correctly executes multiprocess programs. IEEE Trans. Comput. C-28,9 (Sept. 1979), 690-691
4. Maurice P. Herlihy and Jeannette M. Wing. 1990. Linearizability: a correctness condition for concurrent objects. ACM Trans. Program. Lang. Syst. 12, 3 (July 1990), 463–492. https://doi.org/10.1145/78969.78972 
