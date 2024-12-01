---
title: "SQL in 90 seconds for busy entrepeneurs"
date_published: "2024-12-05"
date_updated: "2024-12-05"
excerpt:
tags: ["Tech", "Tutorial"]
fav: false
---

SQL helps you query and manage data efficiently. It was designed in the 1970s by IBM for business analysts, not programmers, so it resembles plain English.

## Top SQL Databases

For most entrepreneurs, these open-source options dominate ([DB-Engines](https://db-engines.com/en/ranking)):

1. **MySQL**
2. **PostgreSQL**
3. **SQLite**

Open-source means no licensing fees and long-term reliability.

## SQL tables

SQL stores data in _tables_, like spreadsheets but smarter. It enforces rules like:

- **NOT NULL**: No empty values.
- **UNIQUE**: No duplicate entries.
- **FOREIGN KEY**: Ensures valid relationships between tables.

## Retrieve data with SELECT

```sql
SELECT first_name, last_login_at
FROM customers
WHERE country = 'Singapore';
```

## Combine data across tables with JOIN

```sql
SELECT *
FROM customers
JOIN orders ON customers.id = orders.customer_id;
```

## Manipulate data with INSERT, UPDATE, and DELETE

```sql
INSERT INTO products (name, price) VALUES ('Laptop', 1200);
```

## Transactions guarantee data consistency

A transaction groups operations (e.g., creating orders and updating inventory). If one fails, a **rollback** ensures no partial changes are saved.

## Indexes speed up queries

Indexes act like a database's yellow pages, speeding up data retrieval for frequently queried fields (e.g., customer names or order IDs).

Because of internal optimisations like indexing, you can find 1 row in a table with 1 million rows in less than 1/100th of a second.
