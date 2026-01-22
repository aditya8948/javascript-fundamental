/* JavaScript => it is 
- High level => focus on logic and product , no memory headache 
-garbage collector => it automatically removes unused variables and free memory , 
-interpreted(JIT compiled) => code s executed line by line 
=> modern js system use JIT(just in time ) compilationn for speed
-mutli paradigm => supports multiple programming styles :
>procedural
>object oriented 
>functional
- prototype based object oriented=> object inherits directly from object using prototypes
-first class function => function are treated like a variable 
>can be stored in variable
> pssed as arguument
> returned from functioin
-dynamically type=> no need to declare data type 
-single threaded => js executes one task ata atime on a sigle call stack
-non blocking => long tasks(API calls  timer, I/O) dont block the execution




!!! How a JavaScript Engine Works 
A JS engine is a program that reads, understands, and executes JavaScript code.

JavaScript Code
↓
Parsing
↓
Compilation (JIT)
↓
Execution
↓
Garbage Collection (running in background)

----------------------------------------------------------------------------

1- parsing (reading your code)=>
    >js engine read your code 
    >Checks syntax (errors like missing } caught here)
    >convert code into AST (abstract syntax tree)
👉  AST is tree-structure version of your code, easy for engine to understand. 

2- compilation(JIT just in time)
    . js is not purely  interpreted anymore 
    > engine convert AST into machine code 
    > Uses JIT compilation:
       Compile → Execute → Optimize → Re-compile
    . Frequently used code is optimized for speed.

3- Execution (Where magic happens)
    >Execution happens in:
      .call Stack
        Executes one function at a time (LIFO)
        JS is single-threaded

    example =>
function a() {
  b();
}
function b() {
  console.log("hi");
}
a();

-- call stack flow ]=> 
a()
b()
console.log()


4- memory management 
    .heap> object and functions are stored here , it is large and unstructured memory
    .garbage collector > automatically removes unused memory , uses mark and sweep algorithm
     => You don’t control it, but bad code can still cause memory leaks.

5- Event Loop (Why JS is non-blocking)
    JS engine alone is not enough.
    Environment (Browser / Node.js) provides:
        >Web APIs (DOM, timers, fetch)
        >Callback queue / Microtask queue

oneline =>
JS engine parses code → compiles it using JIT → executes it in a single-threaded call stack →
 manages memory with heap & garbage collector → uses event loop for async tasks.