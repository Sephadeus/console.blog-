const { User } = require("../models");

const posts = [
 {
    post_title: 'What Is JavaScript & Why Is It Important?',
    post_content: `JavaScript is a powerful programming language built for Netscape Navigator in 1995. All modern web browsers have since adopted it for adding functionality to websites and, more recently, web applications.
    Over the years since its inception, JavaScript has grown into a powerhouse. It is no longer only used by the web — it can now be found almost anywhere, including space.
    This post will discuss the origins, evolution, current landscape, and future of the JavaScript programming language. Without any further delay, let's jump right into the fun.`,
    user_id: 0
 },
 {
    post_title: 'An Introduction to Unreal Engine 5 and What It Does',
    post_content: `Unreal Engine 5 is now available, and it includes several ground-breaking features. The Unreal Engine has been used to make some impressive games over the years, including Borderlands 2, Mass Effect 2, Street Fighter V, Bioshock, and Fortnite, just to name a few.

    Unreal Engine 5 is going to let game developers take their projects to a whole new level. This article will explain why Unreal Engine 5 is a big deal for gamers and developers alike.
    
    What Is Unreal Engine 5?
    Unreal Engine 5 is the latest version of the Unreal Engine. The Unreal Engine is a game engine created and maintained by Epic Games. It is a powerful engine with lots of industry use and a solid support network. It is especially popular for making real-time 3D games.
    
    Unreal Engine 5 is currently in Early Access. Epic recently released an Early Access build to the public alongside a video demonstration, viewable below.
    
    Epic Games hopes to release a production-ready build of Unreal Engine 5 in 2022. Until then, the Early Access build is available for developers who want to test the engine right away. The game demo shown in the video is also open source, meaning you can download it and open it in Unreal to see how everything fits together.
    
    How Does Unreal Engine 5 Do?
    Unreal Engine 5 comes with a few additional features that will transform the game development workflow. These are a few of the features in Unreal Engine 5 which will fundamentally change how developers make games.
    
    Nanite
    Nanite is what Epic calls a "virtualized micropolygon geometry system" in its unrealengine.com announcement. Essentially, it lets developers use incredibly detailed art assets without having to worry about performance.
    
    Previously, if developers used art assets with high polygon counts (high levels of detail), they would have to scale these assets down for performance reasons. "Baking meshes", a process which removes unnecessary polygons did this.
    
    With Nanite, you no longer have to bake your meshes! Nanite technology does this work for you, meaning you can dump movie-quality assets into your game and have it run with no problems.
    
    
    Lumen
    Lumen is a "fully dynamic global illumination system". Essentially, Lumen handles the lighting of the entire game world for you. It is dynamic, so it will change all the lighting in the world according to factors like the angle of the sun, for example.
    
    This will make immersive dynamic lighting easy to achieve. All you have to do is drop lights into your scene and let the Lumen system take care of the rest. Also, the lighting that you see in editor will be nearly identical to how the lighting looks in the final product.
    
    Open Worlds
    Unreal Engine 5 will make open worlds easier and quicker to create. A new World Partition system divides the game world into a grid and only loads the cells it needs at any given time. It also uses Data Layers, which let you create variations of different zones in your world. You could create a nighttime layer and a daytime layer for a certain zone, for example.
    
    Finally, a new One File per Actor system lets developers work on the same zone without stepping on each other's toes. This keeps developers' work separate even when they are working on the same region of the map. It should make collaboration safer and easier.
    
    
    Animation
    Before, developers created animations outside of the Unreal Engine. This made the animation workflow tedious for animators who had to go back and forth between separate windows. Now, Unreal Engine 5 has built-in animation capabilities.
    
    Not only can you create rigs and poses in the engine now, you can also use an IK Body Solver to create natural movement. You can also use Motion Warping, which lets you use one animation to create slightly different motions, like using one jump animation for jumps to different heights.
    
   
    MetaSounds
    Sound designers also get a new system to work with. MetaSounds is a completely new way to create audio in the Unreal Engine. It allows you to set up procedural audio generation, using things like game parameters to trigger certain sound playbacks. It also aims to give you complete control over all aspects of your audio rendering.
    
    Unreal Engine 5 Screenshot of MetaSounds EditorEpic Games/UE Blog
    How to Access Unreal Engine 5
    If you are interested in trying Unreal Engine 5, you can download the Early Access build from the Epic Games Launcher. The Epic Games Launcher includes the Epic Games Store, where Epic offers free games from time to time. It is also getting new social features; read about How the Epic Games Store Is Going to Become a More Social Experience.
    
    If you do not wish to use the Epic Games Launcher, Unreal Engine 5 is also available on the Epic Games' GitHub. In order to see the repository on GitHub, however, you must be logged in to a GitHub account that is linked to an Epic Games Account.
    
    The game demo from the video demonstration, titled Valley of the Ancient, is available on the same platforms. You can download the demo from the Epic Games Launcher on the Unreal Engine tab. You can also download the demo's source code on GitHub, but you still must be logged into a GitHub account that is linked to an Epic Games account to see it.
    
    While Epic requires you to have an account in order to use their stuff, there are plenty of other open source game projects out there without such requirements. Learn about other open-source projects by reading The 25 Best Open Source Video Games in 2020.
    
    Unreal Engine 5 is Changing the Game
    Unreal Engine 5 animation
    Unreal Engine 5 is changing game development in a few big ways. Nanite technology is ground-breaking, because it lets developers use movie-quality assets at virtually no cost. In addition, the Lumen system makes it easy for games to have realistic, dynamic lighting.
    
    Developers who use Unreal Engine 5 will notice some major changes to their workflow. Artists no longer have to bake their own meshes, animators get to create all their animations in engine, and environment artists don't have to manually setup lighting. Everyone on the development team should experience some improvements to their workflow when using Unreal Engine 5.
    
    Gamers might have to wait awhile to see any major releases built in Unreal Engine 5, but the wait will almost definitely be worth it. Watching the video demonstration should give gamers an idea of what is coming. It truly looks like something from the next generation of gaming.`,
    user_id: 5
 },
 {
    post_title: 'What Is C++ Used For?',
    post_content: `C++ can be found just about everywhere you look. It powers search engines, VR applications, air travel, movie production, and even exploration on Mars! In fact, C++ is one of the most widely-used programming languages there is.

    In this article, we’ll take a look at what makes C++ unique and dive into a variety of real-world applications. If you’re interested in learning more about the fundamental programming concepts behind C++, check out our Learn C++ course to get started.
    
    Learn something new for free
    Learn JavaScript Learn to Code with Blockly
    What makes C++ unique?
    C++ is a general-purpose programming language, created by Bjarne Stroustrup and his team at Bell Laboratories in 1979. Over the decades, C++ has become the language of choice for certain kinds of applications.
    
    C++ is most popularly used for building large software infrastructure and applications that run on limited resources. Because C++ can directly manipulate the hardware (or machine) that it runs on, programmers can fine-tune their code to run efficiently in any environment, even when there’s limited hardware space or energy available to power the application. This translates to applications that run quickly and reliably on a variety of devices, making C++ ideal for forming the base layer of many important applications.
    
    For these reasons, C++ is an excellent choice for building software that is fast, efficient at managing system resources, and reliable in performing critical tasks.
    
    What is C++ used for?
    C++ can be found in a wide variety of industries. Check out the following list for some of the most notable, interesting, and even surprising real-world applications of C++.
    
    Operating systems
    C++ plays an important part in well-known operating systems, from MacOS and Windows to mobile operating systems like iOS. In general, operating systems need to be fast and efficient at managing system resources. With the low-level (close to machine code) capabilities of C++, developers can structure their code to make even the smallest details of an operating system fast and energy efficient.
    
    Game development
    C++ is one of the most widely-used programming languages in game development. It has been used to create: games, such as World of Warcraft, Counter-Strike, and StarCraft, game engines like Unreal Engine, and gaming consoles, including Xbox, PlayStation, and Nintendo Switch.
    
    Gaming involves lots of resource-intensive functions, whether it’s generating graphics or facilitating multiplayer sessions. C++ helps in optimizing the use of resources, such as allowing programmers to adjust exactly how data structures and memory allocation are handled.
    
    IoT devices
    IoT (Internet of Things) devices include embedded systems that often rely on C++. Some examples of these devices are appliances, cars, smartwatches, TVs, and medical devices. Because the hardware is often embedded inside of an object, these devices have to operate with limited computing resources and strict power requirements. C++ helps programmers control how these resources are used in order to run programs more efficiently.
    
    Databases
    C++ is used to build popular database tools like MySQL and MongoDB. These databases form the backbone of many well-known applications, including ones created by Google, Netflix, YouTube, Adobe, and more. C++ is ideal for helping structure databases to support efficient storage.
    
    Web browsers
    C++ plays a role in web browsers, such as Google Chrome, Mozilla Firefox, Safari, and Opera. It is used to develop back-end services that retrieve information from databases and render code into interactive web pages. C++ helps web browsers carry out these tasks with speed and minimal delays, which means we don’t have to wait long for content to appear on our screens.
    
    Machine learning tools
    Machine learning tools, such as TensorFlow, rely on C++ as a back-end programming language. Even though data scientists can use TensorFlow with Python, for example, the core machine learning calculations are carried out with C++ code. In fact, C++ has a large collection of libraries that power these highly-sophisticated calculations that train machine learning models.
    
    AR/VR applications
    C++ is widely used for developing augmented reality and virtual reality applications. In fact, many of these applications run on Unreal Engine, which is built using C++. AR/VR applications need to handle large amounts of data that adjust continuously based on input from camera sensors and user interactions. C++ is ideal for helping process all of this data while creating seamless virtual experiences.
    
    Scientific research
    C++ plays a notable role in scientific research, from space exploration to high-energy particle physics. At CERN, scientists use C++ for analyzing data on subatomic particles that can help answer questions about how our universe originated. At NASA, C++ has been used to build autonomous driving systems that help the Mars Rovers navigate unknown terrain. Many parts of the International Space Station are built using C++ as well.
    
    Financial tools
    Many banks and financial institutions use C++ to build their software infrastructure, which powers applications for banking, trading, and financial modeling. The speed and reliable performance of C++ is ideal for processing millions of daily transactions, facilitating a high volume and frequency of trades, and creating data simulations for large portfolios.
    
    Flight software
    C++ is a commonly-used language for flight software that powers commercial airplanes and military and defense aircraft (such as the F-16 and F-35 planes). C++ is used to build a lot of the safety-critical software, which is required to follow strict coding standards to make sure that the wings, engines, and other critical parts work predictably during each flight.
    
    Google search engine
    Google’s search engine relies on C++ to make sure that search results show up quickly and with minimal response time. C++ also powers the machine learning and other complex algorithms that make sure we get the best possible results for our search. Google’s crawling and indexing infrastructure is also implemented in C++.
    
    Medical technology
    C++ can be found in a variety of medical applications, from MRI machines to lab testing equipment to systems that handle patient information. C++ is also used to model data and run data simulations for bioinformatics research, because many advanced algorithms written for the medical and biological sciences are implemented in C++.
    
    Telecommunications
    C++ is widely used in building telephone, Internet, and other telecommunications infrastructure. It’s ideal for managing resources to handle tons of simultaneous communication with speed and efficiency.
    
    Movie production
    Many of the graphics and special effects that you see in movies are created with C++. C++ is great for this role because it can handle large files with high-quality footage and run many of the advanced calculations that make the special effects possible.
    
    Getting Started
    Just about everywhere you look, you’ll find that C++ is involved in some way!`,
    user_id: 3
 },
 {
    post_title: 'Why C++ is a good first language to learn',
    post_content: `You might think of C++ as an antique programming language, but C++ is still readily used in programming today. Despite the advent of popular object-oriented programming languages (OOPs) like Python, C++ continues to have a dedicated space in software engineering.

    C++ is still the go-to language for solutions that need fast machine performance. AAA video games, IoT, embedded systems, and resource-heavy VR and AI applications all run on C or C++.
    
    With so many applications across the tech industry, there is plenty of life in C++ yet. However, even though C++ is used in everything from embedded systems to game development, you may still be wondering, is C++ easy to learn?
    
    Today, we’ll explore why you should learn C++ as a new developer and how to easily start learning some basic C++ programming concepts.
    
    Here’s what we’ll cover today:
    
    Reasons to learn C++ today
    Get started with C++
    Tips for learning C++
    Next steps    
    
    Reasons to learn C++ today
    
    1. Learn about computers and compilers
    C++ is close to the metal — just a few small steps away from assembly code.
    
    While high-level languages like JavaScript are built around the business domain, C++ is a low-level language built around the computer. This gives you a much greater understanding of all the building blocks of programming (useful when you’re starting out).
    
    widget
    C++ allows you to learn programming from the ground up. You have to explain everything you do, and be able to manipulate the source code, which gives you a deeper understanding of how all the parts work.
    
    A mastery of C++ will familiarize you with:
    
    Efficient memory management and pointers — why they’re important and what they do
    Meta-programming — how a program can examine information about itself
    Compile time and load time — the difference between them
    Optimization — what it really means, and how to optimize while you code
    Dynamic libraries — how they really work, and what to do with them
    Generic programming — programs evaluated at compile time
    
    2. You’ll pick up other languages faster
    Most other major programming languages have syntax based on C++. If you get a good grasp of a general-purpose language like C++, you’ll be able to pick up other, more verbose languages like Java, far more easily. Your foundation in C++ syntax will pay off, because C++ helps to understand the logic structure of all programming.
    
    It’s actually a lot harder to start with another programming language, and then move to C++. A language like Python, optimized for the way humans think, won’t teach you the way computers think. You may need to re-learn programming from the ground up, if you move to C++.
    
    C++ doesn’t tie you to a specific programming paradigm (like object-oriented programming), so you can easily experiment with different techniques as you learn.
    
    
    3. Develop hirable skills
    With so many developers to choose from, companies are looking for candidates with developed skills like problem-solving, creativity, and determination. C++ teaches you how to be a real, raw problem solver.
    
    One common complaint about learning C++ is that there’s hardly any abstraction in it.
    
    You have to define just about every attribute to make the code work. This can result in more complex, lengthy code to write and dig through, unlike more elegant languages like Python.
    
    There’s no garbage collection — you must explicitly mark objects to be deleted. And memory management is done manually. You are in full control. And when something breaks, it’s on you.
    
    This is where the real programming skill is developed.
    
    Code runs slow?
    
    You’ll need to figure out where the memory is being wasted, and how to dynamically allocate it.
    
    Got a bug?
    
    You’ll need to roll up your sleeves and search your code. An inconvenience for sure, but one that builds character and dev cred.
    
    You’ll learn to adopt a more clear and consistent coding style, comment the code as you write it, and learn to limit the visibility of class internals to the outside world — all important facets of object-oriented programming.
    
    
    
    Get started with C++
    If you’re new to C++, it can look pretty confusing. Let’s take a quick look at some simple C++ so you can see the general setup of most programs.
    
   
    Run
    #include <iostream> is a header file library. A header file imports features into your program. We’re basically asking that the program copy the content from a file called <iostream>. This stands for input and output stream, and it defines the standards for the objects in our code.
    
    using namespace std means that we are using object and variable names from the standard library (std). This statement is often abbreviated with the keyword std and the operator ::. The int main ( ) is used to specify the main function.
    
    It is a very important part of C++ programs. A function essentially defines an action for your code. Anything within the curly brackets { } will be executed.
    
    cout is an object (pronounced see - out). In this example, it defines our outputs: the strings of words. We write a new object using cout on the second line. The character \n makes the text execute on a different line.
    
    Including two \n\n creates a blank space. By writing return 0, we are telling the program that nothing will return. We are only outputting strings of text. Note that we use the << operator to name our objects. The semi colon ; functions like a period.
    
    Writing and experimenting with simple programs like this is the perfect way to learn C++.
    
    widget
    
    
    Tips for learning C++
    C++ isn’t the easiest programming language to pick up, but you’re well on your way! With the right mindset and tools at your disposal, learning C++ can be fun and enriching for any developer.
    
    Here are some points to keep in mind as you learn:
    
    
    Be a problem solver
    Any beginning coder should have a question they ask themselves any time they encounter a new syntax feature to learn:
    
    “What problem does this solve?”
    
    All programming is made to solve problems. By focusing on what problem you are solving with each new thing you learn, you’ll get a much deeper understanding of the language and programming in general.
    
    
    Learn from others
    Thankfully, you’re not the first to learn C++. If you’re struggling to learn a new programming language, try searching on forums like StackOverflow.
    
    You’re probably not the only one having the problem! C++ has a thriving community of developers that have been where you are and want to help.
    
    
    Use the right C++ IDE or code editor
    When learning a new programming language, having the right IDE (Integrated Development Environment) matters. Practicing in an IDE will help you hone your C++ fundamentals and develop valuable programming experience.
    
    There are many different IDE options for C++ programmers, and many are even free and open source. Depending on which operating systems you use (Windows, Linux, or MacOS), there are a variety of top C++ IDEs to choose from, equipped with C++ compilers like GCC.
    
    Some good options include Visual Studio by Microsoft and Eclipse. See our complete list of the best C++ IDEs to learn more.
    
    (And if you need a break from your IDE, Educative’s developer learning platform allows you to code directly in your web browser, no set-up required).
    
    
    Get acquainted with the latest version of C++
    C++ has evolved since Bjarne Stroustrup first published the first edition of The C++ Programming Language in 1985.
    
    C++17 is the most recent version of C++ standard (ISO), but it’s an incremental update from C++11, the last major upgrade.
    
    You’ll definitely want to start there. There are many new features designed to make C++ easier for beginners to pick up, and lots of ways to make your code shorter and easier to read.
    
    Practicing the newest features will ensure you’re not spending time on phased out problems.
    
    
    
    Next steps
    If you want to pick up C++, you can have to work with code hands-on. Apply concepts as you learn them helps to cement learning so you can apply it later. Live practice also allows you to move at your own pace.
    
    Educative’s interactive course, Learn C++ from Scratch, is the perfect primer to learning C++ from scratch. You’ll start with a simple Hello, World! program, explore the basic concepts (conditional statements, loop statements, functions), then learn to use classes and templates to write better, modular code.
    
    By the end, you’ll have the practiced C++ skills you need to build your own complex solutions.
    
    Happy learning!`,
    user_id: 2
 },
 {
    post_title: 'Why is C++ so hard?',
    post_content: `The multi-paradigm nature of C++ makes it difficult to learn. It's hard for beginners to learn, and it's even harder for programmers with no experience with low-level languages.

    C++ is not hard. It's just different. It is indeed what it is.
    
    It is something I will agree with, but I am not sure if I agree with it.
    
    How difficult is learning C++?
    Is it hard to learn a language? How difficult is it to learn C++? There isn't a universal answer. How long it would take depends on a number of factors, such as your background and motivation, and what you want to do with the language.
    
    We can approach learning to program the same way we would approach learning to speak a new language.
    
    Is it a good language to learn? The answer is yes. We will get more specific in this article. We will look at how to start learning C++, what types of career opportunities C++ experience can bring you, and what C++ is used for.
    
    It depends on your career goals and personal interests. Learning C++ will be part of the learning process.
    
    It is a good idea to learn C++. The learning path is to get started learning fundamental C++ programming concepts. The learning path explores topics such as C++ for programmers.
    
    It is the best way to learn a programming language. The way in which you start learning is mentioned before.
    
    How do you know which programming language is right for you? Every developer has to decide which language to use. For a lot of people, the choice is between Java or C++.
    
    Do you want to use C or Java? If you're ready to learn one of these languages, try one of these free or affordable programming lessons. If you're looking for a career in programming, a coding boot camp is a great place to start.
    
    Applications, operating systems, web browsers, and parts of websites can be created using Java and C++.
    
    The language is advanced. It's hard for beginners to learn, and it's even harder for programmers with no experience with low-level languages. It takes more time to write C++ code, but the language has been modernized to present high-level abstractions. The abstractions can be used very efficiently.
    
    You can write code with a few tools.
    
    Is it hard to switch from C to C++?
    One of the best ways to find the experience better than in C is to program in the C subset of C++, which provides extra type-checking and sometimes extra performance even for plain C code.
    
    C is an enhanced version of C. There are many improvements and features in C that make it a better C.
    
    Almost all of C95 is a subset of C++, which is a direct descendant of C95 (C90 plus an Amendment). C is not a better C because it does not support a wide range of programming styles and it does not provide better type checking. C90/C95 is a better C than K&R C.
    
    Well written C tends to be legal. The C Programming Language (2nd Edition) is a C++ program.
    
    Nowadays you can use a compiler to get started with C or C++.
    
    Is C programing easy to learn?
    C is a general-purpose programming language. It can be used to develop software. C is a great language to learn to program in.
    
    C is a programming language. You can take yourself to higher level of expertise from the knowledge you get from this C tutorial.
    
    There are useful resources for C programming.
    
    The 80/20 rule is followed by the C Beginner Handbook. 80% of the time, you will learn the C programming language.
    
    It's important to choose the best learning platform to master C. You will need to enroll in a program that suits your needs if you want to learn C from scratch or refresh your memory. The amount of information needed to learn how to code can make beginners flustered.
    
    We compiled a list of platforms where you can learn C effectively.
    
    Is Go easier than C++?
    There are a lot of features in usage C++. It is not easy to write the code.
    
    There are fewer errors to take care of at the end of the day because Performance C++ is a statically typed language. A more robust and faster code can be created by C++. This makes the language high performance.`,
    user_id: 4
 },
];

const seedPosts = () => Post.bulkCreate(posts, { individualHooks: true, returning: true });

module.exports = seedPosts;