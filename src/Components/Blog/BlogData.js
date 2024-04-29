export const allBlogs = [
  {
    "id": 1,
    "title": "Exploring Laravel's Beauty: A Comprehensive Guide",
    "image": "https://media.licdn.com/dms/image/D5612AQFL8LOVruJtHg/article-cover_image-shrink_720_1280/0/1684605470270?e=2147483647&v=beta&t=f1YFizwlx0-tQ4cPxB_WW9cm2otHQojcV-D5LiGb3pM",
 "desc": "<p style=\"margin-left:0px;\">In the vast landscape of web development frameworks, Laravel stands out as one of the most powerful and elegant choices for building web applications. Its expressive syntax, robust features, and vibrant community make it a top contender for developers worldwide. However, for those transitioning from other frameworks or platforms, understanding the Laravel equivalents of familiar features and concepts can be immensely helpful. In this guide, we'll delve into the Laravel equivalent of various components, functionalities, and concepts, providing a comprehensive resource for developers making the switch or simply exploring new possibilities.</p><p style=\"margin-left:0px;\">&nbsp;</p><ol><li><p style=\"margin-left:0px;\"><strong>1. Routing</strong>: In Laravel, routing serves as the mechanism for directing incoming HTTP requests to the appropriate controllers and methods. Equivalent to this in other frameworks, such as Express.js or Django, Laravel's routing system offers flexibility and clarity. With its intuitive syntax, defining routes for different HTTP methods and URIs becomes straightforward. Developers accustomed to other frameworks will find Laravel's routing structure easy to grasp and powerful in implementation.</p><p style=\"margin-left:0px;\">&nbsp;</p></li><li><p style=\"margin-left:0px;\"><strong>2. Templating</strong>: Laravel's Blade templating engine provides a clean, expressive syntax for creating views. Comparable to templating engines like Jinja2 (in Python's Flask framework) or Twig (in Symfony), Blade offers features such as template inheritance, control structures, and reusable components. Developers familiar with other templating engines will appreciate Blade's simplicity and integration within the Laravel ecosystem.</p><p style=\"margin-left:0px;\">&nbsp;</p></li><li><p style=\"margin-left:0px;\"><strong>3.ORM (Object-Relational Mapping)</strong>: Eloquent, Laravel's built-in ORM, simplifies database interactions by mapping database tables to PHP objects. This ORM is equivalent to popular ORMs like Active-record (in Ruby on Rails) or Hibernate (in Java). Eloquent's fluent query builder and relationship management capabilities streamline database operations, making database interactions intuitive and efficient.</p><p style=\"margin-left:0px;\">&nbsp;</p></li><li><p style=\"margin-left:0px;\"><strong>4. Middleware</strong>: Middleware in Laravel provides a mechanism for filtering HTTP requests entering your application. Similar to middleware concepts in frameworks like Express.js or ASP.NET Core, Laravel middleware allows developers to perform tasks such as authentication, logging, or CORS handling before passing requests to route handlers. This modular approach to request processing enhances code reusability and maintainability.</p><p style=\"margin-left:0px;\">&nbsp;</p></li><li><p style=\"margin-left:0px;\"><strong>5. Authentication and Authorization</strong>: Laravel's authentication and authorization mechanisms simplify user management and access control. Comparable to authentication frameworks like Passport (in Express.js) or Django's built-in authentication system, Laravel's authentication features include ready-to-use controllers, middleware, and encryption utilities. With Laravel's native support for OAuth, JWT, and session-based authentication, developers can implement secure authentication workflows with ease.</p><p style=\"margin-left:0px;\">&nbsp;</p></li></ol><p style=\"margin-left:0px;\"><strong>Conclusion</strong>: Navigating the transition to Laravel or exploring its capabilities as an alternative framework can be a rewarding experience for developers. By understanding the Laravel equivalents of familiar features and concepts, developers can leverage the framework's strengths while building robust and scalable web applications. Whether you're migrating from another framework or embarking on a new project, Laravel offers a comprehensive toolkit and a vibrant community to support your development journey.</p>",
    "author": "Sk Sahed Ahmed",
    "date": "28 April, 2024"
  },


   {
    "id": 2,
    "title": "জাভাস্ক্রিপ্টে হোইস্টিং: কী, কেন, এবং কিভাবে?",
    "image": "https://shefali.dev/wp-content/uploads/2023/12/JavaScript.png",
 "desc": "<p><strong>Javascript Hoisting</strong> খুবই মজার একটা বিষয়। যদি আপনি শিখে যান তাহলে Javascript নিয়ে কাজ করতে মজা পাবেন। আপনার যদি Javascript Execution Context নিয়ে বিশদ ধারনা থাকে তাহলে hoisting-এর ধারণাটি সহজেই ক্লিয়ার করতে পারবেন।</p><p>&nbsp;</p><p>Hoisting মানে উপরে তোলা। কিন্তু আসলেই কি জাভাস্ক্রিপ্ট উপরে তোলে কোন কিছুকে? চলুন একটু গভীরে ডুব দেয়া যাক।</p><p>&nbsp;</p><p><strong>console.log(\"My name is\", name);</strong><br><strong>var name;</strong><br><strong>name = \"Sahed\";</strong><br><strong>console.log(\"My name is\", name);</strong></p><p>&nbsp;</p><p>উপরে কোডটির দু'টো console.log-এর আউটপুট কি আসবে? প্রথমে একটি variable-কে &nbsp;console.log করা হয়েছে। &nbsp;পরের লাইনে উপরে console.log করা &nbsp;Variable-কে ডিক্লেয়ার করা হয়েছে তবে কোন ভ্যালু ইঞ্জেক্ট করা হয়নি। তারপরের লাইনে ভ্যারিএবলটিতে ভ্যালু ইঞ্জেক্ট করা হয়েছে। শেষ লাইনে ভেরিএবলটিকে আবার console.log করা হয়েছে।</p><p>hoisting বুঝার আগে আপনাকে এটা বুঝতে হবে জাভাস্ক্রিপ্ট কিভাবে কাজ করে।</p><p>জাভাস্ক্রিপ্ট কিভাবে কাজ করে : জাভাস্ক্রিপ্ট মূলত দু'টি Phase-এ কোড execute করে। &nbsp;প্রথমেই জাভাস্ক্রিপ্ট creation phase-এর কাজ করে তারপর execution phase-এর কাজ করে। আর তারপর আমরা বিভিন্ন আউটপুট দেখতে পাই।</p><p><br><strong>Creation Phase :</strong> ফাকা ভেরিএবলটিকে আমরা একটা ফাকা কৌটা ভাবতে পারি। code run করার সাথে সাথেই জাভাস্ক্রিপ্টের interpreter(কোড কম্পাইলার) কৌটাটিকে নিজের কাছে যত্ন করে রেখে দেয়। কারন সে ভাবে আমার বস যেহেতু কৌটাটিকে রেখেছে সেহেতু সে অবশ্যই এটা নিয়ে কাজ করবে। এই কাজটি করে creation phase-এ।</p><p>&nbsp;</p><p><strong>Execution Phase :</strong> এবার এই phase-এ জাভাস্ক্রিপ্ট কোড execute করতে শুরু করে। কোন ভেরিবলের মধ্যে ভ্যালু ইঞ্জেক্ট করা হয়, ভেরিএবল অথবা কোন ফাংশন যদি কল করা হয় সেগুলো করে ফেলে। আর রেজাল্ট দেখায় তার কাছে যত্নে রাখা ভেরিএবল অথবা ফাংশন থেকে। যেগুলো সে creation phase-এ করে রেখেছিল।</p><p>&nbsp;</p><p>এবার উপরের কোডটিতে কিভাবে hoisting কাজ করছে বুঝা যাক। প্রথমত একটি ভেরিএবল console.log করা হয়েছে যেটা creation phase এ জাভাস্ক্রিপ্ট interpreter(কম্পাইলার) execute করবে না কারন এটা creation phase. তারপরের লাইনে কপ্লাইলার ভেরিএবল ডিক্লেয়ার করা দেখবে আর সেটা তার global execution memory-তে undefined ভ্যালু দিয়ে store করে ফেলবে। তারপরের লাইনে সে কিছুই করবে না কারন এটা execution phase এর কাজ। শেষ লাইনটাও ছেড়ে দিবে।</p><p>&nbsp;</p><p>এবার execution phase-এ এসে কপ্লাইলার প্রথম লাইনের console.log-কে execute করবে। আর name ভেরিএবলের আউপুট আসবে undefined. কারন কম্পাইলার creation phase এ ভেরিএবলটিকে undefined হিসেবে store করেছিল। তারপরের লাইনের কাজ করবে না(creation phase-এ create করেছিল)। তারপরের লাইনে store-কৃত ভেরিএবলের ভ্যালু undefined থেকে Sahed হিসেবে update করে দিবে এবং শেষ লাইনে সুন্দরমত output আসবে My name is Sahed.</p><p>&nbsp;</p><p>এভাবেই আসলে hoisting কাজ করে। আপনারা যদি এটা নিয়ে কিছু example দেখেন এবং বুঝাতে চেষ্টা করেন তাহলে অবশ্যই আপনারা ধারণাটি ক্লিয়ার করতে পারবেন। আশা করি একটু হলেও hoisting সম্পর্কে বুঝাতে সক্ষম হয়েছি। ধন্যবাদ পুরোটা পড়ার জন্য। happy coding.</p>",
    "author": "Sk Sahed Ahmed",
    "date": "29 April, 2024"
  },

]
