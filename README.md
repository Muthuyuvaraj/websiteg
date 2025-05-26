# Nextjs-Tailwind-Template
A template repo for nextjs, tailwind and shadcn
Here's a well-structured document for the navigation bar code you shared:

---

# **Responsive Navigation Bar Component (React & Next.js)**

## **Overview**
This document details a responsive navigation bar component built using React and Next.js. The component includes desktop and mobile navigation, utilizing Tailwind CSS for styling and `lucide-react` for icons.

## **Key Features**
- **Sticky Navigation:** Stays visible at the top of the page.
- **Desktop Navigation:** Displays a logo, includes flat links, a dropdown menu for "Company" pages, and a call-to-action "Request a Demo" button.
- **Mobile Navigation:** A toggleable menu with similar content that appears when clicking the menu icon and collapsible menu for small screens.
- **State Management:** Uses React's `useState` hook to toggle the mobile menu.
- **Smooth Hover Effects:** Provides a better user experience.

---

## **Code Implementation**

### **Imports and State Management**
```jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
```

- Uses `useState` to manage the mobile menu toggle.
- Imports Next.js's `Link` component for navigation.
- Uses icons from `lucide-react` for UI elements.

### **Navigation Component**
```jsx
const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
```
- The `mobileMenu` state determines if the mobile menu is visible.

### **Navigation Links**
```jsx
  const dropdownSection = {
    title: "Company",   
    items: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Blog", href: "/company/blog" },
      { label: "Contact", href: "/company/contact" },
    ],
  };

  const flatLinks = [
    { label: "Features", href: "/Feature" },
    { label: "Benefits", href: "/moat" },
    { label: "Pricing", href: "/pricing" },
  ];
```
- Defines links for direct navigation and dropdown sections.

### **Desktop Navigation**
```jsx
<div className="hidden lg:flex items-center gap-6 xl:gap-10 ml-auto text-primary">
  {flatLinks.map(({ label, href }) => (
    <Link key={label} href={href} className="font-medium hover:text-purple-400">
      {label}
    </Link>
  ))}

  <div className="relative group">
    <div className="flex items-center gap-1 cursor-pointer font-medium hover:text-secondary">
      {dropdownSection.title}
      <ChevronDown size={16} />
    </div>
    <div className="absolute right-0 mt-2 min-w-[12rem] bg-white text-secondary shadow-md rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
      {dropdownSection.items.map(({ label, href }) => (
        <Link key={label} href={href} className="block px-4 py-2 hover:bg-gray-100 text-sm truncate">
          {label}
        </Link>
      ))}
    </div>
  </div>

  <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 xl:px-6 py-2 rounded-md font-medium">
    Request a Demo
  </button>
</div>
```
- Displays navigation links and dropdown options for desktop users.
- Adds hover effects for dropdown visibility.

### **Mobile Navigation Toggle**
```jsx
<div className="lg:hidden">
  {mobileMenu ? (
    <X className="h-6 w-6 cursor-pointer" onClick={() => setMobileMenu(false)} />
  ) : (
    <Menu className="h-6 w-6 cursor-pointer" onClick={() => setMobileMenu(true)} />
  )}
</div>
```
- Toggles between the menu and close icons based on state.

### **Mobile Navigation Menu**
```jsx
{mobileMenu && (
  <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-4">
    {flatLinks.map(({ label, href }) => (
      <Link key={label} href={href} onClick={() => setMobileMenu(false)} className="block font-medium py-2">
        {label}
      </Link>
    ))}

    <details className="group">
      <summary className="flex items-center justify-between cursor-pointer font-medium py-2">
        {dropdownSection.title}
        <ChevronDown size={16} />
      </summary>
      <div className="ml-4 mt-2 flex flex-col gap-1 text-sm">
        {dropdownSection.items.map(({ label, href }) => (
          <Link key={label} href={href} onClick={() => setMobileMenu(false)} className="py-1">
            {label}
          </Link>
        ))}
      </div>
    </details>

    <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-medium w-full">
      Request a Demo
    </button>
  </div>
)}
```
- Displays mobile-friendly navigation options.

---

## **Enhancements & Future Improvements**
- Add animations for smoother transitions.
- Implement accessibility features for improved usability.
- Extend support for multi-level dropdowns if needed.

---

# **OurStory Component Documentation**

## **Overview**
The `OurStory` component is a React-based webpage designed for **Packgine**, a sustainability-focused platform. It presents key features, a **hero section**, a **value proposition**, and interactive elements, such as a **video modal**.

---

## **Key Features**
- **Hero Section**: Presents an engaging title, description, and a call-to-action button.
- **Interactive Video Modal**: Users can view an introductory video about Packgine.
- **Value Proposition**: Highlights core features that help businesses adopt sustainable packaging.
- **Dynamic Content Layout**: Uses responsive **grid-based sections**.
- **State Management**: Uses React’s `useState` to handle UI interactions.

---

## **Code Breakdown**
### **Imports**
```jsx
"use client";
import React, { useState } from 'react';
import NavBar from '@/components/common/NavBar';
import Footer from '@/components/common/FooterSection';
```
- Declares React as a client-side component.
- Imports **NavBar** and **Footer** for consistent page structure.

### **Defining Feature Steps**
```jsx
const steps = [
  {
    title: "Instant Packaging Analytics",
    description: "AI-powered lifecycle analysis for packaging.",
    image: "/images/Instant-Packaging-Analytics.jpg",
  },
  {
    title: "Portfolio Optimization",
    description: "Optimize packaging portfolios with sustainable materials.",
    image: "/images/Portfolio-Optimization.jpg",
  },
  ...
];
```
- Stores feature details (title, description, image) in an array for **dynamic rendering**.

---

## **Hero Section**
```jsx
<section className="relative w-full min-h-screen bg-cover bg-center pt-28 pb-32">
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative z-10 text-center mx-auto mt-44">
    <h1 className="text-5xl font-medium leading-tight">
      Unpackaging Sustainability Potential to Empower Brands
    </h1>
    <button onClick={() => setShowVideo(true)} className="bg-purple-500 px-6 py-3 rounded-md">
      Discover Packgine
    </button>
  </div>
</section>
```
- Uses `background-image` for visual appeal.
- Button toggles a **video modal**.

---

## **Enhancements & Future Improvements**
- **Add animations** for smooth transitions.
- **Accessibility improvements** for better usability.
- **Multi-step interactions** for guided experiences.

---
