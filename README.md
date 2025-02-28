# Pratitya'25

This repository contains the source code for the Pratitya25 project, built with Vite and React.

## Technology Stack
  - React.js - A JavaScript library for building user interfaces
  - TailwindCSS - A utility-first CSS framework
  - Material UI - React component library implementing Material Design
  - Firebase - Backend-as-a-Service (BaaS) 

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/tomsabu444/Pratitya25.git
   cd Pratitya25
   ```

2. **Install Dependencies**
   ```bash
   npm ci
   ```

3. **To start the development server**
   ```bash
   npm run dev
   ```

## Website Navigation

The website consists of the following pages:

### Home Page
- **Route**: `/`
- **Component**: `HomePage`
- The main landing page of the website

### Event List Page
- **Route**: `/events`
- **Component**: `EventList`
- Displays a list of all available events

### Event Details Page
- **Route**: `/event/:id`
- **Component**: `EventDetails`
- Shows detailed information about a specific event
- The `:id` parameter in the URL represents the unique identifier for each event

### Team Page
- **Route**: `/teams`
- **Component**: `TeamPage`
- Displays information about the team members

