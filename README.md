# BudgetBuddy - Personal Budget Planning and Expense Management Platform

## Project Description

BudgetBuddy is a Full Stack Personal Budget Planning and Expense Management Platform developed using React.js and Django REST Framework. It helps users manage their income, expenses, budgets, and savings efficiently.

## Features

### Authentication
- User Registration
- User Login using JWT Authentication

### Expense Management
- Add Expense
- View Expenses
- Update Expense
- Delete Expense
- Expense Categorization

### Income Management
- Add Income
- View Income
- Update Income
- Delete Income

### Budget Management
- Add Budget
- View Budget
- Delete Budget

### Dashboard
- Total Income
- Total Expenses
- Total Budget
- Savings Calculation

## Technology Stack

### Frontend
- React.js
- Bootstrap
- Axios

### Backend
- Django
- Django REST Framework
- JWT Authentication

### Database
- SQLite (Development)

## Project Structure

```
BudgetBuddy/
│
├── frontend/
├── users/
├── expenses/
├── budgets/
├── reports/
├── config/
├── manage.py
└── requirements.txt
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
python -m venv venv
```

Activate the virtual environment.

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Start the backend server:

```bash
python manage.py runserver
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Future Enhancements

- Expense Filtering
- Expense Sorting
- Reports and Analytics
- Savings Goals
- Notifications

## Developed By

**Sathish S**

Saveetha Engineering College

Computer Science and Engineering