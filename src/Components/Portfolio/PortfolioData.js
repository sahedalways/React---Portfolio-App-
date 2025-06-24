import Project1 from "../../Assets/Project1.png";
import Project10 from "../../Assets/Project10.png";
import Project11 from "../../Assets/Project11.png";
import Project12 from "../../Assets/Project12.png";
import Project13 from "../../Assets/Project13.png";
import Project14 from "../../Assets/Project14.png";
import Project15 from "../../Assets/Project15.png";
import Project16 from "../../Assets/Project16.png";
import Project17 from "../../Assets/Project17.png";
import Project18 from "../../Assets/Project18.png";
import Project19 from "../../Assets/Project19.png";
import Project2 from "../../Assets/Project2.png";
import Project20 from "../../Assets/Project20.png";
import Project21 from "../../Assets/Project21.png";
import Project22 from "../../Assets/Project22.png";
import Project23 from "../../Assets/Project23.png";
import Project24 from "../../Assets/Project24.png";
import Project25 from "../../Assets/Project25.png";
import Project26 from "../../Assets/Project26.png";
import Project27 from "../../Assets/Project27.png";
import Project28 from "../../Assets/Project28.png";
import Project29 from "../../Assets/Project29.png";
import Project3 from "../../Assets/Project3.png";
import Project38 from "../../Assets/Project38.png";
import Project31 from "../../Assets/Project31.png";
import Project32 from "../../Assets/Project32.png";
import Project33 from "../../Assets/Project33.png";
import Project39 from "../../Assets/Project39.png";
import Project34 from "../../Assets/Project34.png";
import Project35 from "../../Assets/Project35.png";
import Project36 from "../../Assets/Project36.png";
import Project37 from "../../Assets/Project37.png";
import Project4 from "../../Assets/Project4.png";
import Project5 from "../../Assets/Project5.png";
import Project6 from "../../Assets/Project6.png";
import Project7 from "../../Assets/Project7.png";
import Project8 from "../../Assets/Project8.png";
import Project9 from "../../Assets/Project9.png";

export const allProjects = [
  {
    id: 1,
    image: Project38,
    category: "webApp",
    title: "Sisfarma - POS Application",
    authorName: "Sk Sahed Ahmed",
    desc: "<p><strong>Sisfarma</strong> is a powerful multi-vendor Point of Sale (POS) application designed to support multiple languages and streamline business operations. It offers a variety of advanced features for managing products, stock, categories, reports, and deliveries, as well as customizable templates for a personalized layout experience.</p><br><p><strong>Key Features:</strong></p><ul><li><strong>Multi-language support</strong>: The app supports various languages, making it accessible for businesses around the world.</li><li><strong>Bulk email, SMS, and WhatsApp message sending</strong>: Efficient communication tools to reach customers and staff.</li><li><strong>Product, stock, and category management</strong>: Full control over the products, their stock, and categories.</li><li><strong>Discount and payment gateway (Stripe) integration</strong>: Easy payment processing with Stripe integration.</li><li><strong>Real-time report and graph management</strong>: Live reporting and graphical insights into business performance.</li><li><strong>Delivery and order management</strong>: Track deliveries and manage orders efficiently.</li><li><strong>Template customization tools</strong>: Personalize the app layout with customizable templates, similar to Elementor.</li><li><strong>Asynchronous operations powered by Laravel Queue</strong>: Handle time-consuming tasks like sending messages without affecting app performance.</li><li><strong>Livewire integration</strong>: Real-time user interactions within the application.</li></ul><br><p><strong>For testing purposes, you can log in with the following credentials:</strong></p><ul><li><strong>Email:</strong> admin@admin.com</li><li><strong>Password:</strong> 12345678</li></ul>",
    use: "JavaScript · PHP · MySQL · Livewire · Laravel.",
    github: "https://github.com/sahedalways/laundrybox-pos-system",
    demo: "https://pos.shopsatkhira.com",
  },
  {
    id: 2,
    image: Project37,
    category: "webApp",
    title: "Lotus PMC - Property Management Application",
    authorName: "Sk Sahed Ahmed",
    desc: `
      <p><strong>Lotus PMC</strong> is a comprehensive property management application designed to streamline property-related operations. It supports four user roles: Admin, Manager, Client, and Vendor, each with specific responsibilities.</p>
<br><p><strong>Key Features:</strong></p>

<ul> <li><strong>Multi-role user system</strong>: Admin, Manager, Client, and Vendor roles with defined permissions.</li> <li><strong>Property listings & management</strong>: Admin can create and manage multiple properties, assigning Managers and Clients.</li> <li><strong>Report submission & tracking</strong>: Clients can submit various reports (e.g., maintenance, security issues) and track their resolution.</li> <li><strong>Vendor bidding system</strong>: Vendors can bid on tasks, and Admin/Manager can assign tasks based on bids.</li> <li><strong>Automated notifications</strong>: Email and push notifications for report updates, assignments, approvals, and rejections.</li> <li><strong>Invoice & payment tracking</strong>: Generate invoices for completed tasks and track payments to Vendors.</li> <li><strong>Audit logs & history</strong>: Maintain a record of user actions for accountability.</li> <li><strong>Document management</strong>: Upload and manage documents related to properties, repairs, and transactions.</li> <li><strong>Role-based access control</strong>: Restrict and manage access based on user roles.</li> <li><strong>Analytics dashboard</strong>: View statistics on reports, resolution times, vendor performance, and financial summaries.</li> <li><strong>Multi-language support</strong>: Switch between multiple languages for better accessibility.</li> </ul>
<br><p><strong>For testing purposes, you can log in with the following credentials:</strong></p>

<ul> <li><strong>Email:</strong> user@gmail.com</li> <li><strong>Password:</strong> 12345678</li> </ul>
<br><p><strong>For checking backend:</strong></p>

<ul> <li><strong>URL:</strong> <a href="https://property.shopsatkhira.com" target="_blank">property.shopsatkhira.com</a></li> <li><strong>Email:</strong> admin@gmail.com</li> <li><strong>Password:</strong> 12345678</li> </ul>
    `,
    use: "JavaScript · PHP · Next.js · MySQL · Laravel.",
    github: "https://github.com/sahedalways/lotus-pmc-web-backend",
    demo: "https://lotus-pmc-web-frontend-lxd2vnluf-sahed44.vercel.app/",
  },


  {
    "id": 3,
    "image": Project39,
    "category": "webApp",
    "title": "Virtual Mining Machine (VMM) System",
    "authorName": "Sk Sahed Ahmed",
    "desc": `
      <p><strong>Virtual Mining Machine (VMM)</strong> is an advanced investment system that enables users to invest in virtual mining machines and earn coins. Built with <strong>PHP Laravel, MySQL, and JavaScript</strong>, it offers seamless management for both users and administrators.</p>

<br><p><strong>Key Features:</strong></p>
<ul>
  <li><strong>VMM Creation by Admin</strong>: Admin can create and manage Virtual Mining Machines (VMMs) with specific attributes like title, lifetime, minimum investment, execution time, preparation time, and status.</li>
  <li><strong>Coin Distribution Algorithm</strong>: Coins are distributed through a lottery-like mechanism where a user’s probability of winning is based on investment size.</li>
  <li><strong>Automatic Cloning</strong>: VMMs automatically clone themselves based on execution time to ensure continuous operation.</li>
  <li><strong>User Investment and Withdrawal</strong>: Users can invest in active VMMs and withdraw their earnings, subject to admin approval.</li>
  <li><strong>User Wallets</strong>: Users have two wallets—VMM Coins (earned from mining) and TAKA (used for investments).</li>
  <li><strong>Admin Control Panel</strong>: Admins can manage VMMs, approve/reject withdrawals, and track transactions efficiently.</li>
  <li><strong>Real-Time Updates</strong>: Live updates on VMM status, investments, and transactions.</li>
  <li><strong>Lottery Mechanism</strong>: Higher investments increase chances of winning, but outcomes are probability-based.</li>
</ul>

<br><p><strong>For testing purposes, you can log in with the following credentials:</strong></p>
<ul>
  <li><strong>Admin Login</strong>:  
    <br>Email: admin@gmail.com  
    <br>Password: 12345678</li>
  <li><strong>User Login</strong>:  
    <br>Email: user@gmail.com  
    <br>Password: 12345678</li>
</ul>

<p><strong>Virtual Mining Machine (VMM)</strong> provides an efficient and innovative way for users to invest in virtual mining while ensuring a powerful management system for admins. With automated cloning and a dynamic lottery-based earning system, it redefines investment-based virtual mining.</p>
`,
    "use": "PHP · Laravel · MySQL · JavaScript.",
    "github": "https://github.com/sahedalways/bdcoder-vmm-machine",
    "demo": "http://vmm.shopsatkhira.com"
  },
  

  {
    id: 4,
    image: Project32,
    category: "webApp",
    title: `Propane - Trading Application`,
    authorName: "Sk Sahed Ahmed",
    desc: `<p><strong>Propane</strong> is a powerful trading web application built with <strong>PHP Laravel and MySQL</strong>, designed to manage trades, user accounts, and dynamic content through an intuitive CMS (Content Management System). With customizable site elements and seamless trading features, Propane offers a robust platform for online trading and investment management.</p>

<br><p><strong>Key Features:</strong></p>

<ul>
  <li><strong>Dynamic CMS Management:</strong>
    <ul>
      <li><strong>Admin Panel:</strong> Allows administrators to manage site metadata, including meta tags, site title, copyright, footer, menus, site slogan, and background images.</li>
      <li><strong>Page Content Customization:</strong> Enables easy editing of pages such as Contact Us, Terms, Agent, and Introduction directly from the admin panel.</li>
    </ul>
  </li>
  
  <li><strong>Currency Management:</strong>
    <ul>
      <li><strong>Multiple Currency Support:</strong> Supports <strong>SGD, USD, and IDR</strong>, allowing users to trade in their preferred currency.</li>
      <li><strong>Currency Rate Management:</strong> Admins can dynamically update exchange rates to reflect real-time market changes.</li>
    </ul>
  </li>
  
  <li><strong>Trading Functionalities:</strong>
    <ul>
      <li><strong>Deposit and Withdrawal:</strong> Facilitates smooth transaction processing for users.</li>
      <li><strong>Trade Execution:</strong> Enables users to execute trades efficiently with real-time updates on market conditions and trade statuses.</li>
    </ul>
  </li>
  
  <li><strong>User Management:</strong>
    <ul>
      <li><strong>Admin Control:</strong> Administrators can manage user accounts, permissions, and activities.</li>
      <li><strong>Membership Packages:</strong> Customizable membership packages offer different features and benefits.</li>
      <li><strong>Membership Levels:</strong> Unlock additional features and privileges based on membership tiers.</li>
    </ul>
  </li>
  
  <li><strong>Notification System:</strong>
    <ul>
      <li><strong>Real-time Notifications:</strong> Sends timely alerts regarding account activities, trade updates, and system announcements.</li>
    </ul>
  </li>
  
  <li><strong>Product Inventory Management:</strong>
    <ul>
      <li><strong>Inventory Tracking:</strong> Admins can manage product inventory and ensure accurate availability of tradable assets.</li>
    </ul>
  </li>
</ul>

<br><p><strong>For testing purposes, you can log in with the following credentials:</strong></p>
<ul>
  <li><strong>Admin Login</strong>:  
    <br>Email: admin@gmail.com  
    <br>Password: 12345678</li>
  <li><strong>User Login</strong>:  
    <br>Email: user@gmail.com  
    <br>Password: 12345678</li>
</ul>
<p><strong>Propane</strong> provides a feature-rich and efficient platform for online trading and investment, empowering users with real-time updates, customizable features, and a seamless user experience.</p>
 `,
    use: "JavaScript · MySQL · PHP · Laravel.",
    github: "https://github.com/sahedalways/propane-ecommerce",
    demo: "https://propane.shopsatkhira.com",
  },

  {
    id: 5,
    image: Project31,
    category: "webApp",
    title: `Netmark Bangladesh - MLM Application`,
    authorName: "Sk Sahed Ahmed",
    desc: `<p><strong>Netmark Bangladesh</strong> is a comprehensive <strong>MLM (Multi-Level Marketing)</strong> application designed to efficiently manage network marketing businesses. Built with <strong>PHP Laravel</strong> for the backend, <strong>MySQL</strong> for database management, and <strong>React.js</strong> for the frontend, it offers a robust and seamless experience for handling MLM functionalities.</p>

<br><p><strong>Key Features:</strong></p>

<ul>
  <li><strong>Product Management:</strong>
    <ul>
      <li>Easy listing, adding, updating, and deleting of products.</li>
    </ul>
  </li>

  <li><strong>Shopping Cart and Checkout:</strong>
    <ul>
      <li>Seamless shopping experience with product purchase, cart management, and secure checkout.</li>
    </ul>
  </li>

  <li><strong>Payment Gateway Integration:</strong>
    <ul>
      <li>Supports <strong>bKash</strong> and <strong>Nagad</strong> for secure online transactions.</li>
    </ul>
  </li>

  <li><strong>MLM Functionality:</strong>
    <ul>
      <li><strong>Tree Generation:</strong> Hierarchical representation of network members for easy management.</li>
      <li><strong>Bonus Calculation:</strong>
        <ul>
          <li><strong>Generation Bonus:</strong> Distributed based on network generation levels.</li>
          <li><strong>Matching Bonus:</strong> Rewards for matching sales within the network.</li>
          <li><strong>Purchase Cashback Bonus:</strong> Incentives for purchases made within the network.</li>
        </ul>
      </li>
      <li><strong>Referral System:</strong> Tracks referrals and calculates bonuses accordingly.</li>
    </ul>
  </li>

  <li><strong>API Design:</strong>
    <ul>
      <li>Well-structured APIs for smooth communication between frontend and backend components.</li>
    </ul>
  </li>

  <li><strong>Reporting:</strong>
    <ul>
      <li>Generates comprehensive reports including purchase and sales reports on a monthly and annual basis.</li>
    </ul>
  </li>

  <li><strong>Banking Functionalities:</strong>
    <ul>
      <li><strong>Balance Withdrawal:</strong> Allows network members to withdraw earned balances easily.</li>
    </ul>
  </li>

  <li><strong>Cron Job Integration:</strong>
    <ul>
      <li>Automates tasks such as bonus calculations and report generation.</li>
    </ul>
  </li>
</ul>

<p><strong>Netmark Bangladesh</strong> offers a powerful, feature-rich, and automated solution for MLM businesses, ensuring seamless operations, real-time reporting, and smooth financial transactions.</p>
`,
    use: "JavaScript · jQuery · PHP · MySQL · Laravel.",
    github: "https://github.com/hasancse016/netmarkbangladesh.com",
    demo: "https://www.netmarkbangladesh.com/",
  },

  {
    id: 6,
    image: Project36,
    category: "webApp",
    title: `Course Elevate - Course Selling Website`,
    authorName: "Sk Sahed Ahmed",
    desc: `<p><strong>Course Elevate</strong> is a fully functional <strong>online course selling platform</strong> designed for users to browse, add to cart, and purchase technology-related courses. The platform offers an intuitive user experience, a seamless learning journey, and secure payment integration via the <strong>Stripe</strong> payment gateway.</p>

<br><p><strong>Key Functionalities:</strong></p>

<ul>
  <li><strong>Course Listings:</strong> Displays a variety of technology courses with details such as pricing, descriptions, and instructors.</li>
  <li><strong>Add to Cart & Checkout:</strong> Users can easily add courses to their cart, manage selections, and proceed with secure payments.</li>
  <li><strong>User Dashboard:</strong> Enrolled students can access purchased courses, track progress, and download materials.</li>
  <li><strong>Video Streaming:</strong> Supports video lectures with playback control for a seamless learning experience.</li>
  <li><strong>Admin Panel:</strong> 
    <ul>
      <li>Full course management system (CRUD functionality).</li>
      <li>Manage sales, track revenue, and oversee user activity.</li>
    </ul>
  </li>
  <li><strong>Discount & Coupons:</strong> Admins can create and manage promotional discounts and coupon codes.</li>
  <li><strong>Multi-Payment Support:</strong> Integrated <strong>Stripe</strong> for secure transactions, with future support for <strong>PayPal</strong> and local gateways.</li>
  <li><strong>Category & Filter System:</strong> Users can search and filter courses based on categories, price range, and instructor.</li>
  <li><strong>Student Reviews & Ratings:</strong> Users can leave feedback on courses they have purchased.</li>
  <li><strong>Progress Tracking:</strong> Students can track their course completion status.</li>
  <li><strong>Instructor Panel:</strong> Enables instructors to upload courses, manage content, and track student enrollment.</li>
  <li><strong>Email Notifications:</strong> Automated email notifications for purchase confirmations, enrollment updates, and promotional offers.</li>
  <li><strong>Multi-Language Support:</strong> Supports multiple languages for a global audience.</li>
  <li><strong>Responsive Design:</strong> Optimized for desktop, tablet, and mobile devices.</li>
</ul>

<br><p><strong>Tech Stack:</strong></p>
<ul>
  <li><strong>Backend:</strong> PHP · Laravel</li>
  <li><strong>Frontend:</strong> JavaScript · Blade Templates</li>
  <li><strong>Database:</strong> MySQL</li>
  <li><strong>Payments:</strong> Stripe Integration</li>
  <li><strong>Enhancements:</strong> AJAX for smooth interactions, caching for optimized performance.</li>
</ul>

<br><p><strong>Login Details:</strong></p>
<ul>
  <li><strong>Admin Panel:</strong> <a href="https://courseelevate.shopsatkhira.com/login" target="_blank">Admin Login</a></li>
  <li><strong>Email:</strong> admin@gmail.com</li>
  <li><strong>Password:</strong> 12345678</li>
</ul>

<p><strong>Course Elevate</strong> provides a complete solution for online course sales, offering a user-friendly experience for students, instructors, and administrators alike.</p>
`,
    use: "JavaScript · MySQL · PHP · Laravel.",
    github: "https://github.com/sahedalways/course-elevate",
    demo: "https://courseelevate.shopsatkhira.com",
  },

  {
    id: 7,
    image: Project26,
    category: "webApp",
    title: `Caredoom - Matrimony Application`,
    authorName: "Sk Sahed Ahmed",
    desc: `<p><strong>Caredoom</strong> is a revolutionary <strong>matrimony website</strong> designed to address the unique challenges and requirements of the matrimonial domain. Leveraging the power of <strong>Next.js</strong> and <strong>PHP Laravel</strong>, Caredoom offers innovative solutions and functionalities to enhance user experience and foster meaningful connections.</p>

<br><p><strong>Key Features:</strong></p>

<ul>
  <li><strong>Multi-Mode Registration:</strong> 
    <ul>
      <li>Simplified onboarding process accommodating various user types efficiently.</li>
      <li>Versatile registration system streamlining user registration.</li>
    </ul>
  </li>
  <li><strong>Enhanced Communication Channels:</strong> 
    <ul>
      <li>Integrated text, video, and audio chatting features for seamless communication.</li>
      <li>Diverse communication options fostering meaningful connections.</li>
    </ul>
  </li>
  <li><strong>Multilingual Support:</strong> 
    <ul>
      <li>Implemented multi-language support to cater to a broader audience.</li>
      <li>Ensured inclusivity by overcoming language barriers.</li>
    </ul>
  </li>
  <li><strong>Image Resizing:</strong> 
    <ul>
      <li>Optimized user uploads for better performance and experience.</li>
      <li>Implemented image resizing functionalities to enhance performance.</li>
    </ul>
  </li>
  <li><strong>Ranking Mechanism:</strong> 
    <ul>
      <li>Enhanced user interaction through a ranking system.</li>
      <li>Prioritized profiles to improve user engagement and visibility.</li>
    </ul>
  </li>
</ul>

<br><p><strong>Challenges Addressed:</strong></p>

<ul>
  <li><strong>Diverse Communication:</strong> 
    <ul>
      <li>Fostered connections through varied communication channels - text, video, and audio.</li>
      <li>Provided seamless communication options for users.</li>
    </ul>
  </li>
  <li><strong>Cultural Inclusivity:</strong> 
    <ul>
      <li>Overcame language barriers by offering a multi-language interface.</li>
      <li>Ensured inclusivity for a diverse user base.</li>
    </ul>
  </li>
  <li><strong>Optimized User Experience:</strong> 
    <ul>
      <li>Resolved image-related issues with image resizing functionalities.</li>
      <li>Ensured better performance and user experience.</li>
    </ul>
  </li>
  <li><strong>Improved User Interaction:</strong> 
    <ul>
      <li>Implemented a ranking mechanism to enhance user engagement.</li>
      <li>Increased profile visibility for better interaction.</li>
    </ul>
  </li>
</ul>

<p><strong>Caredoom Matrimony</strong> stands as a testament to <strong>innovation and inclusivity</strong> in the matrimonial domain. With its array of features and solutions, it aims to revolutionize the way people connect and find their life partners.</p>
`,
    use: "JavaScript · PHP · React.js · MySQL · Next.js · Laravel.",
    github: "https://github.com/hasancse016/matrimony-frontend-next-react",
    demo: "https://matrimony-fn38so6pa-sahed44.vercel.app",
  },

  {
    id: 8,
    image: Project34,
    category: "webApp",
    title: `Strategic Web - Empowering Your Digital Presence`,
    authorName: "Sk Sahed Ahmed",
    desc: `<p><strong>Strategic Web</strong> is a feature-rich platform designed to elevate your digital strategy. Crafted with precision using <strong>PHP Laravel</strong> and <strong>JavaScript jQuery</strong>, it offers a comprehensive suite of tools to optimize business operations.</p>

<br><p><strong>Key Features:</strong></p>

<ul>
  <li><strong>Robust Authentication:</strong>
    <ul>
      <li>Securely manage user access with advanced authentication protocols.</li>
      <li>Ensure only authorized personnel can access sensitive information.</li>
    </ul>
  </li>
  <li><strong>Stringent Validation:</strong>
    <ul>
      <li>Built-in validation mechanisms guarantee data integrity.</li>
      <li>Prevent unauthorized access for enhanced security.</li>
    </ul>
  </li>
  <li><strong>Seamless Stripe Payment Integration:</strong>
    <ul>
      <li>Accept secure online payments through Stripe.</li>
      <li>Offer customers a trustworthy and convenient transaction experience.</li>
    </ul>
  </li>
  <li><strong>Sales Point of Sale (POS):</strong>
    <ul>
      <li>Streamline sales processes with an intuitive POS system.</li>
      <li>Track inventory and sales data in real-time for efficient operations.</li>
    </ul>
  </li>
  <li><strong>Dynamic Blog Management:</strong>
    <ul>
      <li>Create, edit, and manage engaging blog content effortlessly.</li>
      <li>Boost audience engagement and drive traffic to your site.</li>
    </ul>
  </li>
  <li><strong>Package Management:</strong>
    <ul>
      <li>Simplify package handling and delivery with a robust system.</li>
      <li>Ensure timely and efficient service for your clients.</li>
    </ul>
  </li>
  <li><strong>Seamless Company Contact Integration:</strong>
    <ul>
      <li>Enable smooth communication between clients and your company.</li>
      <li>Foster strong relationships and enhance customer satisfaction.</li>
    </ul>
  </li>
  <li><strong>Email Configuration:</strong>
    <ul>
      <li>Customize and streamline email communication.</li>
      <li>Ensure messages always reach their intended recipients.</li>
    </ul>
  </li>
</ul>

<p><strong>At Strategic Web</strong>, every feature has been meticulously crafted to empower agencies in the digital landscape. From authentication and payment processing to dynamic blog management and seamless communication tools, Strategic Web is your <strong>all-in-one solution for success.</strong></p>
`,
    use: "JavaScript · jQuery · MySQL · PHP · Laravel.",
    github: "https://github.com/sahedalways/strategicwebnew",
    demo: "https://strategicweb.net/",
  },

  
    {
      id: 9,
      image: Project33,
      category: "webApp",
      title: "Hymus Sports - Revolutionizing Sports Booking",
      authorName: "Sk Sahed Ahmed",
      desc: `
        <p><strong>Hymus Sports</strong> is an innovative booking application designed to streamline the process of booking sports facilities and managing reservations efficiently. Developed with <strong>PHP Laravel, jQuery, and MySQL</strong>, it provides a comprehensive solution for both users and administrators.</p>

<br><h3><strong>Key Features</strong></h3>

<ul>
  <li><strong>Booking System:</strong>
    <ul>
      <li>Users can book sports facilities by selecting date and time slots.</li>
      <li>VIP code feature for privileged bookings or discounts.</li>
    </ul>
  </li>
  <li><strong>Payment Gateway Integration:</strong>
    <ul>
      <li>Secure payment gateway for hassle-free transactions.</li>
      <li>Multiple payment options for user convenience.</li>
    </ul>
  </li>
  <li><strong>User Authentication:</strong>
    <ul>
      <li>Register and login functionalities for users.</li>
      <li>Forgot password feature for account recovery.</li>
    </ul>
  </li>
  <li><strong>User Dashboard:</strong>
    <ul>
      <li>View booking details, payment status, and cancellation history.</li>
      <li>Access booking history and account information.</li>
    </ul>
  </li>
  <li><strong>Admin Control Panel:</strong>
    <ul>
      <li>Comprehensive control over booking information.</li>
      <li>Manage sports facilities, games, and settings.</li>
      <li>CRUD operations for site customization.</li>
    </ul>
  </li>
  <li><strong>Reports Generation:</strong>
    <ul>
      <li>Generate detailed reports on bookings, payments, and cancellations.</li>
      <li>Analyze data to make informed business decisions.</li>
    </ul>
  </li>
</ul>

<br><h3><strong>Additional Features</strong></h3>

<ul>
  <li><strong>Notification System:</strong> Real-time alerts for booking confirmations, reminders, and cancellations.</li>
  <li><strong>Booking Confirmation:</strong> Automatic confirmation upon successful payment.</li>
  <li><strong>Email Notifications:</strong> Automated emails for account verification, bookings, and password resets.</li>
  <li><strong>Customizable Booking Options:</strong> Flexible options like hourly, daily, or weekly bookings.</li>
  <li><strong>Multi-Language Support:</strong> Supports multiple languages for a diverse user base.</li>
</ul>

<br><h3><strong>Beauty in Functionality</strong></h3>

<p>Hymus Sports not only offers powerful features but also ensures a seamless and elegant user experience:</p>

<ul>
  <li><strong>Intuitive User Interface:</strong> User-friendly design for easy navigation.</li>
  <li><strong>Responsive Design:</strong> Mobile-friendly layout for accessibility on various devices.</li>
  <li><strong>Efficient Backend Management:</strong> Streamlined admin panel for optimal management.</li>
</ul>

<br><h3><strong>Login Information</strong></h3>

<ul>
  <li><strong>Admin Login:</strong><br>
    Email: <code>admin@gmail.com</code><br>
    Password: <code>12345678</code>
  </li>
  <li><strong>User Login:</strong><br>
    Email: <code>user@gmail.com</code><br>
    Password: <code>12345678</code>
  </li>
</ul>

<br><h3><strong>Conclusion</strong></h3>

<p><strong>Hymus Sports</strong> transforms sports booking into a hassle-free experience, offering users and administrators a robust platform for managing bookings, payments, and facilities. With its advanced features and user-friendly interface, <strong>Hymus Sports</strong> sets a new standard in sports booking applications.</p>
`,
      use: "JavaScript · MySQL · PHP · Laravel.",
      github: "https://github.com/sahedalways/sport-booking",
      demo: "http://hymus.shopsatkhira.com",
    },
    
    {
      id: 10,
      image: Project35,
      category: "webApp",
      title: `Buzzhiring - Job Portal Application`,
      authorName: "Sk Sahed Ahmed",
      desc: `
 <p><strong>BuzzHiring</strong> is a comprehensive job portal web application designed to streamline the recruitment process for both job seekers and employers. Developed using <strong>PHP Laravel, JavaScript, jQuery, and MySQL</strong>, the platform offers robust authentication, role management, and various features to facilitate efficient job searching and hiring. It supports multi-authentication methods, including Google and manual authentication, ensuring a secure and user-friendly experience.</p>

<br><h3><strong>Key Features</strong></h3>

<h4><strong>Authentication and Authorization</strong></h4>
<ul>
  <li><strong>Multi-Auth Service:</strong> Supports Google authentication and manual login for job seekers, employers, and admin.</li>
  <li><strong>Admin, Seeker, and Employer Auth:</strong> Separate authentication mechanisms for each user type, ensuring tailored access and functionality.</li>
  <li><strong>Roles Management:</strong> Comprehensive roles and permissions system in the admin panel to control access.</li>
</ul>

<h4><strong>Admin Panel</strong></h4>
<ul>
  <li><strong>Seeker Management:</strong> Admin can view, edit, and manage job seekers' profiles and resumes.</li>
  <li><strong>Employer Management:</strong> Admin can view, approve, and manage employer profiles and company documents.</li>
  <li><strong>Job Management:</strong> Admin can oversee all job postings, edit or delete listings, and manage applications.</li>
  <li><strong>Application Management:</strong> Admin can track and manage all job applications submitted by seekers.</li>
  <li><strong>Payment and Coins Management:</strong> Integration with Stripe for secure transactions, managing coin purchases for job postings and resume views.</li>
  <li><strong>Site Settings and CMS:</strong> Configure site settings, manage content, and update platform information.</li>
  <li><strong>Password Management:</strong> Secure password change and reset functionalities for all users.</li>
  <li><strong>Chat Functionalities:</strong> Real-time chat feature between job seekers and employers.</li>
</ul>

<h4><strong>Employer Features</strong></h4>
<ul>
  <li><strong>Job Posting:</strong> Employers can post up to 3 jobs for free each week; beyond that, 10 coins are required per posting.</li>
  <li><strong>Coin Purchase:</strong> Employers can buy coins using INR via the Stripe payment gateway.</li>
  <li><strong>Resume Viewing:</strong> Employers specify how many resumes they wish to view per job post, with 2 coins charged per resume after the first 5 free views.</li>
  <li><strong>Job Management:</strong> Employers have a dedicated dashboard to manage job listings, view applications, and communicate with applicants.</li>
  <li><strong>Document Submission:</strong> Employers must submit required company documents for verification.</li>
  <li><strong>Free Job Posting Reset:</strong> Free job posting limit resets weekly via a cron job.</li>
</ul>

<h4><strong>Seeker Features</strong></h4>
<ul>
  <li><strong>Profile and Resume Management:</strong> Job seekers can store and update their personal information and resumes.</li>
  <li><strong>Job Applications:</strong> Apply for jobs directly through the platform and track application statuses.</li>
  <li><strong>Job Bookmarking:</strong> Save favorite job listings for later review.</li>
  <li><strong>Dashboard:</strong> Personalized dashboard to manage applications, bookmarked jobs, and profile settings.</li>
</ul>

<h4><strong>General Features</strong></h4>
<ul>
  <li><strong>Payment Gateway:</strong> Secure Stripe integration for purchasing coins.</li>
  <li><strong>Wallet System:</strong> Integrated wallet for managing coin balance.</li>
  <li><strong>Job Filters:</strong> Advanced filtering options by location, job title, and other criteria to help seekers find relevant opportunities.</li>
  <li><strong>Automatic Reset:</strong> Weekly automatic reset for free job postings via cron jobs.</li>
</ul>

<br><h3><strong>Technical Stack</strong></h3>
<ul>
  <li><strong>Backend:</strong> PHP Laravel</li>
  <li><strong>Frontend:</strong> JavaScript, jQuery</li>
  <li><strong>Database:</strong> MySQL</li>
  <li><strong>Payment Integration:</strong> Stripe</li>
  <li><strong>Authentication:</strong> Google OAuth, Manual Authentication</li>
  <li><strong>Real-Time Communication:</strong> Implemented chat functionalities</li>
</ul>

<br><h3><strong>Conclusion</strong></h3>
<p><strong>BuzzHiring</strong> provides a powerful and flexible platform for both job seekers and employers, offering a range of features that facilitate the recruitment process. With robust admin controls, seamless payment integration, and user-friendly interfaces, <strong>BuzzHiring</strong> stands out as a comprehensive solution in the job portal market.</p>
 `,
      use: "JavaScript · PHP · React.js · MySQL · Laravel.",
      github: "https://github.com/sahedalways/buzzhiring-job-portal",
      demo: "https://buzzhiring.com/",
    },


  {
    id: 11,
    image: Project27,
    category: "webApp",
    title: `Multikart - Comprehensive eCommerce Website`,
    authorName: "Sk Sahed Ahmed",
    desc: `<p><strong>Overview:</strong><br>
Led end-to-end development of a robust eCommerce platform using <strong>Next.js</strong> for the frontend, <strong>PHP-Laravel</strong> for the backend, and <strong>MySQL</strong> for database management. The project embodies essential features for a seamless eCommerce experience.</p>

<br><h3><strong>Functionalities Implemented:</strong></h3>

<h4><strong>Frontend Development:</strong></h4>
<ul>
  <li>Utilized <strong>Next.js</strong> for an intuitive, responsive, and visually compelling user interface, enhancing user experience.</li>
  <li>Implemented robust logical functionalities for product listing, dynamic cart management, and a user-friendly checkout process.</li>
</ul>

<h4><strong>Backend Operations:</strong></h4>
<ul>
  <li>Employed <strong>PHP-Laravel</strong> for backend management, focusing on database architecture, API design, and logic integration for an efficient transactional flow.</li>
  <li>Integrated <strong>MySQL</strong> for extensive product data, user details, and secure database structure.</li>
</ul>

<br><h3><strong>Key Features Included:</strong></h3>
<ul>
  <li>User Authentication and Account Management</li>
  <li>Product Catalog and Search Functionality</li>
  <li>Shopping Cart, Secure Checkout, and Payment Gateway Integration</li>
  <li>Order Tracking and Admin Dashboard for Management</li>
</ul>

<br><h3><strong>Contributions:</strong></h3>
<p>Orchestrated the development of a responsive and secure eCommerce platform, integrating frontend and backend functionalities for a comprehensive and efficient system.</p>

<p>This eCommerce project showcases my ability to deliver a complete, high-functioning solution meeting the vital requirements of a thriving eCommerce application.</p>
 `,
    use: "JavaScript · PHP · MySQL · Next.js · Laravel.",
    github: "https://github.com/hasancse016/ecommerce-backend",
    demo: "",
  },

  {
    id: 12,
    image: Project28,
    category: "webApp",
    title: `Aporadhkantha - Newspaper Website`,
    authorName: "Sk Sahed Ahmed",
    desc: `<p><strong>Contribution:</strong><br>
Within a collaborative team effort, I made substantial contributions to the <strong>"Aporadhkantha"</strong> newspaper project, utilizing <strong>PHP</strong> and the <strong>Laravel</strong> framework. My key responsibilities included:</p>

<br><h3><strong>News Management:</strong></h3>
<ul>
  <li>Oversaw comprehensive news article management, including addition, editing, updating, removal, and viewing functionalities within specific sections.</li>
</ul>

<h3><strong>API Design:</strong></h3>
<ul>
  <li>Designed and implemented efficient APIs to facilitate seamless communication between project components, significantly enhancing overall functionality.</li>
</ul>

<h3><strong>Ajax Requests:</strong></h3>
<ul>
  <li>Implemented Ajax requests for dynamic, real-time interactions, ensuring a seamless and responsive user experience on the platform.</li>
</ul>

<br><p>These contributions streamlined news management processes and introduced interactive features that significantly enhanced user engagement. This experience underscores my expertise in web development and my ability to contribute effectively within collaborative projects.</p>
`,
    use: "JavaScript · PHP · MySQL · Laravel.",
    github: "https://github.com/hasancse016/aporadhkontha.com",
    demo: "https://www.aporadhkantha.com/",
  },

  {
    id: 13,
    image: Project29,
    category: "mobileApp",
    title: `Kleancor - Cleaning Service App`,
    authorName: "Sk Sahed Ahmed",
    desc: `<p><strong>Project Overview:</strong><br>
Developed <strong>Kleancor</strong>, a robust cleaning service application, addressing challenges faced by service providers and seekers.</p>

<br><h3><strong>Technologies Used:</strong></h3>
<ul>
  <li>Utilized <strong>React Native</strong> for the front-end and <strong>PHP Laravel</strong> for the back-end, ensuring scalability and efficiency.</li>
</ul>

<h3><strong>Key Features Implemented:</strong></h3>

<h4><strong>Multi-Mode Registration:</strong></h4>
<ul>
  <li>Simplified user onboarding with a multi-mode registration system for various user types.</li>
</ul>

<h4><strong>Text Chat Integration:</strong></h4>
<ul>
  <li>Facilitated seamless communication between service providers and seekers with text chat.</li>
</ul>

<h4><strong>Public Job View:</strong></h4>
<ul>
  <li>Enhanced job listing transparency, improving accessibility for potential service providers.</li>
</ul>

<h4><strong>Worker & Client Dashboards:</strong></h4>
<ul>
  <li>Improved user experience with dedicated dashboards for both service providers and clients.</li>
</ul>

<h4><strong>Admin Oversight & Push Notifications:</strong></h4>
<ul>
  <li>Implemented an admin oversight system and push notifications for real-time updates.</li>
</ul>

<h3><strong>Challenges Overcome:</strong></h3>

<h4><strong>Enhanced User Engagement:</strong></h4>
<ul>
  <li>Tailored user-friendly features to increase overall app usage and satisfaction.</li>
</ul>

<h4><strong>Real-Time Communication:</strong></h4>
<ul>
  <li>Integrated text chat for prompt and effective communication between users.</li>
</ul>

<h4><strong>Transparency and Accessibility:</strong></h4>
<ul>
  <li>Improved transparency via public job views, facilitating successful job placements.</li>
</ul>
`,
    use: "JavaScript · PHP · MySQL · React Native · Laravel",
    github: "https://github.com/hasancse016/kleancor-backend",
    demo: "https://play.google.com/store/apps/details?id=com.kleancor.kleancorapp&pcampaignid=web_share",
  },

  {
    id: 14,
    image: Project1,
    category: "reactFullApp",
    title: "React - Restaurant App",
    authorName: "Sk Sahed Ahmed",
    desc: "The restaurant review app serves as a dynamic restaurant directory enabling users to explore nearby venues, access in-depth information about each, and review firsthand experiences from visitors. Leveraging technologies such as React.js, React-Bootstrap, React-Redux, React-Slick, Reactstrap, Remixicon, among others, the platform ensures an immersive and user-friendly experience for discovering and evaluating various dining options.",
    use: "React, React-Bootstrap, React-Redux, React-Slick, Reactstrap, Remixicon etc.",
    github: "https://github.com/sahedalways/React---Restaurant-App",
    demo: "https://saheds-food.netlify.app/",
  },

  {
    id: 15,
    image: Project2,
    category: "reactFullApp",
    title: "React - Educational App",
    authorName: "Sk Sahed Ahmed",
    desc: "Educational websites encompass platforms featuring a range of tools such as games, videos, and topic-specific resources aimed at enriching learning experiences and supporting traditional classroom instruction. These resources serve as valuable supplements to academic teaching, enhancing comprehension and engagement among students.",
    use: "React, React-router-dom etc.",
    github: "https://github.com/sahedalways/React-Educational-Website",
    demo: "https://react-saheds-educare.netlify.app",
  },

  {
    id: 16,
    image: Project3,
    category: "reactFullApp",
    title: "React - Technology App",
    authorName: "Sk Sahed Ahmed",
    desc: "Elevate your business's online presence with a tailored IT website meticulously crafted by a seasoned professional designer. Let your brand shine through a customized online platform designed to uniquely represent your IT services and offerings.",
    use: "React, React-Bootstrap, Mdbreact, React-router-dom etc.",
    github: "https://github.com/sahedalways/React---Tech-Website/tree/master",
    demo: "https://saheds-technology.netlify.app/",
  },

  {
    id: 17,
    image: Project4,
    category: "reactFullApp",
    title: "React - Blog App",
    authorName: "Sk Sahed Ahmed",
    desc: "A blog is an online platform found on the World Wide Web, facilitating discussions and the dissemination of information through discrete, often informal, diary-style text entries.",
    use: "React, Styled-Components, React-Scripts, React-Icons, React-router-dom etc.",
    github: "https://github.com/sahedalways/React---Blog-Website/tree/master",
    demo: "https://saheds-blog.netlify.app/",
  },

  {
    id: 18,
    image: Project5,
    category: "reactFullApp",
    title: "React - Travel Agency App",
    authorName: "Sk Sahed Ahmed",
    desc: `Elevate your business's online presence with a tailored travel agency website meticulously crafted by a seasoned professional designer. Let your agency's services shine through a customized online platform designed with technologies such as React, React-Icons, Scroll-Reveal, Styled-Components, and React-router-dom to provide a dynamic and captivating user experience.`,
    use: "React, React-Icons, Scroll-Reveal, Styled-Components, React-router-dom, React-Scroll etc.",
    github: "https://github.com/sahedalways/React---Agency-Website/tree/master",
    demo: "https://travelsa-agency.netlify.app/",
  },

  {
    id: 19,
    image: Project6,
    category: "reactFullApp",
    title: "React - News Portal App",
    authorName: "Sk Sahed Ahmed",
    desc: `A news portal serves as a gateway to access current news. It's typically considered an internet gateway to news sources, but the broader definition of a "Portal" can encompass newspapers, magazines, or any medium offering news content.Developing a news portal involves leveraging technologies like React, React-router-dom, React-Slick, and Slick-Carousel to create a dynamic and engaging platform for users to access and interact with current news content.`,
    use: "React, React-router-dom, React-Slick, Slick-Carousel etc.",
    github: "https://github.com/sahedalways/React---News-App",
    demo: "https://react-news-portal-sahed.netlify.app/",
  },

  {
    id: 20,
    image: Project7,
    category: "reactFullApp",
    title: "React - Ruhi Fitness Gym",
    authorName: "Sk Sahed Ahmed",
    desc: `Maintaining physical and mental fitness is crucial for a fulfilling and enduring life. Generally, exercise stands as one of the prime methods to ensure overall well-being." Leveraging technologies like React, React-Bootstrap, and React-router-dom can aid in creating platforms or applications that promote and support exercise, thus contributing to individual health and wellness.`,
    use: "React, React-Bootstrap, React-router-dom etc.",
    github: "https://github.com/sahedalways/React---Fitness-Gym-Website",
    demo: "https://ruhi-fitness-gym.netlify.app/",
  },

  {
    id: 21,
    image: Project8,
    category: "reactFullApp",
    title: "React - Ecommerce App",
    authorName: "Sk Sahed Ahmed",
    desc: `A website facilitating the online exchange of physical goods, services, and digital products, enabling transactions over the internet instead of at a physical store location. Utilizing technologies like React, React-router-dom, React-Icons, and Styled-Components can enable the development user-friendly online marketplace for buying and selling various items and services.`,
    use: "React, React-router-dom, React-Icons, Styled-Components etc.",
    github: "https://github.com/sahedalways/react---Ecommerce-App/tree/master",
    demo: "https://sahedalways.github.io/react---Ecommerce-App/",
  },

  {
    id: 22,
    image: Project9,
    category: "reactFullApp",
    title: "React - Pizza Recipes App",
    authorName: "Sk Sahed Ahmed",
    desc: `A restaurant review app acts as a comprehensive restaurant directory, allowing users to explore nearby venues, access detailed information about each establishment, and read authentic reviews from patrons who have visited them.By utilizing technologies such as React, React-router-dom, Styled-Components, and React-Icons, a user-friendly and visually appealing platform can be developed for browsing, reviewing, and accessing restaurant information.`,
    use: "React, React-router-dom, Styled-Components, React-Icons etc.",
    github:
      "https://github.com/sahedalways/React---Restraunt-Website/tree/master",
    demo: "https://sahedalways.github.io/React---Restraunt-Website/",
  },

  {
    id: 23,
    image: Project10,
    category: "reactMiniApp",
    title: "React - Admin Dashboard",
    authorName: "Sk Sahed Ahmed",
    desc: `The admin dashboard serves as the User Interface (UI) for the backend of your web application or software, providing access to manage and control various aspects of the system. Utilizing technologies such as React, ChartJS, React-Icons, React-router-dom, Recharts, Scrollreveal, and Styled-Components can help create a robust and visually engaging admin dashboard, offering intuitive control and oversight for the application's backend functionalities.`,
    use: "React, ChartJS, React-Icons, React-router-dom, Recharts, Scrollreveal, Styled-Components etc.",
    github:
      "https://github.com/sahedalways/React---Admin-Dashboard/tree/master",
    demo: "https://saheds-shop-admin-dashboard.netlify.app/",
  },

  {
    id: 24,
    image: Project11,
    category: "reactMiniApp",
    title: "React - Full Ecommerce App Functionalities",
    authorName: "Sk Sahed Ahmed",
    desc: `An e-commerce website is a digital platform that facilitates the buying and selling of physical goods, services, and digital products over the internet, eliminating the need for physical brick-and-mortar locations.Leveraging technologies like React, React-Bootstrap, React-Icons, and React-router-dom can enable the development of a user-friendly and visually engaging e-commerce platform for online transactions.`,
    use: "React, React-Bootstrap, React-Icons, React-router-dom etc.",
    github:
      "https://github.com/sahedalways/React---Add-Shopping-to-Cart/tree/master",
    demo: "https://sahedalways.github.io/React---Add-Shopping-to-Cart/",
  },

  {
    id: 25,
    image: Project12,
    category: "reactMiniApp",
    title: "React - CRUD Operation with mongoDB",
    authorName: "Sk Sahed Ahmed",
    desc: "CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.",
    use: "React, MongoDB etc.",
    github: "https://github.com/sahedalways/React---CRUD-Operation",
    demo: "https://react-crud-with-db.netlify.app/",
  },

  {
    id: 26,
    image: Project13,
    category: "reactMiniApp",
    title: "React+Next - Crypto App",
    authorName: "Sk Sahed Ahmed",
    desc: "The Crypto App - Alerts, Widgets, News, Bitcoin Price is the best app to track bitcoin and altcoin rates.",
    use: "ReactJS, NextJS, Third-Party-API etc.",
    github: "https://github.com/sahedalways/React-Next-Api-Crypto-App",
    demo: "https://react-next-crypto.netlify.app/",
  },

  {
    id: 27,
    image: Project14,
    category: "reactMiniApp",
    title: "React+Firebase - Chat App",
    authorName: "Sk Sahed Ahmed",
    desc: "A messaging app is a chat application or platform that enables users to instant message and connect with each other through their computers or mobile devices.",
    use: "React, Axios, Firebase, Framer-Motion, React-Firebase-Hooks, React-Icons, React-Router-Dom etc.",
    github:
      "https://github.com/sahedalways/react-firebase-chat-house/tree/master",
    demo: "https://sahedalways.github.io/react-firebase-chat-house/",
  },

  {
    id: 28,
    image: Project15,
    category: "reactMiniApp",
    title: "React - Country App",
    authorName: "Sk Sahed Ahmed",
    desc: "Third-Party-API has been fethed in this project. You can search any kind of countries in details.",
    use: "React, Fontawesome, Third-Party-API integration, Uuid etc.",
    github: "https://github.com/sahedalways/React---Country-App---Project",
    demo: "https://react-country-api-sahed.netlify.app",
  },

  {
    id: 29,
    image: Project25,
    category: "mernApp",
    title: "MERN - Full Ecommerce App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the full MERN App. All the functionalities of a ecommerce app are used in this project.",
    use: "React, Axios, Bootstrap, http-proxy-middleware, React-Helmet-Async, React-Icons, React-router-Dom, React-router-bootstrap, React-toastify, Use-reducer-logger, BcryptJS, ExpressJS, Express-async-handler, Jsonwebtoken, Mongoose, Nodemon etc.",
    github: "https://github.com/sahedalways/MERN-ecommerce-app",
    demo: "https://react-amazona.herokuapp.com/",
  },

  {
    id: 30,
    image: Project16,
    category: "domManipulations",
    title: "Dom Manipulation - Calculator App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the simple calculator that I have built with JavaScript DOM.",
    use: "HTML, CSS, JS-DOM.",
    github:
      "https://github.com/sahedalways/Dom-Manipulations/tree/master/JS%20-%20Calculator",
    demo: "https://dom-calculator-app.netlify.app/",
  },

  {
    id: 31,
    image: Project17,
    category: "domManipulations",
    title: "Dom Manipulation - Quiz App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the Quiz App that I have built with JavaScript DOM.",
    use: "HTML, CSS, JS-DOM.",
    github:
      "https://github.com/sahedalways/Dom-Manipulations/tree/master/JS%20-%20Quiz%20Application",
    demo: "https://dom-quiz.netlify.app/",
  },

  {
    id: 32,
    image: Project18,
    category: "domManipulations",
    title: "Dom Manipulation - Color Generator App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the Color generator app that I have built with JavaScript DOM. You can generate any kind of colors.",
    use: "HTML, CSS, JS-DOM.",
    github:
      "https://github.com/sahedalways/Dom-Manipulations/tree/master/JS%20-%20Generate%20Color",
    demo: "https://dom-generate-color.netlify.app/",
  },

  {
    id: 33,
    image: Project19,
    category: "domManipulations",
    title: "Dom Manipulation - Clone Programming Hero App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the E-learning programming course platform that I have built with JavaScript DOM.",
    use: "HTML, CSS, JS-DOM.",
    github:
      "https://github.com/sahedalways/Dom-Manipulations/tree/master/DOM%20Project",
    demo: "https://dom-programming-hero-clone.netlify.app/",
  },

  {
    id: 34,
    image: Project20,
    category: "domManipulations",
    title: "Dom Manipulation - Todo App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the simple Todo App that I have built with JavaScript DOM.",
    use: "HTML, CSS, JS-DOM.",
    github:
      "https://github.com/sahedalways/Dom-Manipulations/tree/master/JS%20-%20TODO%20App",
    demo: "https://dom-todo-app.netlify.app/",
  },

  {
    id: 35,
    image: Project21,
    category: "domManipulations",
    title: "Dom Manipulation - Drag & Drop App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the Drag & Drop app that I have built with JavaScript DOM. You can upload any size of image with drag & drop functionalities.",
    use: "HTML, CSS, JS-DOM.",
    github:
      "https://github.com/sahedalways/Dom-Manipulations/tree/master/JS%20-%20Drag%20%26%20Drop",
    demo: "https://dom-drag-and-drop-images.netlify.app/",
  },

  {
    id: 36,
    image: Project23,
    category: "phpApp",
    title: "PHP - Photography Agency App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the photography agency app where I use php & mySql DB. That is the full dynamic app indeed.",
    use: "HTML, Vanilla Css, Bootstrap, Mysql DB & PHP.",
    github: "https://github.com/sahedalways/PHP---Photography-Agency-App",
    demo: "https://php-photography-agency.herokuapp.com/",
  },

  {
    id: 37,
    image: Project24,
    category: "phpApp",
    title: "PHP - Educational App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the Educational app where I use php & mySql DB. That is the full dynamic app indeed. That contains dynamic student & teacher login form which are connected to the DB.",
    use: "HTML, Vanilla Css, Bootstrap, AJAX, Mysql DB & PHP.",
    github:
      "https://github.com/sahedalways/PHP---Educational-Project-with-mySql-db",
    demo: "https://php-educational-app.herokuapp.com/",
  },

  {
    id: 38,
    image: Project22,
    category: "jqueryApp",
    title: "jQuery - Portfolio App",
    authorName: "Sk Sahed Ahmed",
    desc: "This is the Portfolio app where I use jQuery for making it dynamic. It contains Charts, Ratio & Carousel. That is the full dynamic app indeed.",
    use: "HTML, Vanilla Css, Bootstrap, Owl-Carousel, Font-Awesome & jQuery.",
    github: "https://github.com/sahedalways/jQuery---Portfolio-Project",
    demo: "https://jquery-portfolio-app.netlify.app/",
  },
];
