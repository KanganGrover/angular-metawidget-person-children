# Metawidget Web Application 

This project is a small single-page web application built using **AngularJS** and **Metawidget**.  

## ✅ Features

### ✔ Client-side JavaScript
Uses AngularJS for data-binding and form interaction.

### ✔ Metawidget Integration
Automatic form generation based on object properties.

### ✔ Nested Structures
Captures:
- `person`
  - `address`
  - `children[]`

### ✔ One-to-Many Relationships
Users can dynamically:
- Add children
- Remove children

### ✔ Data Output
On clicking **Save**, the fully-nested object is logged to the browser console.

## 🧠 How It Works

### Person Form
Generated but excludes nested fields (`address`, `children`) to avoid duplication.

### Address Form
Generated separately, demonstrating nested object editing.

### Children Form
Hidden initially, revealed only when adding children.


## ▶ Running the Project

1. Download all files to the same folder.
2. Open `index.html` in any modern browser.
3. Enter values for:
   - First Name
   - Surname
   - Age
   - Address fields
   - Any number of children
4. Click **Save**
5. Open Developer Tools → Console to view the JSON output

